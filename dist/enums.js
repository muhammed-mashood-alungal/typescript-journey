"use strict";
// 1. Numeric Enums
// enum Direction {
//     Up,    // 0
//     Down,  // 1
//     Left,  // 2
//     Right  // 3
//   }
//   console.log(Direction.Up);    // Output: 0
//   console.log(Direction.Left);  // Output: 2
// 2. String Enums
// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
//   }
//   console.log(Direction.Up);    // Output: "UP"
//   console.log(Direction.Left);  // Output: "LEFT"
// 3. Heterogeneous Enums
// enum MixedEnum {
//     No = 0,
//     Yes = "YES"
//   }
//   console.log(MixedEnum.No);   // Output: 0
//   console.log(MixedEnum.Yes);  // Output: "YES"
//  4. Const Enums
// const enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
//   }
//   const move = Direction.Up;
//   console.log(move);  // Output: 1 (but no JavaScript code for the enum itself)
// Reverse Mapping (for Numeric Enums)
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
//   }
//   console.log(Direction[1]);  // Output: "Up" (reverse lookup)
