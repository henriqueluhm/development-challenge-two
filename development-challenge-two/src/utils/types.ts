export interface Patient {
  id: string;
  name: string;
  birthdate: string;
  email: string;
  address: string;
}

export interface SidebarType {
  title: string;
  path: string;
  className: string;
}

export interface DialogProps {
  patientId: string;
  patientName: string;
  patientBirthdate: string;
  patientEmail: string;
  patientAdress: string;
}