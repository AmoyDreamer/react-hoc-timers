/**
 * @author Allen Liu
 * @desc A higher-order component of React that support multi-timers management.
 */
import { Component } from 'react'

export default ComposedComponent => {
    class Timer extends Component {
        intervals = []
        timeouts = []
        constructor(props) {
            super(props)
        }
        setInterval() {
            let id = window.setInterval.apply(null, arguments)
            this.intervals.push(id)
            return id
        }
        clearInterval(id) {
            if (typeof id !== 'number') return
            for (let i = 0, len = this.intervals.length; i < len; i++) {
                if (this.intervals[i] == id) {
                    window.clearInterval(id)
                    this.intervals.splice(i, 1)
                    break
                }
            }
        }
        setTimeout() {
            let id = window.setTimeout.apply(null, arguments)
            this.timeouts.push(id)
            return id
        }
        clearTimeout(id) {
            if (typeof id !== 'number') return
            for (let i = 0, len = this.timeouts.length; i < len; i++) {
                if (this.timeouts[i] == id) {
                    window.clearTimeout(id)
                    this.timeouts.splice(i, 1)
                    break
                }
            }
        }
        componentWillUnmount() {
            this.intervals.map(window.clearInterval)
            this.timeouts.map(window.clearTimeout)
        }
        render() {
            const props = {
                ...this.props,
                setInterval: this.setInterval.bind(this),
                clearInterval: this.clearInterval.bind(this),
                setTimeout: this.setTimeout.bind(this),
                clearTimeout: this.clearTimeout.bind(this)
            }
            return <ComposedComponent {...props}/>
        }
    }
    return Timer
}
