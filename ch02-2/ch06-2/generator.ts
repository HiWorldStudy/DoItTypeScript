export function* generator() {
    console.log("Generator started")
    let value = 1
    while (value <= 4) 
        yield value++
    
    console.log("Generator ended")
}