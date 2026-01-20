import { readFilePromise } from "./readFilePromise";

const readFIlesAll = async (filenames: string[]) => {
    return await Promise.all(
        filenames.map(filename => readFilePromise(filename))
    )
}

readFIlesAll(['./package.json', './tsconfig.json'])
    .then(([packageJSON, tsconfigJSON]: string[]) => {
        console.log('<package.json>: ', packageJSON)
        console.log('<tsconfig.json>: ', tsconfigJSON)
    })
    .catch(err => console.log('error:', err.message))