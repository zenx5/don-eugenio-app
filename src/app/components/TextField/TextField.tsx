"use client"

import { useEffect, useState } from "react"
import styles from './TextField.module.css'

export default function TextField ({ label='', name, value:val }:{ label:string, name:string, value:string }) {
    const [value, setValue] = useState(val)

    useEffect(()=>{
        console.log(name, value)
        sessionStorage.setItem(`input_${name}`, value)
    },[name, value])

    const handlerChange = (event:any) => {
        setValue( prev => event.target.value )
        sessionStorage.setItem(`input_${name}`, event.target.value)
    }

    return <div className={styles.textfield}>
        <label>{ label }</label>
        <input type='text' value={value} onChange={handlerChange}/>
    </div>
}