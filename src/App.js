import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>  
        <Route path="/" element={<ShowList />} />
        <Route path="/show/:id" element={<ShowDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
