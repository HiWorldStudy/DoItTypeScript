import { readFileSync, readFile } from "node:fs";

// Package.json 파일을 동기적으로 읽기
console.log('read package.json using synchronous api...')
const buffer:Buffer = readFileSync('./package.json')
console.log(buffer.toString())

// Package.json 파일을 비동기적으로 읽기
readFile('./package.json', (error: Error, buffer: Buffer) => {
    console.log('read package.json using asynchronous api...')
    console.log(buffer.toString())
})

// Promise와 async/await 구문을 사용한 예
const readFilePromise = (filename: string) : Promise<string> =>
    new Promise<string>((resolve, reject) => {
        readFile(filename, (error: Error, buffer: Buffer) => {
            if(error)
                reject(error)
            else
                resolve(buffer.toString())
        })
    });

(async () => {
    const content = await readFilePromise('./package.json')
    console.log('read package.json using promise and async/await...')
    console.log(content)    // 실행은 되나 출력되지 않고 종료,,

})