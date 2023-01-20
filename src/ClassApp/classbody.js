import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import ImageUpload from "./uploadimage";

import style from "./classapp.css";

import { FaUser, FaUsers, FaComment, FaTrash, FaCommentAlt } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";



import { useCookies } from 'react-cookie';

function ClassBody(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [msgModal, setMsgModal] = useState(false);

    const thisIframe = useRef();



    const reloadIFrame = () => {
        console.log('reloading..');
        thisIframe.current.src = thisIframe.current.src;
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
                instructorMessages.push(res.data.message);
            })
            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

        document.getElementById("msg-box").value = "";
        setMsgModal(false);
    };


    const [subMessage, setSubMessage] = useState("");


    const sendSubMessage = (e, theTopic) => {

        e.preventDefault();


        axios
            .post("/api/messages/sendsubmessage", {
                subMsg: subMessage,
                topic: theTopic
            })

            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

        document.getElementById("submsg-box").value = "";

    };




    const onChange = (a) => {
        setIMessages(value => a);

    }


    const [instructorMessages, setInstructorMessages] = useState([]);

    const [lastTopic, setLastTopic] = useState([
        {_id:  "63c931f36f755b3dd134f083",
          message: "Topic",
            class: "Web Development",
            date:       "date" ,
            
            messageArray: [
              "message loading...",
              "message loading...",
              "message loading...",
            ]
          }
    ])

    const getMessages = () => {
        axios.get("api/messages/fetchmessages")
            .then((response) => {
                // console.log(response.data.filter(forThisClass=>{return forThisClass._id === "63c0209a2ffd9164036e5bb7"}));
                setInstructorMessages(response.data.filter(forThisClass => { return forThisClass.class === props.thisClass.name }).reverse());
                setLastTopic([response.data.filter(forThisClass => { return forThisClass.class === props.thisClass.name }).reverse()[0]]);
            });

    };


    useEffect(() => {
        getMessages();
    }, [instructorMessages, lastTopic]);

    const deleteMessage = (a) => {



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

    const deleteSubMessage = (a, b) => {


        console.log(instructorMessages[a].messageArray[b]);
        axios
            .post("/api/messages/deletesubmessage", { topicID: instructorMessages[a]._id, subIndex: b })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

    }


  

  
    console.log(lastTopic[0].imageArray);
    // console.log(lastTopic[0].imageArray[0]);
    // console.log(lastTopic[0]);
    // console.log(instructorMessages);

 
    


    return (


        <div className="main-classbox">
            <iframe className="code-edit"

                src={props.pLanguage}
                ref={thisIframe}
            >

            </iframe>
            <button className="refresh" onClick={reloadIFrame}><BiRefresh /></button>

            <br />


            <div className="class-messages">

                {/* {
                    instructorMessages.map(imessage => {

                        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                        let dateFormat =
                            months[parseInt(imessage.date.slice(5, 7)) - 1]
                            + " "
                            + imessage.date.slice(8, 10)
                            + ", "
                            + imessage.date.slice(0, 4);

                        return (<div className="class-comment">
                            
                            <>
                                <h2 style={{ color: "#000000b3" }}
                                    key={instructorMessages.indexOf(imessage)}
                                >{imessage.message}

                                    <span className="delete-msg"
                                        onClick={() => { deleteMessage(instructorMessages.indexOf(imessage)) }}
                                        style={{ display: cookies.Role === "instructor" ? "" : "none" }}
                                    ><FaTrash /></span></h2> <br />

                                {imessage.messageArray.map(eachsubmessage => {
                                    return (<p
                                    style={{padding: "15px 10px", width: "100%", marginBottom: "15px"}}
                                    key={imessage.messageArray.indexOf(eachsubmessage)}
                                    >
                                        {eachsubmessage} 
                                        <span className="delete-msg"
                                        onClick={() => { deleteSubMessage(instructorMessages.indexOf(imessage),imessage.messageArray.indexOf(eachsubmessage)) }}
                                        style={{ display: cookies.Role === "instructor" ? "" : "none"}}
                                    ><FaTrash /></span>
                                    </p>)
                                })
                                }
                                <b className="date-stamp">{dateFormat} <br /> {imessage.date.slice(11,16)}</b>

                                <br />

                                <form onSubmit={(e) => sendSubMessage(e, imessage.message)} noValidate>
                                    <input
                                        type="text"
                                        id="submsg-box"
                                        onChange={(e) => { setSubMessage(value => e.target.value) }}
                                        placeholder="new message on this topic"
                                        required
                                    />
                                    <button
                                    
                                    >send</button>
                                </form>
                            </>
                        </div>
                        )
                    })
                } */}

<div className="class-comment">
                            
                            <>
                                <h2 style={{ color: "#000000b3" }}
                                >
                                    {lastTopic[0].message}

                                    <span className="delete-msg"
                                        onClick={() => { deleteMessage(lastTopic) }}
                                        style={{ display: cookies.Role === "instructor" ? "" : "none" }}
                                    ><FaTrash /></span></h2> <br />

                                <img src={lastTopic[0].imageArray}/>

                                {lastTopic[0].messageArray.map(eachsubmessage => {
                                    return (<p
                                    style={{padding: "15px 10px", width: "100%", marginBottom: "15px"}}
                                    >
                                        {eachsubmessage} 
                                        <span className="delete-msg"
                                        onClick={() => { deleteSubMessage(lastTopic,lastTopic.messageArray.indexOf(eachsubmessage)) }}
                                        style={{ display: cookies.Role === "instructor" ? "" : "none"}}
                                    ><FaTrash /></span>
                                    </p>)
                                })
                                }
                                 {/* <b className="date-stamp">{dateFormat} <br /> {imessage.date.slice(11,16)}</b> */}

                                <br />

                                <form onSubmit={(e) => sendSubMessage(e, lastTopic[0].message)} noValidate>
                                    <input
                                        type="text"
                                        id="submsg-box"
                                        onChange={(e) => { setSubMessage(value => e.target.value) }}
                                        placeholder="new message on this topic"
                                        required
                                    />
                                    <button
                                    
                                    >send</button>
                                </form>
                            </>
                        </div>








                <br />
                <button
                    className="instructor-modal"
                    onClick={() => setMsgModal(value => !value)}
                ><FaCommentAlt /></button>
                <form
                    className="instructor-form"
                    style={{
                        display: cookies.Role === "instructor" ? "" : "none",
                        transform: msgModal ? "scale(1)" : "scale(0)"
                    }}
                    onSubmit={sendMessage} noValidate
                >

                    <p onClick={() => setMsgModal(false)}>&#10006; </p>
                    {/* <select>
                        {
                            props.topics.map(
                                eachTopic => {
                                    return (
                                        <option value={eachTopic}>
                                            {eachTopic}
                                        </option>
                                    )
                                }
                            )
                        }

                    </select> */}
                    <h3>New Topic</h3>
                    <input type='text'
                        id="msg-box"
                        placeholder="Add New Topic"
                        onChange={(e) => { onChange(e.target.value) }}
                    />


                    <button>Add</button>

                    <hr/>

                    {/* <ImageUpload topic={lastTopic[0].message}/> */}
                </form>
                <ImageUpload topic={lastTopic[0].message}/>
            </div>


        </div>
    )
}


export default ClassBody;