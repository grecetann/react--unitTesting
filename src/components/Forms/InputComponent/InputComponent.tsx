import React from 'react'
import { InputFormProps } from '../../../types/Form/Input/FormInput.types'


const InputComponent = ({label,name,changeHandler ,className}:InputFormProps) => {
  return (
    <div className={className}>
        <p >{label}</p>
         <input name={name} onChange={changeHandler} />
    </div>
 
  )
}

export default InputComponent