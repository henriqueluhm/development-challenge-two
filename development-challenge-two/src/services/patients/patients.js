import { api } from "../api"

export const createPatient = async (params) => {
  return await api.post('Dev/new',  params ).then(({data}) => data)
}

export const getPatients = async () => {
  return await api.get('Dev');
}

export const updatePatient = async ({PatientID, data}) => {
  return await api.put(`Dev${PatientID}`, data).then(({ data: response }) => response)
}

export const deletePatient = async (event) => {
  return await api.delete(`Dev/${event}`)
    .then(({ data }) => data)
}