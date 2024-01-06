import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Users() {

    // para mostrar los datos dinámicamente
    const [users, setUsers] = useState([{
        Name: "Osvaldo", Email: "osvaldo.reyes@gmail.com", Age: 24
    }]);

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
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td>
                                        <Link to="/update" className='btn btn-success'>Update</Link>

                                        <button>Delete</button>
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