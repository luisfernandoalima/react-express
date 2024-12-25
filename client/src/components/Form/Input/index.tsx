import React from "react"

import {InputProps} from '../../../types/formProps'
import './FormInput.scss'

export const FormInput:React.FC<InputProps> = ({name, type, placeholder}) => {
    return(
        <div className="Input_area mb-4">
            <label htmlFor={name} className="text-slate-50 text-xl">{name}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} className="mt-1"/>
        </div>
    )
}