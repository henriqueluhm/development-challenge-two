import React from 'react'
import { useState, useEffect } from 'react';

import { api } from '../services/api';

export const Home = () => {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState();

  useEffect(() => {
    api.get('Dev/')
      .then((response) => {
        setPatients(response.data);
        setName(response.name);
        setBirthdate(response.birthdate);
        setEmail(response.email);
        setAddress(response.address);
        setId(response.id);
      });
  },[]);


  return (
    <div>
      {patients.map((patient, id) => (
        <div className="tables">
          <p>{patient.name}</p>
          <p>{patient.birthdate}</p>
          <p>{patient.email}</p>
          <p>{patient.address}</p>
          <p>{patient.id}</p>
        </div>
      ))
      }
    </div>
  )
}
