import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCalendarios } from '../api/calendariosService';

function Calendarios() {
  const { data, isLoading, error } = useQuery(['calendarios'], getCalendarios);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los calendarios</p>;

  return (
    <ul>
      {data?.data.map((calendario) => (
        <li key={calendario.id}>{calendario.nombre}</li>
      ))}
    </ul>
  );
}

export default Calendarios;
