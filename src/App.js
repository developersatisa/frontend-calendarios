import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProcesosList from './components/Procesos/ProcesosList';
import ProcesoForm from './components/Procesos/ProcesoForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="container mt-4">
          <h1>Gestión de Procesos</h1>
          <Routes>
            <Route path="/procesos" element={<ProcesosList />} />
            <Route path="/procesos/crear" element={<ProcesoForm />} />
            <Route path="/procesos/editar/:id" element={<ProcesoForm />} />
            <Route path="*" element={<ProcesosList />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
