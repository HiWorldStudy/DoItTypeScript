"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = makePerson;
exports.testMakePersion = testMakePersion;
function makePerson(name, age) {
    return { name: name, age: age };
}
function testMakePersion() {
    console.log(makePerson('Jans', 22), makePerson('Jack', 33));
}
//# sourceMappingURL=makePersion.js.map