import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// get real dom by browser api
const element = document.getElementById("root");
const obj = {};
for (let key in element) {
  obj[key] = element[key];
}
const obj2 = {};
// create virtual dom by jsx
const ele = <div>this is virtual</div>;
for (let key in ele) {
  obj2[key] = ele[key];
}
root.render(
  <div>
    <div>
      Real DOM
      {Object.keys(obj).map((key) => (
        <div key={key}>
          <span style={{ color: "red" }}>{key}</span> :{" "}
          {obj[key] && obj[key].toString()}
        </div>
      ))}
    </div>
    <div>
      Virtual DOM
      {Object.keys(obj2).map((key) => (
        <div key={key}>
          <span style={{ color: "green" }}>{key}</span> :{" "}
          {obj2[key] && obj2[key].toString()}
        </div>
      ))}
    </div>
  </div>
);
