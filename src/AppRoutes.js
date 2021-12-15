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

function AppRoutes() {

  const theme= createTheme ({
    palette: {
      primary: {main: '#091714'},
      secondary: {main:'#f76916'},
    },
  })

  return (
    <ThemeProvider theme={theme}>

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
    </ThemeProvider>
    // <div className="App">
    //   WEATHER APP
    // </div>
  );
}

export default AppRoutes;
