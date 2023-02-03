import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Button from '@mui/material/Button';
import Api from '../../Api/Api';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Contact() {

  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    service: "",
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    Api.sendMessage(formData)
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid2
          container
          spacing={2}
        >
          <Grid2 xs={3} md={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Service</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"support"}
                label="Service"
                onChange={handleChange}
              >
                <MenuItem value={"support"}>Support</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 xs={6} md={12}>
            <TextField
              required
              id="outlined-required"
              label="Sujet"
              name="subject"
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 xs={6} md={12}>
            <TextField
              required
              sx={{ minWidth: "500px" }}
              id="outlined-required"
              label="Message"
              name="message"
              multiline
              rows={10}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 xs={12} md={12} display="flex" justifyContent="left">
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
