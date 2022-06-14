import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./Course.css"

export const Course=()=>{
 const [course,setcourse]=useState([])
 const navigate=useNavigate()
const location=useLocation()

useEffect(()=>{
    setcourse([location.state])
},[])

    const handleback=()=>{
        navigate(`/`)
    }

    return(
        <div>

            {course.map((item)=>{
                return(
                    <div className="coursediv">
                        <div className="coursedetailsdiv1">
                        <h1>{item.item.name}</h1>
                        <img src={item.item.imageUrl} alt="" height={"200px"}  width={"200px"} className="image"/>
                        </div>
                    <div className="coursedetailsdiv2">
                        <h4>Subject Name:- {item.item.subjectName}</h4>
                        <p>Description:- {item.item.info}</p>
                        <p>Course ID:- {item.item.idCourse}</p>
                        <p>Course Duration:- {item.item.duration}</p>
                    </div>
                    </div>
                )
            })}
            <button onClick={handleback} className="backbtn">Home</button>
            
        </div>
    )
}