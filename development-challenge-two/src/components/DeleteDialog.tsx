import React from 'react';

import { 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, 
  Button,
  IconButton
} from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';

import { deletePatient } from '../services/patients/patients';
import { DialogProps } from '../utils/types';

export const DeleteDialog = ({ patientId, patientName, patientBirthdate, patientEmail, patientAdress }: DialogProps)  => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  let thisPatient = {
    id: patientId,
    name: patientName,
    birthdate: patientBirthdate,
    email: patientEmail,
    address: patientAdress
  }

  return (
    <>
      <IconButton aria-label="delete" size="small" onClick={handleClickOpen}>
        <DeleteIcon fontSize="medium" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to remove this patient?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button 
            onClick={() => {
              deletePatient(thisPatient);
              handleClose();
            }} 
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
