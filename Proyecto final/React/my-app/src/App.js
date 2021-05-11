import './App.css';
import React from 'react';
import DataTable from 'react-data-table-component';
//import { response } from 'express';
//const tablaClientes = [
  //  { id: 1, año: "2000", nombre: 'Alvert' }, { id: 2, año: "3000", nombre: 'Gorge' },
//]
const axios = require('axios');





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

export default class App extends React.Component {
  state = {
    resultado: []
  }  

  componentDidMount(){
    axios.get('http://localhost:3001/api/todos')
  .then(res => {

    const resultado = res.data;
    this.setState({resultado});
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  }
  render(){
  return ( 
        <div>
        <DataTable columns = { columnas }
        data = { this.state.resultado }
        title = "Tabla clientes"
        pagination paginationComponentOptions = { paginacionAjustes }
        fixedHeader fixedHeaderScrollHeight = "600px" 
        />
        </div>
    )
  }
}

