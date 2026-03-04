// если export default
// import Square from "./lib.mjs";
// если просто export
// import { Square } from "./lib.mjs";
// import { size1, size2, print } from "./lib.mjs";
// import { size2 } from "./lib.mjs";

import Square, { size1, size2, print }  from "./lib.mjs";

const mySquare = new Square(size1);
print("The area of mySquare", mySquare.area());
// console.log(`The area of mySquare is ${mySquare.area()}`);

const mySquare2 = new Square(size2);
print("The area of mySquare2", mySquare2.area());
// console.log(`The area of mySquare2 is ${mySquare2.area()}`);
