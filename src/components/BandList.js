import React from 'react'

const BandList = () => {
    const crearRows = () => {
        return (
            <tr>
                <td>
                    <button className='btn btn-primary'>+1</button>
                </td>
                <td>
                    <input className='from-control'></input>
                </td>
                <td> <h3>15</h3> </td>
                <td>
                    <button className='btn btn-danger'>
                        Borrar
                    </button>
                </td>
            </tr>
        )
    }
  return (
    <>
    <h3>Bandas Actuales</h3>
        <table className='table table-stripped'>
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Votos</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                { crearRows() }
            </tbody>
        </table>
      
    </>
  )
}

export default BandList
