import * as React from 'react';
import "./StyledInput.css"
export default function StyledInput({ placeholder, type, onChange, value, name }) {

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />
    );
}