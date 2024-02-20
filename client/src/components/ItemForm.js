import React, { useState } from 'react';
import { addItem } from '../api/itemsApi'; 

const ItemForm = ({ onItemSaved }) => {
  const [item, setItem] = useState({
    item_name: '',
    unit_price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addItem(item);
      onItemSaved();
    } catch (error) {
      console.error("Failed to save the item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Item Name:</label>
        <input
          type="text"
          name="item_name"
          value={item.item_name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Unit Price:</label>
        <input
          type="number"
          name="unit_price"
          value={item.unit_price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save Item</button>
    </form>
  );
};

export default ItemForm;
