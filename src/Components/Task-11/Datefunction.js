import React,{useState} from "react";

export function Datefunction(){
    const[show,setShow]=useState("")
    function datecal(){
        var date1 = document.getElementById("cdate").value
        alert(date1)
        var date2 = new Date(date1)
        date2.setDate(date2.getDate()+90)
        var currentd = date2.getDate()+ "/" + (date2.getMonth()+1) + "/" + date2.getFullYear()
        setShow(currentd)
    }
    return(
        <>
        <lable>Course Startby Date:</lable> <input type="date" id = "cdate" /><br/>
        <input  type="button" className="" onClick={datecal}value ="submit"/><br/>
        <lable>Course Endby Date:</lable> <h2>{show}</h2>

        </>
    );
}