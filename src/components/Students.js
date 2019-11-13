import React, { Component } from "react";
import axios from "axios";
import Student from "./Student"


class Students extends Component {
    state = {
        data: null
    }
    render(){
        const {data} = this.state;
        return(
            data && (
                <section>
                    {data.map(student => {
                        const {_id, name, startingCohort, currentBlock} = student
                        return <Student _id={_id} name={name} startingCohort={startingCohort} currentBlock={currentBlock}/>
                    })}
                </section>
            )
        )
    }



componentDidMount(){
    axios.get("https://nc-student-tracker.herokuapp.com/api/students")
    .then((info)=>{
        console.log(info.data.students)
        const data = info.data.students
        this.setState({data})
    })
}
}

export default Students