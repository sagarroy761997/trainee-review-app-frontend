import React, { useContext, useEffect, useState } from "react";
import dataContext from "../../context/dataContext";
import appBar from '../appBar';
import axios from "axios";
import Tables from "../Tables";
import Report from "../Report";
const Landing = () => {
  const { apiData, setApiData } = useContext(dataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [managerData, setManagerData] = useState([]);
  const [trainerData, setTrainerData] = useState([]);
  const [traineeData, setTraineeData] = useState([]);

  // console.log(apiData);
  useEffect(() => {
    axios
      .post("http://localhost:4999/fetchUsers", apiData)
      .then((fetched) => {
        setManagerData(
          fetched.data.filter((element) => element.role === "manager")
        );
        setTrainerData(
          fetched.data.filter((element) => element.role === "trainer")
        );
        setTraineeData(
          fetched.data.filter((element) => element.role === "trainee")
        );
      })
      .catch((error) => {
        console.log(error.massage);
      });
  }, [apiData]);
  if (apiData.role === 'admin') {
    return (
      <div>
        <appBar data={apiData.role}/>
        <Tables data={{data:managerData, role:apiData.role}} />
        <Tables data={{data:trainerData, role:apiData.role}}/>
        <Tables data={{data:traineeData, role:apiData.role}} />
      </div>
    )
  }
  else if (apiData.role=== 'manager') {
    return (
      <div>
        <appBar data={apiData.role}/>
        <Tables data={{data:trainerData, role:apiData.role}}/>
        <Tables data={{data:traineeData, role:apiData.role}} />
      </div>
    )
  }
  else if (apiData.role=== 'trainer') {
    return (
      <div>
        <appBar data={apiData.role}/>
        <Tables data={{data:traineeData, role:apiData.role}} />
      </div>
    )
  }
  else{
    return(
      <Report />
    )
  }
};

export default Landing;
