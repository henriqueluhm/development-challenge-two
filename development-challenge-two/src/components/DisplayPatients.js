import React, { useState, useEffect } from 'react';

import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Button,
  IconButton 
} from '@mui/material/';

import useStyles from './DisplayPatientsStyle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { getPatients, deletePatient } from '../services/patients/patients';

export const DisplayPatients = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    getPatients()
      .then((response) => {
        setData(response.data);
      })
  },[]);

  const patients = data;

  return (
    <>
      <div className={classes.wrapper}>
        <h2 className={classes.info}>PATIENTS DATA:</h2>
        <Button 
          className={classes.newPatientButton}
          variant="contained"
          color="success"
          >
          New Patient
        </Button>
      </div>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col style={{width:'20%'}}/>
            <col style={{width:'10%'}}/>
            <col style={{width:'20%'}}/>
            <col style={{width:'20%'}}/>
            <col style={{width:'20%'}}/>
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell} style={{color: '#e3f2fd'}}>Name</TableCell>
              <TableCell className={classes.tableHeaderCell} style={{color: '#e3f2fd'}}>Birthdate</TableCell>
              <TableCell className={classes.tableHeaderCell} style={{color: '#e3f2fd'}}>Email</TableCell>
              <TableCell className={classes.tableHeaderCell} style={{color: '#e3f2fd'}}>Address</TableCell>
              <TableCell className={classes.tableHeaderCell} style={{color: '#e3f2fd'}} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow
                key={patient.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className={classes.tablecell} component="th" scope="row">
                  {patient.name}
                </TableCell>
                <TableCell className={classes.tablecell}>{patient.birthdate}</TableCell>
                <TableCell className={classes.tablecell}>{patient.email}</TableCell>
                <TableCell className={classes.tablecell}>{patient.address}</TableCell>
                <TableCell align="center">
                <IconButton aria-label="delete" size="small" onClick={() => {
                  deletePatient(patient);
                }}>
                  <DeleteIcon fontSize="medium" />
                </IconButton>
                <IconButton aria-label="edit" size="small">
                  <EditIcon fontSize="medium" />
                </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
