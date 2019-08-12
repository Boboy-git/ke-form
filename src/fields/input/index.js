import React, { Component } from 'react';
import { Input } from 'antd';

export default class FieldInput extends Component {
  render() {
    let { label, disabled = false, placeholder, self = {} } = this.props.config;
    const { value, onChange } = this.props;
    placeholder = placeholder || '请输入' + label;

    return (
      <Input
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        {...self}/>
    )
  }
}

FieldInput.initialValue = "";