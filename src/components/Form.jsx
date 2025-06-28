import React, { useState, useEffect, useRef } from 'react';
function Form({ addOrUpdateItem, itemToEdit }) {
const [nombre, setNombre] = useState('');
const [asignatura, setAsignatura] = useState('');
const [promedio, setPromedio] = useState('');
const nombreRef = useRef(null);

useEffect(() => {
    if (itemToEdit) {
      setNombre(itemToEdit.value?.nombre || '');
      setAsignatura(itemToEdit.value?.asignatura || '');
      setPromedio(itemToEdit.value?.promedio || '');
    } else {
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
    nombreRef.current && nombreRef.current.focus();
}, [itemToEdit]);

const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() && asignatura.trim() && promedio.trim()) { 
      addOrUpdateItem({ nombre, asignatura, promedio });
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
};

return (
    <form className="form-eval" onSubmit={handleSubmit}>
      <input
        ref={nombreRef}
        type="text"
        placeholder="Ej: Andres Navarro"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ej: Bases de datos"
        value={asignatura}
        onChange={e => setAsignatura(e.target.value)}
      />
      <input
        type="number"
        step="0.1"
        min="0"
        max="7"
        placeholder="Ej: 5.0"
        value={promedio}
        onChange={e => setPromedio(e.target.value)}
      />
      <button type="submit">
        {itemToEdit ? 'Actualizar Evaluación' : 'Agregar Evaluación'}
      </button>
    </form>
);
}

export default Form;
