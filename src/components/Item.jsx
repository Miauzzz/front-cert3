import React from 'react';
function Item({ item, deleteItem, editItem }) {
const { nombre, asignatura, promedio } = item.value;
const numPromedio = Number(promedio);

let badge = null;
if (numPromedio >= 1 && numPromedio <= 3.9) {
    badge = <span className="badge badge-deficiente">Deficiente</span>;
} else if (numPromedio >= 4.0 && numPromedio <= 5.5) {
    badge = <span className="badge badge-mejora">Con mejora</span>;
} else if (numPromedio >= 5.6 && numPromedio <= 6.4) {
    badge = <span className="badge badge-bueno">Buen trabajo</span>;
} else if (numPromedio >= 6.5 && numPromedio <= 7.0) {
    badge = <span className="badge badge-destacado">Destacado</span>;
}

return (
    <li className="item-eval">
    <div>
        <strong>Alumno:</strong> {nombre}<br />
        <span><strong>Asignatura:</strong> {asignatura}</span><br />
        <span><strong>Nota:</strong> {promedio}</span>
        {badge}
    </div>
    <div>
        <button className="btn-edit" onClick={() => editItem(item)}>Editar</button>
        <button className="btn-delete" onClick={() => deleteItem(item.id)}>Eliminar</button>
    </div>
    </li>
);
}

export default Item;
