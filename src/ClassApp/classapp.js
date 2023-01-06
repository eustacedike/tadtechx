import React from "react";
import { useState, useEffect, useRef } from "react";

import style from "./classapp.css"


import ClassMembers from "./classmembers";
import ClassQuestions from "./classquestions";




function ClassApp(props) {

    const [members, setMembers] = useState(false);
    const [questions, setQuestions] = useState(false);
    const thisIframe = useRef();


    // useEffect(() => {
    //     setInterval(function() {
    //     reloadIFrame()
    // }, 2000);

    // function reloadIFrame() {
    //     console.log('reloading..');
    //     thisIframe.current.src = "https://codepen.io/eustace_dike/embed/ZEROdmq";
    // }
    // }, []);
    
    const reloadIFrame = () => {
            console.log('reloading..');
            thisIframe.current.src = thisIframe.current.src;
        }



    const openMembers = () => {
        setMembers(value => !value);
    }
    const openQuestions = () => {
        setQuestions(value => !value);
    }

    // console.log(props.thisClass)


    return (
        <div className="ClassApp">

            <nav className="classapp-nav">
                <button>Me</button>
                <h3>{props.thisClass.name}</h3>
                <div>
                    <button onClick={openMembers}>Members</button>
                    <button onClick={openQuestions}>Questions</button>
                </div>
            </nav>
            <div className="classapp-body">
                <div className="class-members"
                    style={{ transform: members ? 'translateX(0%)' : null }}
                >
                    <ClassMembers />
                </div>
                <div className="main-classbox">
                    <iframe className="code-edit"
                    // style={{display: props.codePen}}
                    //  src="https://codepen.io/eustace_dike/embed/ZEROdmq"
                    //  src="https://codepen.io/harunpehlivan/full/qBNpGKr"
                    // src="https://replit.com/team/team-tadpython/TadTech"
                    src={props.pLanguage}
                    ref={thisIframe}
                     >
                        
                    </iframe>
                    <button onClick={reloadIFrame}>reload</button>

                    <br />
                    

                    <div className="class-messages">
                        <div className="class-comment">
                            <h4>Dean Mark (Instructor)</h4> <br />
                            <p>HTML is a markup language used to structure a webpage/site</p>
                        </div>
                        <div className="class-comment">
                            <h4>Dean Mark (Instructor)</h4> <br />
                            <p>HTML is a markup language used to structure a webpage/site</p>
                        </div>
                        <div className="class-comment">
                            <h4>Instructor</h4> <br />
                            <p>HTML is a markup language used to structure a webpage/site</p>
                        </div>
                        <div className="class-comment">
                            <h4>Instructor</h4> <br />
                            <p>HTML is a markup language used to structure a webpage/site</p>
                        </div>
                        <div className="class-comment">
                            <h4>Instructor</h4> <br />
                            <p>HTML is a markup language used to structure a webpage/site</p>
                        </div>
                        <div className="class-comment">
                            <h4>Instructor</h4> <br />
                            <p>HTML is a markup language used to structure a webpage/site</p>
                        </div>
                        <div className="class-comment">
                            <h4>Instructor</h4> <br />
                            <p>HTML is a markup language used to structure a webpage/site</p>
                        </div>
                        <div className="class-comment">
                            <h4>Instructor</h4> <br />
                            <p>HTML is a markup language used to structure a webpage/site</p>
                        </div>
                    </div>

                </div>
                <div className="class-questions"
                    style={{ transform: questions ? 'translateX(0%)' : null }}

                >
                    <ClassQuestions />
                </div>


            </div>
        </div>
    )
}


export default ClassApp;