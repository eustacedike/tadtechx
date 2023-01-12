import React from "react";

import style from "./classapp.css"

function ClassQuestions () {




    return (
        <div className="classdiv">
            
            <form>
                <textarea rows="10" placeholder="Enter your question here">
                </textarea> <br/>
                <button>Send</button>
            </form>

            <br/> <br/>

            <div className="class-comment">
                <h4>Matt Damon</h4> <br/>
                <p><b>Q: </b>What is the name of the IDE used for this project?</p>
                <br/>
                <h4>Instructor</h4> <br/>
                <p><b>A: </b>VS Code</p>
            </div>
            <div className="class-comment">
                <h4>Matt Damon</h4> <br/>
                <p><b>Q: </b>What is the name of the IDE used for this project?</p>
                <br/>
                <h4>Instructor</h4> <br/>
                <p><b>A: </b>VS Code</p>
            </div>
            

        </div>
    )
}


export default ClassQuestions;