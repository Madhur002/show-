import React from "react";
import { CssBaseline } from "@mui/material";
import {BrowserRouter, Routes, Route } from "react-router-dom";

import { Actors, MovieInformation, Movies, NavBar, Profile} from './'
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
      <div className={classes.toolbar}/>
      <BrowserRouter>
        <Routes>
          <Route path="/movies/:id" element={<MovieInformation/>}/>
          <Route path="/actors/:id" element={<Actors/>}/>
          <Route path="/" element={<Movies/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      </main>
    </div>
  );
} 

export default App;
