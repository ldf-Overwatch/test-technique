import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';

export default function DrawerBase() {
  const navData = [
    {name: 'Accueil', link: "/", icon: <InboxIcon />},
    {name: 'Liste des employés', link: "/list-employees", icon: <InboxIcon />},
    {name: 'Ajouter un employé', link: '/add-employee', icon: <InboxIcon />},
    {name: 'Contact', link: '/contact', icon: <MailIcon />}
  ]

  return (
    <>
      <List>
        {navData.map((data, index) => (
          <Link key={data.name} to={data.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {data.icon}
                </ListItemIcon>
                <ListItemText primary={data.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </>
  )
}
