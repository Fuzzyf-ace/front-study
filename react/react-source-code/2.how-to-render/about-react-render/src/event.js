import { updaterQueue, flushUpdaterQueue } from "./Component";

export function addEvent(realDOM, eventType, callback) {
  realDOM.attachedEvent = realDOM.attachedEvent || {};
  realDOM.attachedEvent[eventType] = callback;
  if (document[eventType]) return;
  document[eventType] = dispatchEvent;
}

function dispatchEvent(nativeEvent) {
  // 事件合成机制：面向切片编程，对setState进行包装，批量更新state，刷新一次
  updaterQueue.isBatchingUpdate = true;
  // 事件合成机制：屏蔽浏览器差异
  const syntheticEvent = createSyntheticEvent(nativeEvent);
  let target = nativeEvent.target;
  // TODO: 这里有点没看懂
  while (target) {
    syntheticEvent.currentTarget = target;
    const eventType = `on${nativeEvent.type}`;
    const callback = target.attachedEvent && target.attachedEvent[eventType];
    callback && callback(syntheticEvent);
    // stop propagation if stopPropagation is called
    if (syntheticEvent.isPropagationStopped) {
      break;
    }
    target = target.parentNode;
  }
  flushUpdaterQueue();
}

function createSyntheticEvent(nativeEvent) {
  const syntheticEvent = {};
  // 这里为什么不能用Object.keys(nativeEvent)？
  // 需要考虑到原生事件对象的属性是不可枚举的，所以需要用for...in...循环
  //   const nativeEventKeys = Object.keys(nativeEvent);
  const nativeEventKeys = {};
  for (let key in nativeEvent) {
    nativeEventKeys[key] =
      typeof nativeEvent[key] === "function"
        ? nativeEvent[key].bind(nativeEvent)
        : nativeEvent[key];
  }
  Object.assign(syntheticEvent, {
    nativeEvent,
    isDefaultPrevented: false,
    isPropagationStopped: false,
    preventDefault: function () {
      this.isDefaultPrevented = true;
      if (this.nativeEvent.preventDefault) {
        this.nativeEvent.preventDefault();
      } else {
        this.nativeEvent.returnValue = false;
      }
    },
    stopPropagation: function () {
      this.isPropagationStopped = true;
      if (this.nativeEvent.stopPropagation) {
        this.nativeEvent.stopPropagation();
      } else {
        this.nativeEvent.cancelBubble = true;
      }
    },
  });
  return syntheticEvent;
}
