import { api } from "../api"

export const createPatient = async (params) => {
  return await api.post('/patients',  params ).then(({data}) => data)
}

export const getPatients = async () => {
  return await api.get('/patients').then(({ data }) => data)
}

export const updatePatient = async ({PatientID, data}) => {
  return await api.put(`/patients/${PatientID}`, data).then(({ data: response }) => response)
}

export const deletePatient = async ({PatientID}) => {
  return await api.delete(`/patients/${PatientID}`).then(({ data }) => data)
}