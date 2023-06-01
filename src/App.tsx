import React from 'react';
import "./assets/scss/style.scss"
import "leaflet/dist/leaflet.css"
import AppLayout from './components/layout/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <AppLayout />
    </QueryClientProvider>
  );
}

export default App;
