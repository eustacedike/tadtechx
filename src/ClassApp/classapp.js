import React from "react";

import style from "./classapp.css"


import ClassMembers from "./classmembers";
import ClassQuestions from "./classquestions";




function ClassApp () {




    return (
        <div className="ClassApp">
            
            <div className="class-members">
                <ClassMembers/>
            </div>
            <div className="main-classbox">
                <div className="code-edit">
                    <code>Code Here</code>
                </div>

            </div>
            <div className="class-questions">
                <ClassQuestions/>
            </div>



        </div>
    )
}


export default ClassApp;