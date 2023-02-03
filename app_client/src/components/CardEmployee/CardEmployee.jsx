import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogBox from '../DialogBox/DialogBox';

export default function CardEmployee({ id, firstname, lastname, email, gender, phone, picture, handleDelete  }) {
  const [confirm, setConfirm] = useState(false)

  const handleClose = () => {
    setConfirm(false)
  }

  const onDelete = () => {
    setConfirm(true)
  }
  return (
    <>
      <Card sx={{ maxWidth: 345, minWidth: 240 }}>
        <Grid2 container spacing="2" xs={12} md={12}>
          <Grid2 xs={12} md={12}>
            <CardMedia
              component="img"
              image={picture}
              alt="picture"
            />
          </Grid2>
          <Grid2 xs={12} md={12}>

            <CardContent>
              <Grid2 xs={12} md={12}>

                <Typography gutterBottom variant="h5" component="div">
                  {firstname + ' ' + lastname}
                </Typography>
              </Grid2>
              <Grid2 xs={12} md={12}>

                <Typography variant="body2">
                  {gender}
                </Typography>
              </Grid2>
              <Grid2 xs={12} md={12}>

                <Typography variant="body2">
                  {phone}
                </Typography>
              </Grid2>
              <Grid2 xs={12} md={12} display="flex">
                <Grid2 xs={6} md={6} display="flex" justifyContent="left">
                  <Typography variant="body2">
                    {email}
                  </Typography>
                </Grid2>
                <Grid2 xs={6} md={6} display="flex" justifyContent="right">
                  <Typography variant="body2">
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => onDelete(id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Typography>
                </Grid2>
              </Grid2>
            </CardContent>
          </Grid2>
        </Grid2>
      </Card>
      <DialogBox
        open={confirm}
        handleClose={handleClose}
        onConfirm={() => handleDelete(id)}
      />
    </>
  );
}