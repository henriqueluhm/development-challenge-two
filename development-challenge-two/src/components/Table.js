import React, { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { generateRandomid } from '../utils/utils';

import { getPatients, deletePatient, createPatient, updatePatient } from '../services/patients/patients';

export const Table = () => {
  const [data, setData] = useState([]);

  const lenght = 8;

  useEffect(() => {
    getPatients()
      .then((response) => {
        setData(response.data);
      })
  },[]);

  const columns = [
    { title: 'Id',        field: 'id', width: 200 },
    { title: 'Name',      field: 'name', width: 400 },
    { title: 'Birthdate', field: 'birthdate', width: 400 },
    { title: 'Email',     field: 'email', width: 400 },
    { title: 'Address',   field: 'address', width: 600 }
  ]

  return (
    <div style={{height: 700, width: '100%'}}>
      <DataGrid 
        rows={data}
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
  )
}
