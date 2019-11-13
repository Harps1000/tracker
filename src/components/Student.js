import React from "react";

const Student = ({_id, name, startingCohort, currentBlock}) =>{
    return(
        <ul>
            <li>ID: {_id}</li>
            <li>Name: {name}</li>
            <li>Starting Cohort{startingCohort}</li>
            <li>Current Block {currentBlock}</li>
        </ul>
    )
}

export default Student;