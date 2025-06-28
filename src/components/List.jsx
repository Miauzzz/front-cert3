import React from 'react';
import Item from './Item';

function List({ items, deleteItem, editItem }) {
  return (
    <ul>
      {items.length === 0 ? (
        <li style={{
          background: 'none',
          boxShadow: 'none',
          border: 'none',
          color: '#888',
          textAlign: 'center'
        }}>
          No hay evaluaciones guardadas.
        </li>
      ) : (
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))
      )}
    </ul>
  );
}

export default List;
