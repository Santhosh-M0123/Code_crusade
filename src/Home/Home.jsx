import React from "react";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import axios from "axios";
import Nav from "./Nav";
const Home = () => {
    let [data, setdata] = useState([
        {
            CourseName: "Computer Science",
            CourseDesc: "Alli data from the Computer",
            BannerImg: "../src/images/loginbg.png",
            Date: "09/03/2023",
            Link: "https://cssgenerator.org/box-shadow-css-generator.html",
        },
        {
            CourseName: "Computer Science",
            CourseDesc: "Alli data from the Computer",
            BannerImg: "../src/images/loginbg.png",
            Date: "09/03/2023",
            Link: "https://cssgenerator.org/box-shadow-css-generator.html",
        },
        {
            CourseName: "Computer Science",
            CourseDesc: "Alli data from the Computer",
            BannerImg: "../src/images/loginbg.png",
            Date: "09/03/2023",
            Link: "https://cssgenerator.org/box-shadow-css-generator.html",
        },
        {
            CourseName: "Computer Science",
            CourseDesc: "Alli data from the Computer",
            BannerImg: "../src/images/loginbg.png",
            Date: "09/03/2023",
            Link: "https://cssgenerator.org/box-shadow-css-generator.html",
        },
    ]);

    let [Datas,setdatas] = useState([]);

    let GetData = async () => {
        let res = await axios.get("http://localhost:3001/user/getCourse");
        console.log(res.data);
        setdatas(res.data);

    };

    useEffect(() => {
        GetData();
        // console.log();
    }, []);

    return (
        <>
        <Nav />
        <div className="home">
            
            {Datas.map((item, index) => {
                return (
                    <>
                        <div
                            className="course"
                            key={index}>
                            <div className="img"></div>
                            <div className="desc">
                                <div className="CourseName">
                                    {item.courseName}
                                </div>
                                <div className="CourseDesc">
                                    {item.courseDes}
                                </div>
                                <div className="date">{item.dateAndTime}</div>
                                <div className="link">
                                    <a href={item.link}>{item.link}</a>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
        </>
    );
};

export default Home;
