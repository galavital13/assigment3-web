import { useEffect, useState } from "react";
import { useAppContext } from "../store/AppContext";

const Modal = () => {
  const { state, createItemAction, updateItemAction, dispatch } =
    useAppContext();
  const [newItem, setNewItem] = useState({
    item_name: "",
    unit_price: 0,
    quantity: 0,
  });

  const selectedId = state?.selectedItem?._id ? true : false; //with this flasg we can check if we are updating or creating a new item

  useEffect(() => {
    if (selectedId) {
      setNewItem({
        item_name: state.selectedItem.item_name,
        unit_price: state.selectedItem.unit_price,
        quantity: state.selectedItem.quantity,
      });
    } else {
      setNewItem({
        item_name: "",
        unit_price: 0,
        quantity: 0,
      });
    }
  }, [state.selectedItem._id]);

  const handleSave = () => {
    if (selectedId) {
      updateItemAction(state.selectedItem, {
        item_name: newItem.item_name,
        unit_price: newItem.unit_price,
        quantity: newItem.quantity,
      });
    } else {
      createItemAction({
        item_name: newItem.item_name,
        unit_price: newItem.unit_price,
        quantity: newItem.quantity,
      });
    }
    resetNewItem();
    dispatch({ type: "SELECT_ITEM", payload: {} });
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleCancel = () => {
    resetNewItem();
    dispatch({ type: "CLOSE_MODAL" });
  };

  const resetNewItem = () => {
    setNewItem({
      item_name: "",
      unit_price: 0,
      quantity: 0,
    });
  };

  return (
    <div
      className="modal_container"
      style={{ display: state.modalOpen ? "block" : "none" }}>
      <div className="modal_content">
        {state.selectedItem._id ? (
          <h3>Update Selected Item</h3>
        ) : (
          <h3>Add New Item</h3>
        )}
        <input
          type="text"
          required
          placeholder="item name"
          value={newItem.item_name}
          onChange={(e) =>
            setNewItem({ ...newItem, item_name: e.target.value })
          }
        />
        <div className="input_container">
          <span>Unit price:</span>
          <input
            type="number"
            required
            placeholder="unit price"
            value={newItem.unit_price}
            onChange={(e) =>
              setNewItem({ ...newItem, unit_price: e.target.value })
            }
            style={{ width: "100px" }}
          />
        </div>
        <div className="input_container">
          <span>Quantity:</span>
          <input
            type="number"
            required
            placeholder="quantity"
            value={newItem.quantity}
            onChange={(e) =>
              setNewItem({ ...newItem, quantity: e.target.value })
            }
            style={{ width: "100px" }}
          />
        </div>
        <div>
          <button className="modal_button" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="modal_button"
            disabled={
              !newItem.item_name || !newItem.unit_price || !newItem.quantity || newItem.unit_price < 0 || newItem.quantity < 0
            }
            onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
