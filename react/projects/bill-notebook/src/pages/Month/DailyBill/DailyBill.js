import { billTypeToName } from "@/constants/BillName";
import classNames from "classnames";
import { useState } from "react";
import "./index.scss";

const DailyBill = ({ date, income, pay, left, bills }) => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand(!expand);
  return (
    <div className={classNames("dailyBill")}>
      <div className="header" onClick={toggleExpand}>
        <div className="dateIcon">
          <span className="date">{date}</span>
          <span className={classNames("arrow")}></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{income.toFixed(2)}</span>
          </div>
          <div className="balance">
            <span className="money">{left.toFixed(2)}</span>
            <span className="type">结余</span>
          </div>
        </div>
        <div className={classNames("billList", { visible: expand })}>
          {bills.map((item) => {
            return (
              <div className="bill" key={item.id}>
                <div className="detail">
                  <div className="billType">{billTypeToName[item.useFor]}</div>
                </div>
                <div className={classNames("money", item.type)}>
                  {item.money.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default DailyBill;
