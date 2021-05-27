# react-hoc-timers
A [higher-order component](https://reactjs.org/docs/higher-order-components.html) of React based on [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval), [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) and [clearTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout) that support multi-timers management.

## Install

### Using npm
```bash
npm install react-hoc-timers --save-dev
```

## Usage

### import
#### CommonJS
```
const Timer = require('react-hoc-timers')
```

#### ESM
```
import Timer from 'react-hoc-timers'
```

### Call HOC
```
const EnhancedComponent = Timer(MyComponent)
```
You can use the decorators feature of es2015, like this
```
@Timer
class MyComponent extends React.component {}
```
### Call the method of HOC
```
class MyComponent extends React.component {
    constructor(props) {
		super(props)
	}
    componentDidMount() {
        const { setInterval, clearInterval, setTimeout } = this.props
        # call setInterval
        let id = setInterval(() => {
            console.log('interval')
            # call clearInterval
            clearInterval(id)
        }, 3000)
        # call setTimeout
        setTimeout(() => {
            console.log('timeout')
        }, 5000)
    }
}
```
### Description
This higher-order component supports to remove all timers automatically when component uninstalled.

## Method
setInterval(callback, delay)
- callback => {Function} The callback function for the interval response.(required)
- delay => {Number} Delay time.(required)
- return value => {Number} Interval ID

clearInterval(id)
- id => {Number} Interval ID.(required)

setTimeout(callback, delay)
- callback => {Function} The callback function for the timeout response.(required)
- delay => {Number} Delay time.(required)
- return value => {Number} Timeout ID

clearTimeout(id)
- id => {Number} Timeout ID.(required)

## License
react-hoc-timers is [MIT licensed](https://github.com/AmoyDreamer/react-hoc-timers/blob/master/LICENSE).
