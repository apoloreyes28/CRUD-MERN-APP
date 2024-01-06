import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser(){

    // extraemos (obtenemos) la ID de la URL
    const {id} = useParams();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();

    const navigate = useNavigate();

    // dedemos lanzar (mandar) el registro que nos gustaría actualizar
    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {
            console.log(result)

            // actualizamos los campos (datos)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();

        axios.put("http://localhost:3001/updateUser/"+id, {name, email, age})
        // al ir en esta ruta, obtenemos el ID del usuario, le pasaremos los datos
        // de los campos de entrada = {name, email, age}, obtenemos el resultado y 
        // lo devolvemos actualizado (modificado) a la página de Inicio (Principal, Main)
        .then(result => {
            console.log(result)
            navigate('/')
            // este método nos devuelve a la página de Inicio = Main = Principal '/' 

        })
        .catch(err => console.log(err))
    }

    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Update}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input 
                        type="text" 
                        placeholder='Enter Name' 
                        className='form-control' 
                        // recuperamos los datos
                        value={name}
                        onChange={(e)=> setName(e.target.value)} 
                        
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input 
                        type="email" 
                        placeholder='Enter Email' 
                        className='form-control' 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} 
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input 
                        type="text" 
                        placeholder='Enter Age' 
                        className='form-control' 
                        value={age}
                        onChange={(e)=> setAge(e.target.value)} 
                    />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
            </div>
        </div>
    )
}

export default UpdateUser;