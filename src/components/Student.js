import React, { Component } from "react";
import axios from "axios"
import {Link} from "@reach/router";

class Student extends Component{

    render(){
        
        return(
            
            <ul>
                <li>ID: {this.props._id}</li>
                <li>Name: {this.props.name}</li>
                <li>Starting Cohort{this.props.startingCohort}</li>
                <li>Current Block {this.props.currentBlock}</li>
                <Link to={`/students/${this.props._id}`}>
                <button>More</button>
                </Link>
            </ul>
        )
    }
    
}


export default Student;