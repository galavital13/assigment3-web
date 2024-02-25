import { useAppContext } from "../store/AppContext";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ButtonsStack = () => {
  const { state, deleteItemAction, dispatch } = useAppContext();
  return (
    <div className="buttons_stack">
      <Button
        disabled={!state?.selectedItem._id}
        onClick={() => {
          dispatch({ type: "OPEN_MODAL" });
        }}
        variant="outlined"
        sx={{ textTransform: "none" }}
        startIcon={<EditIcon />}
        >
        Update
      </Button>
      <Button
        disabled={!state?.selectedItem._id}
        onClick={() => deleteItemAction(state.selectedItem)}
        variant="outlined"
        sx={{ textTransform: "none" }}
        startIcon={<DeleteIcon />}
        color="error"
        >
        Delete
      </Button>
    </div>
  );
};
export default ButtonsStack;
