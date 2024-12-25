import React from "react"

import {InputProps} from '../../../types/formProps'
import './FormInput.scss'

export const FormInput:React.FC<InputProps> = ({name, type, placeholder, value, handleChange}) => {
    return(
        <div className="Input_area mt-4">
            <label htmlFor={name} className="text-slate-50 text-xl">{name}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} className="mt-1" value={value} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
}