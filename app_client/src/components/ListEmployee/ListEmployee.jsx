import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState, useEffect } from 'react'
import Api from '../../Api/Api'
import CardEmployee from '../CardEmployee/CardEmployee'
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function ListEmployee() {

  const [listEmployees, setListEmployees] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchListEmployees = async () => {
      const employees = await Api.getEmployees()
      setListEmployees(employees)
    }
    fetchListEmployees()
  }, [])

  useEffect(() => {
    if (listEmployees) setLoading(false)
  }, [listEmployees])

  const handleDelete = (id) => {
    Api.deleteEmployee(id)
  }

  return (
    <div>
      <Typography variant="h4" mb={4} sx={{ color: "#1495ff", fontWeight: "bold" }}>
        Liste des employés
      </Typography>
      <Grid2 container spacing={3}>
        {loading
          ?
          [...Array(15)].map((value, index) => {
            return (
              <Grid2 md={3} key={index}>
                <Skeleton animation="wave" variant="rectangular" width={350} height={200} />
              </Grid2>
            )
          })
          :
          listEmployees && listEmployees.map(e => (
              <Grid2 md={3} key={e.id}>
                <CardEmployee
                  id={e.id}
                  firstname={e.firstname}
                  lastname={e.lastname}
                  email={e.email}
                  gender={e.gender}
                  phone={e.phone}
                  picture={e.picture}
                  handleDelete={handleDelete}
                />
              </Grid2>
          ))
        }
      </Grid2>
    </div>
  )
}
