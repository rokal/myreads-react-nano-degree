import {object, arrayOf, func, string} from 'prop-types'
import React, {Component} from 'react'

class Select extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event){
        this.props.onChange(event.target.value);
    }

    render () {
        const {value} = this.props;
        return (
            <select value={value} onChange={this.handleChange}>
                <option value="none" disabled>{this.props.placeholder}</option>
                {this.props.options.map((opt, index) => <option key={index} value={opt.value}>{opt.label}</option>)}
            </select>
        )
    }
}

Select.propTypes = {
    options: arrayOf(object).isRequired,
    onChange: func.isRequired,
    placeholder: string,
    value: string,
    noneLabel: string
};

export default Select;
