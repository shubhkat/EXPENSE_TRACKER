import React from 'react';
import { SnackbarProvider } from "notistack";
import Home from "./pages/Home"

const App = () => {
  return (
    <SnackbarProvider>
      <Home />
    </SnackbarProvider>
  )
}

export default App
