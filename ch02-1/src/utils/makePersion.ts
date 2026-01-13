export function makePerson(name : string, age: number) {
    return {name : name, age: age}
}
export function testMakePersion() {
    console.log(
        makePerson('Jans', 22),
        makePerson('Jack', 33)
    )
}