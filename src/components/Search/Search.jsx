import axios from "axios";
import React, { useState, useEffect } from "react";
import Output from "../Output/Output";
import styles from "./search.module.css";

const Search = () => {
  const [city, setCity] = useState("");
  const [temp,setTemp]=useState("");
  const [state,setState]=useState("");
  const [cityout,setCityout]=useState("");
   
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80d85439d598dc01108f0c3962322ba6&units=metric`;
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.get(URL);
      console.log(res);
      setTemp(res.data.main.feels_like);
      setState(res.data.weather[0].description)
      setCityout(city)
      

      
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className={styles.formContainerInput}
          type="text"
          placeholder="Enter location"
        />

      </form>
      <Output city={cityout} temp={temp} state={state}></Output>
    </div>
  );
};

export default Search;
