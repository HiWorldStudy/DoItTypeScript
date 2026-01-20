import {readFile} from "node:fs";

readFile('./package.json', (err: Error, buffer: Buffer) => {
    if(err) throw err
    else {
        const content: string = buffer.toString()
        console.log(content)
    }
})

readFile('./tsconfig.json', (err: Error, buffer: Buffer) => {
    if(err) throw err
    else {
        const content: string = buffer.toString()
        console.log(content)
    }
})
// 코드는 멈추지 않고 계속 실행
console.log(1)
console.log(2)