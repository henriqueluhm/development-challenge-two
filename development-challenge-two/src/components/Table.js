import React from 'react';
import { useState, useEffect } from 'react';

import MaterialTable from 'material-table';

import { generateRandomid } from '../utils/utils';
import { api } from '../services/api';

export const Table = () => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState();

  const lenght = 8;

  useEffect(() => {
    api.get('Dev/')
      .then((response) => {
        setData(response.data);
        setName(response.name);
        setBirthdate(response.birthdate);
        setEmail(response.email);
        setAddress(response.address);
        setId(response.id);
      });
  },[]);

  const [data, setData] = useState([]);

  const columns = [
    { title: 'Id',         field: 'id', editable: false},
    { title: 'Name',       field: 'name', validate: rowData => rowData.name === '' ? { isValid: false, helperText: 'Name is required'} : true },
    { title: 'Birthdate',  field: 'birthdate', validate: rowData => rowData.birthdate === '' ? { isValid: false, helperText: 'Birthdate is required'} : true },
    { title: 'Email',      field: 'email', validate: rowData => rowData.email === '' ? { isValid: false, helperText: 'Email is required'} : true },
    { title: 'Address',    field: 'address', validate: rowData => rowData.address === '' ? { isValid: false, helperText: 'Address is required'} : true }
  ]

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      alert("E P")
    }
  }

  return (
    <div 
    onKeyDown={e => handleKey(e)}
    >
      <MaterialTable title="Material Table" 
      title="Patients"
      localization={{ 
        body: { 
          editRow: { 
            deleteText: 'Are you sure you want to delete this patient?' 
          }
        }
      }}
      data={data}
      columns={columns}
      editable={{
        onRowAdd: (newRow) => new Promise((resolve, reject) => {
          const updatedRows=[...data, {id:generateRandomid(lenght), ...newRow}];
          setTimeout(() => {
            setData(updatedRows);
            resolve();
          }, 1000);
        }),
        onRowDelete: selectedRow => new Promise((resolve, reject) => {
          const index = selectedRow.tableData.id;
          const updatedRows = [...data];
          updatedRows.splice(index, 1);
          console.log(updatedRows);
          setTimeout(() => {
            setData(updatedRows);
            resolve();
          }, 1000);
        }),
        onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
          const index = oldRow.tableData.id;
          const updatedRows = [...data];
          updatedRows[index]=updatedRow;
          setTimeout(() => {
            setData(updatedRows);
            resolve();
          }, 1000);
        })
      }}
      options={{
        actionsColumnIndex: -1,
        addRowPosition: "first"
      }}
      />
    </div>
  )
}
