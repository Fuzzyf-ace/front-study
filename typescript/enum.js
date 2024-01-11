//compiled from enum.ts
var Direction;
(function (Direction) {
  Direction[(Direction["UP"] = 0)] = "UP"; //(Direction["UP"] = 0) return 0 这里完成双向赋值
  Direction[(Direction["DOWN"] = 1)] = "DOWN";
  Direction[(Direction["LEFT"] = 2)] = "LEFT";
  Direction[(Direction["RIGHT"] = 3)] = "RIGHT";
})(Direction || (Direction = {}));

console.log("Direction", Direction);
/**
 * result：
 * Direction {0: 'UP', 1: 'DOWN', 2: 'LEFT', 3: 'RIGHT', UP: 0, DOWN: 1, LEFT: 2, RIGHT: 3}
 */
