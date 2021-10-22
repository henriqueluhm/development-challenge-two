import { Patient } from "../../utils/types";
import { api } from "../api"

export const createPatient = async (event: Patient) => {
  return await api.post('Dev/new',  event ).then(({data}) => data)
}

export const getPatients = async () => {
  return await api.get<Patient[]>('Dev');
}

export const updatePatient = async (event: Patient) => {
  return await api.put(`Dev`, event).then(({ data: response }) => response)
}

export const deletePatient = async (event: Patient) => {
  return await api.delete(`Dev/${event}`)
    .then(({ data }) => data)
}