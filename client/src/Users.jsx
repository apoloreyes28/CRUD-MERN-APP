import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Users() {

    // para mostrar los datos dinámicamente
    const [users, setUsers] = useState([]);
    // en esta matriz (arreglo, lista) mostraremos el conjunto de resultados (usuarios)


    // mostramos los datos (records, registros) en la pantalla cada 
    // vez que accedemos a la API
    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>

                {/* este Link (ruta, enlace) nos permite movernos (cambiar) de página (enrutar) */}
                <Link to="/create" className='btn btn-success'>Add +</Link>

                {/* <h2>Register Table</h2> */}
                <table className='table'>
                    <thead>
                        {/* encabezado de la tabla */}
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // mostramos los datos
                            users.map((user) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to="/update" className='btn btn-success'>Update</Link>

                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Users;