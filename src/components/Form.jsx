import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    const {register, handleSubmit,formState: { errors }} = useForm();
    const onSubmit = (data) => {
        console.log(data.titulo)
    }
   
  return (
    <>
    <h1>Formulario</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" 
        placeholder="Ingrese nombre de titulo"
        className="form-control my-2"
        name="titulo"
        
        {
            ...register("titulo",{
                required: {value:true,
                    message: "This input is requered"
                },
                minLength: {
                    value: 2,
                    message: "This input must exceed 2 characters"
                  },
                    
                maxLength: {
                    value: 5,
                    message: "This input must exceed 5 characters"
                  },
                
            })
        }
        />
        <span className="text-danger text-small d-block mb-2">
    { (errors.titulo?.type==="required" && errors.titulo?.message)|| (errors.titulo?.type==="minLength" && errors.titulo?.message )|| (errors.titulo?.type==="maxLength" && errors.titulo?.message)}
</span>

        <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
    </form>
    </>
  )
}

export default Form