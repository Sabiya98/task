import React from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import { Assignment } from "./Assignment"
import { Course } from "./Course"
import { NavCourse } from "./NavCourse"

export const Routingcopm=()=>{
    return(
        <div>
            <BrowserRouter>
            <NavCourse/>
            <Routes>
                <Route path="/" element={<Assignment/>}></Route>
                <Route path="/course" element={<Course/>}></Route>
                
            </Routes>
            </BrowserRouter>
        </div>
    )
}