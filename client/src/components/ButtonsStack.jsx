import { useAppContext } from "../store/AppContext";

const ButtonsStack = () => {
  const { state, deleteItemAction, dispatch } = useAppContext();
  return (
    <div className="buttons_stack">
      <div>
        <button
          disabled={!state?.selectedItem._id}
          onClick={() => {
            // dispatch({ type: "OPEN_EDIT_MODAL" });
            dispatch({ type: "OPEN_MODAL" });
          }}>
          Update
        </button>
        <button
          disabled={!state?.selectedItem._id}
          onClick={() => deleteItemAction(state.selectedItem)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default ButtonsStack;
