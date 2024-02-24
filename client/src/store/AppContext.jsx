import { createContext, useContext, useReducer } from "react";

const URL = "https://emergency-supplies-management-system.onrender.com/items";
const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const getItemsAction = async (dispatch) => {
  try {
    const data = await fetch(URL);
    const items = await data.json();
    dispatch({ type: "GET_ITEMS_SUCCESS", payload: items });
  } catch (error) {
    dispatch({ type: "GET_ITEMS_FAILURE", payload: error.message });
  }
};

const deleteItemAction = async (dispatch, selectedItem) => {
  try {
    const res = await fetch(URL + `/${selectedItem.item_name}`, {
      method: "DELETE",
    });
    if (res.ok) {
      getItemsAction(dispatch);
      dispatch({ type: "SELECT_ITEM", payload: {} });
    }
  } catch (error) {
    console.log(error);
  }
};

const createItemAction = async (dispatch, item) => {
  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (res.ok) {
      getItemsAction(dispatch);
    }
    if(!res.ok) {
      const error = await res.json();
      throw new Error('Item name already exists');
    }
  } catch (error) {
    alert(error.message);
  }
};

const updateItemAction = async (dispatch, selectedItem, newItem) => {
  try {
    const res = await fetch(URL + `/${selectedItem.item_name}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    if (res.ok) {
      getItemsAction(dispatch);
    }
  } catch (error) {
    console.log(error);
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload,
      };
    case "GET_ITEMS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: [],
      };
    case "SELECT_ITEM":
      return {
        ...state,
        selectedItem: action.payload,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        modalOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const initialState = {
    loading: true,
    error: null,
    items: [],
    selectedItem: {},
    modalOpen: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
    getItemsAction: () => getItemsAction(dispatch),
    deleteItemAction: (selectedItem) =>
      deleteItemAction(dispatch, selectedItem),
    createItemAction: (item) => createItemAction(dispatch, item),
    updateItemAction: (selectedItem, newItem) =>
      updateItemAction(dispatch, selectedItem, newItem),
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
