import React from "react";

import axios from "axios";

import { useState } from "react";

import { Cookies, useCookies } from 'react-cookie';



import style from "./classapp.css"

function ClassQuestions(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);


    const [question, setQuestion] = useState("");

    const theQuestion = {
        question: question,
        Dept: props.Dept,
        name: cookies.FirstName + " " + cookies.LastName
    }
    const sendQuestion = (e) => {

        e.preventDefault();


        axios
            .post("/api/messages/sendquestion", theQuestion)
            .then(res => {
                console.log(res);
                questionOutput.push(res.data.question);
                // console.log(questionOutput);
            })
            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

        document.getElementById("qstn-box").value = "";
    };

    const onChange = (a) => {
        setQuestion(value => a);

    }

    const [questionOutput, setQuestionOutput] = useState([""]);

    const getQuestions = () => {
        axios.get("api/messages/fetchquestions")
            .then((response) => {
                setQuestionOutput(response.data.filter(forThisClass => { return forThisClass.class === props.Dept }).reverse());
                // console.log(response.data.filter(forThisClass => { return forThisClass.class === props.Dept }).reverse());
            });

    };

    getQuestions();


    const [answer, setAnswer] = useState("");


    const sendAnswer = (a) => {

        // e.preventDefault();


        axios
            .post("/api/messages/sendanswer", { id: questionOutput[a]._id, answer: answer})
            .then(res => {
                console.log(res);
                // questionOutput.push(res.data.question);
                // console.log(questionOutput);
            })
            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

        // document.getElementById("qstn-box").value = "";
    };

    return (
        <div className="classdiv">

            <form onSubmit={sendQuestion} noValidate>
                <textarea
                    rows="10" placeholder="Enter your question here"
                    id="qstn-box"
                    onChange={(e) => { onChange(e.target.value) }}
                >
                </textarea> <br />
                <button>Send</button>
            </form>

            <br /> <br />
            <div className="all-class-questions">

            {
                questionOutput.map(eachQuestion => {
                    return (
                            <div className="class-comment" key={questionOutput.indexOf(eachQuestion)}>
                                <h4>{eachQuestion.name}</h4> <br />
                                <p><b>Q: </b>{eachQuestion.question}</p>
                                <br />
                                <h4>Instructor</h4> <br />
                                <input
                                onChange={(e) => { setAnswer(e.target.value) }}
                                style={{ display: cookies.Role === "instructor" ? "" : "none" }}
                                type="text" />
                                <button
                                onClick={() => { sendAnswer(questionOutput.indexOf(eachQuestion)) }}
                                style={{ display: cookies.Role === "instructor" ? "" : "none" }}

                               >
                                    reply
                                </button>
                                <p><b>A: </b>{eachQuestion.answer}</p>
                            </div>
                            
                    )
                })
            }
                        </div>



        </div>
    )
}


export default ClassQuestions;