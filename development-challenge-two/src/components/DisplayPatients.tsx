import { useState, useEffect } from 'react';

import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper
} from '@mui/material/';

import { DeleteDialog } from './DeleteDialog';
import CreateDialog from './CreateDialog';
import { CreatePatientForm } from './CreatePatientForm'
import { EditPatientForm } from './EditPatientForm'
import EditDialog from './EditDialog';

import useStyles from '../styles/DisplayPatientsStyle';

import { getPatients } from '../services/patients/patients';
import { Patient } from '../utils/types';

export const DisplayPatients = () => {
  const classes = useStyles();
  const [data, setData] = useState<Patient[]>([]);

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
        <CreateDialog>
          <CreatePatientForm />
        </CreateDialog>
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
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <DeleteDialog patientId={patient.id} patientName={patient.name} patientBirthdate={patient.birthdate} patientEmail={patient.email} patientAdress={patient.address}></DeleteDialog>  
                  <EditDialog>
                    <EditPatientForm patientId={patient.id} patientName={patient.name} patientBirthdate={patient.birthdate} patientEmail={patient.email} patientAdress={patient.address}/>
                  </EditDialog>
                </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
