import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const API_ENDPOINT = "http://localhost:3000/?";
const AppContext = createContext();

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  console.log(typeof movies);

  const [query, setQuery] = useState("");
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      await axios.get(url).then((res) => setMovies(res.data.movies));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(`${API_ENDPOINT}&search=${query}`);
  }, []);
  return (
    <AppContext.Provider value={{ isLoading, movies, query }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
