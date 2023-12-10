### When is async function more convinent than promise?

```javascript
import { useEffect, useState } from "react";

const URL = "http://geek.itheima.net/v1_0/channels";

function App() {
  // 创建一个状态数据
  const [list, setList] = useState([]);
  useEffect(() => {
    // 额外的操作 获取频道列表
    /**
     * use async function, we dont need to pass jsonRes to the next then 
     * because we can get jsonRes directly from variables
     * 
     */
    async function getList() {
      const res = await fetch(URL);
      console.log("fetched");
      const jsonRes = await res.json();
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log("timeout");
          resolve();
        }, 2000);
      });
      console.log(jsonRes);
      setList(jsonRes.data.channels);
    }
    getList();

    /**
     * use promise
     * if i want to pause 2 seconds or do something else, i need pass jsonRes to every then behind, we can only get data from parameters passed
     */
    // fetch(URL)
    //   .then((res) => {
    //     console.log("fetched");
    //     return res.json();
    //   })
    //   .then(
    //     (json) =>
    //       new Promise((resolve) => {
    //         setTimeout(() => {
    //           console.log("timeout");
    //           return resolve(json);
    //         }, 2000);
    //       })
    //   )
    //   .then((jsonRes) => setList(jsonRes.data.channels));
  }, []);
  return (
    <div>
      this is app
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```