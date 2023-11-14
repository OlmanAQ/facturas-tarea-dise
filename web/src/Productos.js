import React from 'react'
import ImageComponent from './Logo.png';
import { Link } from 'react-router-dom';

function Productos() {
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
                    <a href='/productos' class='nav-path'>Productos</a>
                    <a1 href='/' class='nav-mark'>{'>'}</a1>
                    <a href='/productos' class='nav-path'>Historial</a>
                    </div>
                    </nav>
                </div>
            </header>
            <div class='d-flex align-items-center'>
                <div className='p-3 template d-flex  100-w vh-100 bg-white'>
                
                    <div className=' Productos-panel rounded-corner bg-gray'>
                        <div className='mb-2 rounded-corner bg-green'>
                            <h3 className='pb-3 pt-3 bold-text' >Productos</h3>
                        </div >
                        
                            <div className='d-grid'>
                                <button className='boton-panel' onClick={() => redirigir('http://localhost:3001/Productos')} href ='/Productos'> Historial</button>
                            </div>
                            <div className='d-grid'>
                                <button className='boton-panel' onClick={() => redirigir('http://localhost:3001/AgregarCliente')} href ='/Productos'> Registrar clientes</button>
                            </div>
                        
                    </div>
                

                    <div className='p-3 template d-flex flex-column 100-w vh-100'>
                        <div className='d-flex'>
                            
                            <div className=''>
                                <button className='boton-compraventa' href ='/Productos'> Vender</button>
                            </div>
                            <div className=''>
                                <button className='boton-compraventa' href ='/Productos'> Ingresar</button>
                            </div>

                            <input type="search" placeholder='Busqueda' className='busqueda'/>

                            <div className=''>
                                <button className='boton-compraventa' href ='/Productos'> Buscar</button>
                            </div>
                        </div>

                        
                        
                        
                        <div className=' historial-muestras rounded-corner bg-gray'>
                        <div className='rounded-corner bg-green'>
                        <h3 className='pb-3 pt-3 bold-text' >   Tipo de muestra | Codigo | Fecha  | Consecutivo | Cantidad | Ingreso o Venta</h3>
                        </div >
                            <form>
                                
                            

                                
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Productos