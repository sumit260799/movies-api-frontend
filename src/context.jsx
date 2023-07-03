import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";
const url = "http://localhost:3000/";
const AppContext = createContext();

function AppProvider({ children }) {
  const fetchData = () => {
    axios.get(url).then((res) => console.log(res.data.movies));
  };
  useEffect(() => {
    fetchData();
  });
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
