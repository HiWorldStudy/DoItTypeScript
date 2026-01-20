import { readFilePromise } from "./readFilePromise";

readFilePromise('./package.json')
    .then((content: string) => {
        console.log(content)    // packige.json 내용 출력
        return readFilePromise('./tsconfig.json')
    })
    .then((content: string) => {
        console.log(content)    // tsconfig.json 내용 출력
        /* catch 쪽 콜백 함수에 'EISDIR: illegal operation on a directory, read' 오류가 전달됨 */
        return readFilePromise('.')
    })
    .catch((err: Error) => console.log('error:', err.message))
    .finally(() => console.log('프로그램 종료'))
    