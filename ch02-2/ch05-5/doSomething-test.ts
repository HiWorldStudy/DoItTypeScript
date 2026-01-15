import { doSomething } from "./doSomething";
import { ResultType } from "./ResultType";

let strResult:ResultType; // doSomething에서 ResultType을 import 하였어도 여기서도 import 해야함
strResult = doSomething();

//const [result, message] = doSomething();

console.log(strResult[0], strResult[1]);