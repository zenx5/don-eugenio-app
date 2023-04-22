"use client";

export default function ButtonForm ({ inputs, url, method }:{ inputs:Array<string>, url:string, method:string }) {

    const handlerAction = async () => {
        let values = {}
        for( const name of inputs ) {
            values = {
                ...values,
                [name]: sessionStorage.getItem(`input_${name}`)
            }
        }
        await fetch(url,{
            method,
            body: JSON.stringify(values)
        })
    }

    return <button type="button" onClick={handlerAction}>Guardar</button>
}