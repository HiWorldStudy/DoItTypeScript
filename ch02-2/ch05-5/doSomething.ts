import { ResultType } from "./ResultType"

export const doSomething = (): ResultType => {
    try {
        throw new Error('Some error occurs...')
    }  catch (e: unknown) {  // ✅ unknown 명시
    const error = e as Error;  // ✅ Error로 단언
    return [false, error.message];  // ✅ string 타입 보장
    }
}