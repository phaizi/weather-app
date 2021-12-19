import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Main from "./Routes/Main";
import Home from "./Routes/Home";
import City from "./Routes/City";
import Today from "./Routes/Today";
import Hourly from "./Routes/Hourly";
import Daily from "./Routes/Daily";
import NotFound from "./Routes/NotFound";
import { SelectedContext } from "./Services/contexts";

function AppRoutes() {
  const theme = createTheme({
    palette: {
      primary: { main: "#091714" },
      secondary: { main: "#f76916" },
    },
  });

  const [selected, setSelected] = useState({ country: "", city: "" });

  return (
    <ThemeProvider theme={theme}>
      <SelectedContext.Provider value={[selected, setSelected]}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="cities/:city" element={<City />}>
              <Route index element={<Today />} />
              <Route path="hourly" element={<Hourly />} />
              <Route path="daily" element={<Daily />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SelectedContext.Provider>
    </ThemeProvider>
  );
}

export default AppRoutes;
