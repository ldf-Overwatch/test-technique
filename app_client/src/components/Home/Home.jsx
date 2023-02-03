import React from 'react'
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import homeBgImg from '../../assets/img/homebg.svg'

export default function Home() {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 xs={6} md={5}>
          <Typography variant="h4" mb={4} sx={{color:"#1495ff", fontWeight: "bold"}}>
          Logiciel de gestion du personnel
        </Typography>
        <Typography variant="h3" mb={2} sx={{color:"#2a3551", fontWeight: "bold"}}>
          Données RH, un outil pour les gouverner toutes
        </Typography>
        <Typography variant="p" sx={{color:"#2a3551", fontWeight: "bold"}}>
          Le logiciel Employee Manager RH centralise et gère les informations de vos collaborateurs depuis la signature de leur contrat jusqu’à leur départ de l’entreprise
        </Typography>
        </Grid2>
        <Grid2 xs={12} md={7}>
          <img src={homeBgImg} width="650" alt="homeBg"/>
        </Grid2>
      </Grid2>
    </>
  )
}
