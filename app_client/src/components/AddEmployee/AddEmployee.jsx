import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Api from '../../Api/Api';
import Typography from '@mui/material/Typography';

export default function AddEmployee() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    picture: "",
    picturePreview: "",
  })

  const onSubmitHandler = (event) => {
    event.preventDefault()
    Api.addEmployee(formData)
  }

  useEffect(() => {
    let picturePreview
    try {
      if (formData.picture) picturePreview = URL.createObjectURL(formData.picture)
    } catch (e) {
      console.log('error preview', e);
    }
    setFormData(oldState => ({...oldState, picturePreview}))
  }, [formData.picture])


  const handleChange = (event) => {
    if (event.target.name === 'picture') {
      setFormData({ ...formData, [event.target.name]: event.target.files[0] })
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    }
  }

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <form onSubmit={onSubmitHandler}>
        <Grid2
          container
          spacing={2}
        >
          <Grid2 xs={12} md={12}>
            <Typography variant="h4" mb={4} sx={{ color: "#1495ff", fontWeight: "bold" }}>
              Ajouter un employé
            </Typography>
          </Grid2>
          <Grid2 xs={12} md={12} display="flex" justifyContent="center">
            <TextField
              required
              id="outlined-required"
              label="Prénom"
              name="firstname"
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 xs={12} md={12} display="flex" justifyContent="center">
            <TextField
              required
              id="outlined-required"
              name="name"
              label="Nom"
              onChange={handleChange}

            />
          </Grid2>
          <Grid2 xs={12} md={12} display="flex" justifyContent="center">
            <TextField
              required
              id="outlined-required"
              name="email"
              label="E-mail"
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 xs={12} md={12} display="flex" justifyContent="center">
            <TextField
              required
              id="outlined-required"
              name="phone"
              label="Téléphone"
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 xs={12} md={12} display="flex" justifyContent="center">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Genre *</InputLabel>
              <Select
                required
                labelId="demo-select-small"
                id="demo-select-small"
                name="gender"
                value={formData.gender}
                label="Genre"
                onChange={handleChange}
              >
                <MenuItem value={"male"}>Homme</MenuItem>
                <MenuItem value={"female"}>Femme</MenuItem>
                <MenuItem value={"other"}>Autre</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              component="label"
            >
              Photo
              <input
                hidden
                accept="image/*"
                type="file"
                id="btn-upload"
                name="picture"
                onChange={handleChange}
              />
            </Button>

          </Grid2>
          <Grid2 xs={12} md={12} display="flex" justifyContent="center">
            {formData.picturePreview && <img src={formData.picturePreview} alt="profile" width="70" height="70" />}

          </Grid2>
          <Grid2 xs={12} md={12} display="flex" justifyContent="center">
            <Button
              variant="contained"
              type="submit"
            >
              Valider
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  )
}
