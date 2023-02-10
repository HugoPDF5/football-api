import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Brasileirao from './components/Brasileirao';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Brasileirao /> } />
          <Route path="/brasileirao" element={<Brasileirao /> } />
        </Routes>
      </BrowserRouter>
      
    </ChakraProvider>
  </React.StrictMode>,
)
