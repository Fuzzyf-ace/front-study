import { Button, DatePicker, Input, NavBar } from "antd-mobile";
import Icon from "@/components/Icon";
import "./index.scss";
import classNames from "classnames";
import { billListData } from "@/constants/BillName";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addBillRequest } from "@/store/modules/billStore";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

const New = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("pay");
  const [money, setMoney] = useState(0);
  const [payReason, setPayReason] = useState("food");
  const [incomeReason, setIncomeReason] = useState("salary");
  const [date, setDate] = useState(new Date());
  const [dateVisible, setDateVisible] = useState(false);
  const dispatch = useDispatch();
  const handleSumbit = () => {
    const data = {
      type,
      money: type === "pay" ? -money : +money,
      date,
      useFor: type === "pay" ? payReason : incomeReason,
    };
    dispatch(addBillRequest(data));
    navigate(-1);
  };
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames({ selected: type === "pay" })}
            onClick={() => {
              setType("pay");
            }}
          >
            支出
          </Button>
          <Button
            className={classNames({ selected: type === "income" })}
            shape="rounded"
            onClick={() => {
              setType("income");
            }}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date" onClick={() => setDateVisible(!dateVisible)}>
              <Icon type="calendar" className="icon" />
              <span className="text">{dayjs(date).format("YY年MM月DD日")}</span>
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
                visible={dateVisible}
                onCancel={() => setDateVisible(!dateVisible)}
                onConfirm={(date) => {
                  setDate(date);
                  setDateVisible(!dateVisible);
                }}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                //the value of input is string
                onChange={(value) => setMoney(parseInt(value))}
                placeholder="0.00"
                type="number"
                value={money}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[type].map((item) => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map((item) => {
                  return (
                    <div
                      className={classNames("item", {
                        selected:
                          item.type === payReason || item.type === incomeReason,
                      })}
                      key={item.type}
                      onClick={() => {
                        type === "pay" && setPayReason(item.type);
                        type === "income" && setIncomeReason(item.type);
                      }}
                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={() => handleSumbit()}>
          保 存
        </Button>
      </div>
    </div>
  );
};

export default New;
