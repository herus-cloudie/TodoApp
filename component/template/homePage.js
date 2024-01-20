import { useEffect, useState } from "react";

export default function HomePage(){
    let [todos , setTodos] = useState([])
    useEffect(() => {
        getData()
      } , [])

    async function getData(){
        let process = await fetch('/api/todoApi')
        let Data = await process.json();
        if (Data.status == 'success') setTodos(Data.data)
      }
    return(
        <div className="home-page">
            <div className="home-page--todo">
                <p>Todo</p>
            </div>
            <div className="home-page--inProgress">
                <p>In Progress</p>
            </div>
            <div className="home-page--review">
                <p>Review</p>
            </div>
            <div className="home-page--done">
                <p>Done</p>
            </div>
        </div>
    )
}