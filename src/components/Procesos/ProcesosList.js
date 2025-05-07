import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProcesos, deleteProceso } from '../../api/procesosService';
import { Link } from 'react-router-dom';

function ProcesosList() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ['procesos'],
    queryFn: getProcesos,
  });
  const deleteMutation = useMutation({
    mutationFn: deleteProceso,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['procesos'] }),
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los procesos</p>;

  return (
    <div>
      <h2>Lista de Procesos</h2>
      <Link to="/procesos/crear" className="btn btn-primary mb-2">Agregar Proceso</Link>
  
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error al cargar los procesos</p>
      ) : Array.isArray(data) && data.length ? (
        <ul className="list-group">
          {data.map((proceso) => (
            <li key={proceso.id} className="list-group-item d-flex justify-content-between align-items-center">
              {proceso.nombre}
              <div>
                <Link to={`/procesos/editar/${proceso.id}`} className="btn btn-sm btn-warning me-2">Editar</Link>
                <button onClick={() => deleteMutation.mutate(proceso.id)} className="btn btn-sm btn-danger">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay procesos disponibles</p>
      )}
    </div>
  );
  
}

export default ProcesosList;
