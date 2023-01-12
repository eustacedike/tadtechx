import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import style from "./classapp.css";

import {FaUser, FaUsers, FaComment} from "react-icons/fa";
import {BiRefresh} from "react-icons/bi";


import ClassMembers from "./classmembers";
import ClassQuestions from "./classquestions";

import { useCookies } from 'react-cookie';


function ClassApp(props) {
    
    const [cookies, setCookie, removeCookie] = useCookies(['user']);


    const [members, setMembers] = useState(false);
    const [questions, setQuestions] = useState(false);
    const thisIframe = useRef();

    


//   const instructorMessages = [
//     "HTML is a markup language used to structure a webpage/site",
//     "CSS stands for Cascading Style Sheet, it is used for styling",
//     "Javascript is a programming language, it is used in web development to write functions",
//     "React is a javascript framework designed by Facebook",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, autem maxime aliquid blanditiis optio asperiores quis voluptas fugiat quo, dolore esse ad quos nam magnam provident distinctio. Dolores et perspiciatis, eligendi quod animi corporis quis rerum adipisci illum laboriosam sed vitae quo iste minus officia quidem unde, non distinctio."

//   ]
    
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
          console.log(res);
          instructorMessages.push(res.data.message);
          console.log(instructorMessages);
        })
        .catch(err => {
          const errors = err.response.data;
            console.log(err.response.data)
      });
        
      };
      
      const onChange = (a) => {
        setIMessages(value => a);
    
        console.log(iMessages)
    }


    const [instructorMessages, setInstructorMessages] = useState(["great"]);

    const getMessages = () => {
        axios.get("api/messages/fetchmessages")
          .then((response) => {
            // console.log(response.data.filter(forThisClass=>{return forThisClass._id === "63c0209a2ffd9164036e5bb7"}));
          setInstructorMessages(response.data.filter(forThisClass=>{return forThisClass.class === props.thisClass.name}));
          });
    
      };
  
    //   getMessages()

    return (
        <div className="ClassApp">
            <button onClick={getMessages}>get</button>

            <nav className="classapp-nav">
               <Link to="/dashboard"><button><FaUser/></button></Link>
                <h3>{props.thisClass.name}</h3>
                <div>
                    <button onClick={openMembers}><FaUsers/></button>
                    <button onClick={openQuestions}><FaComment/></button>
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
                    <button className="refresh" onClick={reloadIFrame}><BiRefresh/></button>

                    <br />
                    

                    <div className="class-messages">
                        <div className="class-comment">
                            <h4>Dean Mark (Instructor)</h4> <br />

                            {
                                instructorMessages.map(imessage =>{
                                    return (
                                        <>
                                        <p>{imessage.message} </p><br />
                                        </>
                                    )
                                })
                            }
                            
                        </div>

                        
                        
                       
                        <br />
                        <form
                        style={{display: cookies.Role === "instructor"? "" : ""}}
                        onSubmit={sendMessage} noValidate
                        >
                            <input type='text'
                            onChange={(e)=>{onChange(e.target.value)}}
                           />
                            <button>send</button>
                        </form>
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