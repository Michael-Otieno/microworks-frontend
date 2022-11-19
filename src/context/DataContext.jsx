import { createContext } from "react";

import Axios from "axios";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

export default DataContext;

export const DataProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");


  const history = useNavigate();


  useEffect(() => {
    getList();
  }, []);

  const getList = async (query = "") => {
    let res = await Axios.get(
      `http://127.0.0.1:8000/attendance-list?query=${query}`
    );
    setList(res.data);
  
  };

  const searchByName = (e) => {
    e.preventDefault();
    let query = e.target.query.value;
    getList(query);
  };

  const updateDetails = async (id,updateDetails) => {
    // let res = await Axios.put(
    //   `http://127.0.0.1:8000/attendance-list/${id}`
    // );
    setList(list.map((peep) => peep.id === id ? updateDetails : peep))
    // setList(res.data.map((peep) => peep.id === id ? updateDetails : peep))

    // window.location.reload();

  }


  const deleteDetails = async (id) => {
    // const headers = {
    //   Authorization: `authTokens ${localStorage.getItem("authTokens")}`,
    // }
    await axios.delete(`http://127.0.0.1:8000/attendance-list/${id}`,{
      // headers:headers,
    })
      alert("Deleted successfully")
      getList()
    

    
  }

  let contextData = {
    list: list,
    error: error,
    searchByName: searchByName,
    deleteDetails: deleteDetails,
    updateDetails:updateDetails,
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};
