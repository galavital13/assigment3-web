import React, { useEffect } from "react";
import { useAppContext } from "../store/AppContext";
import ItemCard from "./ItemCard";
import { AddItemCard } from "./AddItemCard";


const ItemsList = () => {
  const { state, getItemsAction } = useAppContext();

  useEffect(() => {
    getItemsAction();
  }, []);

  if (state?.error) {
    return <p>Error: {state.error.message}</p>;
  }

  if (!state?.loading) {
    return (
      <div>
        {state.items.length > 0 ? (
          <div className="items_container">
            {state.items.map((item) => (
              <ItemCard key={item._id} {...item} />
            ))}
            <AddItemCard />

          </div>
        ) : (
          <p>No items found</p>
        )}
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default ItemsList;
