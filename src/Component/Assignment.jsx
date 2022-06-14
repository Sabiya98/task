import React,{useState,useEffect} from "react";
import  axios from "axios"
import {  useNavigate } from "react-router-dom";
import "./Course.css"

export const Assignment=()=>{
    const navigate=useNavigate()
    const [apidata,setapidata]= useState([])
    const getdata=async()=>{
        const result=await axios.get("https://api.bricketc.com/bricketc-backend-php/get_all_courses.php")
        console.log("---",result.data.bady)
        setapidata(result.data.body)
    }

const handleshow=(item)=>{
 navigate('/course',{
    state:{
        item
    }
 })
}
    useEffect(()=>{
        getdata()
    },[])
    return(
        <React.Fragment>
            {apidata.map((item,ind)=>{
                return(
                    <div  onClick={()=>handleshow(item)} className="maindiv">
                    <h3>{item.name.substr(0,20)}</h3>
                    <img src={item.imageUrl} alt="" height={"200px"} width={"200px"} />
                    <p>{item.subjectName}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )
}