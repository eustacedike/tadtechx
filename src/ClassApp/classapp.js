import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import style from "./classapp.css";

import { FaUser, FaUsers, FaComment, FaTrash } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";


import ClassMembers from "./classmembers";
import ClassQuestions from "./classquestions";

import { useCookies } from 'react-cookie';

function ClassApp(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);


    const [members, setMembers] = useState(false);
    const [questions, setQuestions] = useState(false);
    const thisIframe = useRef();



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


    const [iMessages, setIMessages] = useState("");
    const theMsg = {
        Msg: iMessages,
        Dept: props.thisClass.name
    }
    const sendMessage = (e) => {

        e.preventDefault();


        axios
            .post("/api/messages/mainmessage", theMsg)
            .then(res => {
                // console.log(res);
                instructorMessages.push(res.data.message);
                // console.log(instructorMessages);
            })
            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

        document.getElementById("msg-box").value = "";
    };

    const onChange = (a) => {
        setIMessages(value => a);

    }


    const [instructorMessages, setInstructorMessages] = useState(["great"]);

    const getMessages = () => {
        axios.get("api/messages/fetchmessages")
            .then((response) => {
                // console.log(response.data.filter(forThisClass=>{return forThisClass._id === "63c0209a2ffd9164036e5bb7"}));
                setInstructorMessages(response.data.filter(forThisClass => { return forThisClass.class === props.thisClass.name }).reverse());
            });

    };

    // useEffect(() => {
    //     getMessages();
    //   });
    useEffect(() => {
        getMessages();
   }, [instructorMessages]);
    // getMessages();

    const deleteMessage = (a) => {


        console.log(instructorMessages[a]._id);
        axios
            .post("/api/messages/deletemessage", { id: instructorMessages[a]._id })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

    }

    return (
        <div className="ClassApp">
            {/* <button onClick={deleteMessage}>get</button> */}

            <nav className="classapp-nav">
                {/* <Link to="/dashboard"><button><FaUser /></button></Link> */}
                <h3>{props.thisClass.name}</h3>
                <div>
                    <button onClick={openMembers}><FaUsers /></button>
                    <button onClick={openQuestions}><FaComment /></button>
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
                    <button className="refresh" onClick={reloadIFrame}><BiRefresh /></button>

                    <br />


                    <div className="class-messages">
                        
                            {
                                instructorMessages.map(imessage => {
                                    return (<div className="class-comment">
                            {/* <h4>Dean Mark (Instructor)</h4> <br /> */}

                                        <>
                                        <h2 style={{color: "blue"}}>Topic</h2> <br/>
                                            <p key={instructorMessages.indexOf(imessage)}>{imessage.message}
                                                <span className="delete-msg"
                                                    onClick={() => { deleteMessage(instructorMessages.indexOf(imessage)) }}
                                                    style={{ display: cookies.Role === "instructor" ? "" : "none" }}
                                                ><FaTrash /></span>
                                            </p> <br />
                                            {/* <p>{instructorMessages.indexOf(imessage)}</p> */}
                                        </></div>
                                    )
                                })
                            }

                        




                        <br />
                        <form
                            style={{ display: cookies.Role === "instructor" ? "" : "none" }}
                            onSubmit={sendMessage} noValidate
                        >
                            <input type='text'
                                id="msg-box"
                                onChange={(e) => { onChange(e.target.value) }}
                            />
                            <button>send</button>
                        </form>
                    </div>

                </div>
                <div className="class-questions"
                    style={{ transform: questions ? 'translateX(0%)' : null }}

                >
                    <ClassQuestions Dept={props.thisClass.name}/>
                </div>


            </div>
        </div>
    )
}


export default ClassApp;