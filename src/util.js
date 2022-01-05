
export function today() {
    let today = new Date()
    return today.toLocaleDateString()
}

export function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}