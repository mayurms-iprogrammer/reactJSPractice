import React, { useState } from "react";
import './Dashboard.css'

const Dashboard = (props) => {
    const [name, setName] = useState("")
    return (
        <div className="conatiner">
            <h1
                // onClick={() => { props.click() }}
            >hi,{props.name} you are {props.age} years old
                </h1>
            <input
                value={props.name}
                type="text"
                onChange={(event) => {

                    props.changedHandler(event.target.value);
                    // console.log("here im her texting", event.target.value);
                }} />

            <p>{props.children}</p>


        </div>
    )
}

export default Dashboard;