import React from 'react'
import { useState , useEffect } from 'react'
import axios from "axios";

const Home = () => {

    let  [data,setdata] = useState([]);

    let GetData = async () => {
        let res = await axios.get("http://localhost:3001/user/getCourse");
        // console.log(res.data);
        setdata(res.data)
    }

    useEffect(() => {
        GetData();
    },[]);
  return (
    <div className="home">

    </div>
  )
}

export default Home;