import './App.css';
import React from 'react';
import DataTable from 'react-data-table-component';
//import { response } from 'express';
//const tablaClientes = [
  //  { id: 1, año: "2000", nombre: 'Alvert' }, { id: 2, año: "3000", nombre: 'Gorge' },
//]
const axios = require('axios');
var resultado;
axios.get('http://localhost:3001/api/todos')
  .then(function (response) {
    resultado = response;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });


const columnas = [{
        name: 'Empresa',
        selector: 'empresa_txt',
        sortable: true
    },
    {
        name: 'Mail',
        selector: 'mail_txt',
        sortable: true
    }
]
const paginacionAjustes = {
    rowsPerPageText: 'Filas Por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}

function App() {
    return ( 
        <div>
        <DataTable columns = { columnas }
        data = { resultado }
        title = "Tabla clientes"
        pagination paginationComponentOptions = { paginacionAjustes }
        fixedHeader fixedHeaderScrollHeight = "600px" 
        />
        </div>
    )
}

export default App;