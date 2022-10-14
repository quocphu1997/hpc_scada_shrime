import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useAsync = ({ dependancies = [], service, condition = true }) => {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (condition) {
      fetchData();
    }
  }, dependancies);
  const fetchData = async () => {
    // call api
    const results = await service();
    setState(results.data.result);
    
  };
  return {
    state,
  };
};
