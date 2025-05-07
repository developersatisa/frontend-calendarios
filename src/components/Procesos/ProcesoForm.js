import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createProceso, getProceso, updateProceso } from '../../api/procesosService';

function ProcesoForm() {
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const editMode = Boolean(id);

  useEffect(() => {
    if (editMode) {
      getProceso(id).then((response) => {
        setNombre(response.data.nombre);
      });
    }
  }, [id, editMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { nombre };
    try {
      if (editMode) {
        await updateProceso(id, data);
      } else {
        await createProceso(data);
      }
      navigate('/procesos');
    } catch (error) {
      console.error('Error al guardar el proceso:', error);
    }
  };

  return (
    <div>
      <h2>{editMode ? 'Editar Proceso' : 'Crear Proceso'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">{editMode ? 'Actualizar' : 'Crear'}</button>
      </form>
    </div>
  );
}

export default ProcesoForm;
