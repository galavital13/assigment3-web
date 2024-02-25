import { useEffect, useState } from "react";
import { useAppContext } from "../store/AppContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import Typography from "@mui/material/Typography";

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
        <Typography variant="h6">
          {selectedId ? "Update Selected Item" : "Add New Item"}
        </Typography>

        <TextField
          label="Item Name"
          type="text"
          required
          placeholder="item name"
          value={newItem.item_name}
          size="small"
          onChange={(e) =>
            setNewItem({ ...newItem, item_name: e.target.value })
          }
        />
        <div className="input_container">
          <span>Unit price:</span>
          <TextField
            type="number"
            required
            placeholder="unit price"
            value={newItem.unit_price}
            onChange={(e) =>
              setNewItem({ ...newItem, unit_price: e.target.value })
            }
            style={{ width: "100px" }}
            size="small"
          />
        </div>
        <div className="input_container">
          <span>Quantity:</span>
          <TextField
            type="number"
            required
            placeholder="quantity"
            value={newItem.quantity}
            onChange={(e) =>
              setNewItem({ ...newItem, quantity: e.target.value })
            }
            style={{ width: "100px" }}
            size="small"
          />
        </div>
        <div className="modal_buttons">
          <Button
            className="modal_button"
            onClick={handleCancel}
            variant="outlined"
            sx={{ textTransform: "none" }}
            startIcon={<CloseIcon />}
            size="small">
            Cancel
          </Button>
          <Button
            className="modal_button"
            disabled={
              !newItem.item_name ||
              !newItem.unit_price ||
              !newItem.quantity ||
              newItem.quantity < 0 ||
              newItem.unit_price < 0
            }
            onClick={handleSave}
            sx={{ textTransform: "none" }}
            startIcon={<CheckIcon />}
            size="small"
            variant="contained">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
