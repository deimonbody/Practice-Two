
export default function sum(...values) {
    if([...values].length == 0) return 0
    return [...values].reduce((prev,curr)=>prev+=curr)
}
