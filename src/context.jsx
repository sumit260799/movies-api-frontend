import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
const API_ENDPOINT = "http://localhost:3000/?";
const AppContext = createContext();
import { SET_LOADING, SET_MOVIES, HANDLE_PAGE } from "./action";
import reducer from "./reducer";
const initialState = {
  isLoading: true,
  movies: [],
  search: "",
  page: 1,
  totalPages: 0,
};
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };
  const fetchData = async (url) => {
    dispatch({ type: SET_LOADING });

    try {
      const response = await axios.get(url);
      const { movies, totalPages } = response.data;
      dispatch({
        type: SET_MOVIES,
        payload: { movies, totalPages },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(`${API_ENDPOINT}&search=${state.search}&page=${state.page}`);
  }, [state.page]);
  return (
    <AppContext.Provider value={{ ...state, handlePage }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
