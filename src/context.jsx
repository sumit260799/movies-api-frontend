import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
const API_ENDPOINT = "https://movies-api-sumit.cyclic.app/?";
const AppContext = createContext();
import {
  SET_LOADING,
  SET_MOVIES,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  HANDLE_GENRE,
  HANDLE_YEAR,
} from "./action";
import reducer from "./reducer";
const initialState = {
  isLoading: true,
  movies: [],
  search: "",
  page: 1,
  year: "",
  totalPages: 0,
};
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };
  const handleYear = (query) => {
    dispatch({ type: HANDLE_YEAR, payload: query });
  };
  const handleGenre = (genre) => {
    dispatch({ type: HANDLE_GENRE, payload: genre });
  };
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };
  useEffect(() => {
    fetchData(
      `${API_ENDPOINT}&search=${state.search}&page=${state.page}&year=${state.year}`
    );
  }, [state.page, state.search, state.year]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        handlePage,
        handleSearch,
        handleYear,
        handleGenre,
        API_ENDPOINT,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
