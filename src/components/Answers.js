

import { useParams } from "react-router-dom";
import React, {useState, useEffect} from "react"

import axios from "axios";

import DisplayQuestion from "./DisplayQuestion";


const Answers =()=>{
    useEffect(()=>{
        fetchQuestion()
    },[])

    const [answers, setAnswer] = useState([])
    const {questionId} = useParams()

    const fetchQuestion = () => {
        axios
            .get(`http://localhost:3002/questions/${questionId}/answers`)
            .then((response) => {
             const answers = response.data
                setAnswer(answers)
            })
            .catch((error) => {
                console.log(error);
            });
    }

        return (
            <div>
                {answers.map((answer) => (
                    <DisplayQuestion answer={answer.content}  />
                ))}
            </div>
        );

}

export default  Answers
