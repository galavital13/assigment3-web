import { useAppContext } from "../store/AppContext";

export const AddItemCard = () => {
  const { dispatch } = useAppContext();
  return (
    <div
      className="item_card add_item_card"
      onClick={() => {
        dispatch({ type: "SELECT_ITEM", payload: {} });        
        dispatch({ type: "OPEN_MODAL" });
      }}>
      <h3>Add new Item</h3>
    </div>
  );
};
