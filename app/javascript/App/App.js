import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Typography, Paper, ImageList, ImageListItem, Box } from '@mui/material';
import HomePage from './Pages/Home/HomePage';
import MemoriesPage from './Pages/Memories/MemoriesPage';
import ContactPage from "./Pages/ContactMe/ContactPage";


class App extends Component {
  render() {

    return (
      <div>
        <Typography variant="h3">
          {`Holi Bubu! <3`}
        </Typography>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/send-your-love" element={<ContactPage />}/>
        </Routes>
      </div>
    );
  }
}

export default App;