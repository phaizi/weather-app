import {useState} from 'react';
import {
  Routes,
  Route
} from "react-router-dom";import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Main from './Routes/Main';
import Home from './Routes/Home';
import City from './Routes/City';
import Today from "./Routes/Today";
import Hourly from './Routes/Hourly';
import Daily from './Routes/Daily';
import NotFound from "./Routes/NotFound";
import {SelectedContext} from './Services/contexts';
// import {SearchedContext} from './Services/contexts';

function AppRoutes() {

  const theme= createTheme ({
    palette: {
      primary: {main: '#091714'},
      secondary: {main:'#f76916'},
    },
  })

  // const [selectedCity, setSelecltedCity] = useState('');
  // const [selectedCountry,setSelectedCountry] = useState('');
  // const [searchedCountry,setSearchCountry] = useState('');
  // const [searchedCity,setSearchCity] = useState('');
  const [selected,setSelected] = useState({country:'',city:''});
  // const [searched,setSearched] = useState({country:'',city:''});


  return (
    <ThemeProvider theme={theme}>
 <SelectedContext.Provider value={[selected, setSelected]}>
 {/* <SearchedContext.Provider value={[searched, setSearched]}> */}

    <Routes>
    <Route path="/" element={<Main />}>
      <Route index element={<Home />} />
      <Route path=":city" element={<City />}>
        <Route index element={<Today />} />
        <Route path="hourly" element={<Hourly />} />
        <Route path="daily" element={<Daily />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>

 {/* </SearchedContext.Provider> */}
 </SelectedContext.Provider>
    </ThemeProvider>
    // <div className="App">
    //   WEATHER APP
    // </div>
  );
}

export default AppRoutes;
