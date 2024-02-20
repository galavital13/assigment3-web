import React, { useEffect, useState } from 'react';
import { getItems } from '../api/itemsApi';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getItems();
      setItems(fetchedItems);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.item_name} - Price: {item.unit_price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
