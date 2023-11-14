import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ImageComponent from './Logo.png';
import BotonAgregarProducto from './botonAgregarCliente'; // Asegúrate de ajustar la ruta de importación según tu estructura de archivos

import 'bootstrap/dist/css/bootstrap.min.css';



function AgregarProducto() {
    const [libros, setLibros] = useState([]);
    const [libroActual, setLibroActual] = useState({ nombre: '', cedula: '', telefono: '', correo: '' });
    const [isEditing, setIsEditing] = useState(false);
  
    const API_URL = 'http://localhost:3000/api/productos';
  
    useEffect(() => {
      fetchLibros();
    }, []);
  
    const fetchLibros = async () => {
      try {
        const response = await axios.get(API_URL);
        setLibros(response.data);
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    };
  
    const handleAgregarEditarLibro = async (libro) => {
        try {
          if (isEditing) {
            await axios.put(`${API_URL}/${libro.id}`, libro);
          } else {
            await axios.post(API_URL, libro);
          }
          fetchLibros();
          setLibroActual({ nombre: '', cedula: '', telefono: '', correo: ''  });
          setIsEditing(false);
        } catch (error) {
          console.error('Error adding or updating libro:', error);
        }
    };

    const handleEditLibro = (libro) => {
        setLibroActual(libro);
        setIsEditing(true);
    };
    

    const handleDeleteLibro = async (id) => {
        try {
          await axios.delete(`${API_URL}/${id}`);
          fetchLibros();
        } catch (error) {
          console.error('Error deleting libro:', error);
        }
    };

    const handleCancelar = () => {
        setLibroActual({ nombre: '', cedula: '', telefono: '', correo: '' });
        setIsEditing(false);
    };

    function redirigir(destino) {
        // Cambia 'url_destino' por la URL a la que deseas redirigir
        window.location.href = destino;
    }


    return (
        <div>
            <header>
                <div class=' d-flex align-items-center'>
                    <img src={ImageComponent }width={100} alt="logo del proyecto" />
                    
                    <h2 class='p-4 header-text'>LabSuelos</h2>
                    <nav>
                    <div class=' d-flex '>
                    <a href='/' class='nav-path'>Inicio</a>
                    <a1 href='/' class='nav-mark'>{'>'}</a1>
                    <a href='/empleado' class='nav-path'>Empleado</a>
                    <a1 href='/' class='nav-mark'>{'>'}</a1>
                    <a href='/empleado' class='nav-path'>Agregar Producto</a>
                    </div>
                    </nav>
                </div>
            </header>
            
            <div class='d-flex align-items-center'>
                <div className='p-3 template d-flex  100-w vh-100 bg-white'>
                
                    <div className=' empleado-panel rounded-corner bg-gray'>
                        <div className='mb-2 rounded-corner bg-green'>
                            <h3 className='pb-3 pt-3 bold-text' >Empleado</h3>
                        </div >
                        
                            <div className='d-grid'>
                                <button className='boton-panel' onClick={() => redirigir('http://localhost:3001/Empleado')} href ='/empleado'> Historial</button>
                            </div>
                            <div className='d-grid'>
                                <button className='boton-panel' onClick={() => redirigir('http://localhost:3001/AgregarProducto')} href ='/empleado'> Registrar Productos</button>
                            </div>
                            

                        
                    </div>
                

                    <div className='p-3 template d-flex flex-column 100-w vh-100'>
                        <div className='d-flex'>
                            
                        </div>

                        
                        
                        
                        <div className=' ingresar-Producto rounded-corner bg-gray'>
                        <div className=' rounded-corner bg-green'>
                        <h3 className='pb-3 pt-3 bold-text' >Ingresar datos del Producto</h3>
                        </div >
                        <BotonAgregarProducto 
                            onAgregarEditar={handleAgregarEditarLibro} 
                            libroActual={libroActual} 
                            isEditing={isEditing} 
                            onCancelar={handleCancelar} 
                        />
                        </div>
                        
                        <div className='mt-4 panel-Producto rounded-corner bg-gray'>
                        
                            


                            <div className="table-container">
                                <table className="table">
                                <thead>
                                    <tr className="table-primary">
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>cedula</th>
                                    <th>Telefono</th>
                                    <th>Correo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {libros.map((libro, index) => (
                                    <tr key={libro.id} className={index % 2 === 0 ? 'table-light' : 'table-secondary'}>
                                        <td>{libro.id}</td>
                                        <td>{libro.nombre}</td>
                                        <td>{libro.cedula}</td>
                                        <td>{libro.telefono}</td>
                                        <td>{libro.correo}</td>
                                        <td>
                                        <button onClick={() => handleEditLibro(libro)} className="btn btn-warning btn-sm me-2">Editar</button>
                                        <button onClick={() => handleDeleteLibro(libro.id)} className="btn btn-danger btn-sm">Eliminar</button>
                                        </td>
                                    </tr>
                                    ))} 
                                </tbody>
                                </table>
                            </div>
                                
                                
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default AgregarProducto