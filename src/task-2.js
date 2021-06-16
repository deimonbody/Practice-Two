
export default function createCounter(n) {
    let a=-n
    return function(){return a+=n}
}
