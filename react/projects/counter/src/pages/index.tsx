import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { setTimeout } from "timers";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  // 每次计算一秒，计算完后晴空
  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   return clearTimeout(id);
  // }, [count]);

  // 跟前面类似，每次加一秒并清空
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);

  //   return () => clearInterval(id);
  // }, [count]);

  // 只使用一次setInterval，但使用useLayoutEffect和useRef在每次重绘前更新count的值
  // const ref = useRef<number>();
  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(ref.current + 1);
  //   }, 1000);
  // }, []);

  // useLayoutEffect(() => {
  //   ref.current = count;
  // });

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1); // 这里的count是在第一次渲染时取的值，不会更新，useEffect闭包中的count是不会更新的，可以使用ref
    }, 1000);
  }, []);

  return (
    <>
      <main>count: {count}</main>
    </>
  );
}
