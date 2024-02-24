import { useAppContext } from "../store/AppContext";

const ItemCard = (props) => {
  const { state, dispatch } = useAppContext();

  const handleClick = () => {
    dispatch({
      type: "SELECT_ITEM",
      payload: props,
    });
  };
  return (
    <div
      className="item_card"
      onClick={handleClick}
      style={
        state?.selectedItem._id === props._id
          ? { boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)" }
          : { boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)" }
      }>
      <h3>{props.item_name}</h3>
      <p>Price: {props.unit_price} $</p>
      <p>Quantily: {props.quantity}</p>
    </div>
  );
};
export default ItemCard;
