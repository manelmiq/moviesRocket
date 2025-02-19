import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import {Routes} from './routes/index.jsx';
import {AuthProvider} from './hooks/auth';
import {DataProvider} from "./context/DataContex.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <DataProvider>
          <Routes/>
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
