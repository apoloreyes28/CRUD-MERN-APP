import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Users() {

    // para mostrar los datos dinámicamente
    const [users, setUsers] = useState([]);
    // en esta matriz (arreglo, lista) mostraremos el conjunto de resultados (usuarios)

    
    // mostramos los datos (records, registros) en la pantalla cada 
    // vez que accedemos a la API
    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])


    // función para eliminar un registro (usuario) usando su ID
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
            .then(res => {
                console.log(res)

                // esto sirve para recargar la página web
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>

                <h2>Register Table</h2>

                {/* este Link (ruta, enlace) nos permite movernos (cambiar) de página (enrutar) */}
                <Link to="/create" className='btn btn-success'>Add +</Link>

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
                                        {/* seleccionamos al usuario usando su ID (obteneemos su ID para realizar dicha acción) */}
                                        <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>

                                        <button className='btn btn-danger'
                                                onClick={(e) => handleDelete(user._id)}>Delete
                                        </button>
                                        {/* creamos un evento que se va ejecutar al pulsar el botón, eliminamos al usuario usando su ID */}
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