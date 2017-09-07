import {object, arrayOf, func, string} from 'prop-types'
import React, {Component} from 'react'

export default class Select extends Component{
    static propTypes = {
        options: arrayOf(object).isRequired,
        onChange: func.isRequired,
        placeholder: string,
        value: string
    }
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    handleChange = (event) =>{
        this.props.onChange(event.target.value)
    }
    render () {
        return (
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="none" disabled>{this.props.placeholder}</option>
                {this.props.options.map((opt, index) => <option key={index} value={opt.value}>{opt.label}</option>)}
            </select>
        )
    }
}