import throttle from "./throttle.js"
import debounce from "./debounce.js"
import Datejs from './formatter.js'
const date = new Datejs('2024-06-30').format('dd')
console.log(date)
export {
    throttle,
    debounce,
    Datejs
}