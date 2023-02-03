import './App.css';
import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Home from './components/Home/Home';
import ListEmployee from './components/ListEmployee/ListEmployee';
import CardEmployee from './components/CardEmployee/CardEmployee';
import AddEmployee from './components/AddEmployee/AddEmployee'
import Contact from './components/Contact/Contact'

function App() {

  const drawerWidth = 240;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Layout drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-employees" element={<ListEmployee />} />
            <Route path="/employee/:id" element={<CardEmployee />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
