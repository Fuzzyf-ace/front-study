import { NavBar, DatePicker } from "antd-mobile";
import { useMemo, useState } from "react";
import "./index.scss";
import classNames from "classnames";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _ from "lodash";

const Month = () => {
  const formatter = "YYYY | MM月";
  const [dateVisible, setDateVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format(formatter);
  });
  const { billList } = useSelector((state) => state.bill);
  const monthGroupedBillList = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format(formatter));
  }, [billList]);
  const { incomeTotal, payTotal, leftTotal } = useMemo(() => {
    const currentMonthList = monthGroupedBillList[currentDate];
    if (!currentMonthList) {
      return {
        incomeTotal: 0,
        payTotal: 0,
        leftTotal: 0,
      };
    }
    const incomeTotal = currentMonthList
      .filter((item) => item.type === "income")
      .reduce((prev, cur) => prev + cur.money, 0);

    const payTotal = currentMonthList
      .filter((item) => item.type === "pay")
      .reduce((prev, cur) => prev - cur.money, 0);
    const leftTotal = incomeTotal - payTotal;
    return { incomeTotal, payTotal, leftTotal };
  }, [currentDate, monthGroupedBillList]);
  const toggleDateVisible = () => {
    setDateVisible(!dateVisible);
  };
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={toggleDateVisible}>
            <span className="text">{currentDate}账单</span>
            <span
              className={classNames("arrow", { expand: dateVisible })}
            ></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{payTotal}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{incomeTotal}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{leftTotal}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            defaultValue={new Date()}
            visible={dateVisible}
            tillNow={true}
            onCancel={toggleDateVisible}
            mouseWheel={true}
            onConfirm={(date) => {
              const formattedDate = dayjs(date).format(formatter);
              setCurrentDate(formattedDate);
              console.log(
                formattedDate,
                currentDate,
                monthGroupedBillList[currentDate]
              ); //2023 | 02月 2023 | 01月 undefined

              // setIncomeTotal(
              //   monthGroupedBillList[formattedDate]
              //     ? monthGroupedBillList[formattedDate]
              //         .filter((item) => item.type === "income")
              //         .reduce((prev, cur) => prev + cur.money, 0)
              //     : 0
              // );

              toggleDateVisible();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Month;
