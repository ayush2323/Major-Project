import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container } from "react-bootstrap";
import Question_Creator from "../Question_Creator";
import "./styles.css"

const Paper_Creator = () => {
    const [question, setQuestion] = useState([]);
    
    const handlePlusBtn = ()=>{
        setQuestion([...question, <Question_Creator key={question.length} />]);
    }

    const handleMinusBtn = ()=>{
        const copiedQuestion = [...question];
        copiedQuestion.pop();
        setQuestion(copiedQuestion);
    }

    const reset = ()=>{
        setQuestion([]);
    }

    return (
        <Container style={{border: "2px solid #cecece"}} >
            <span id="heading">Paper Creator</span>
            <img style={{height:"3rem", width:"3rem", cursor:"pointer"}} onClick={reset} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRba2bOeZNI0aPyVh20vbGNbHJtwQ8kBiFw&usqp=CAU"/><br></br>
            <Button id="plus_button" className="btn-dark" style={{marginLeft:"0.5rem"}} onClick={handlePlusBtn}>+</Button>
            <Button id="minus_button" className="btn-dark" style={{marginLeft:"52.5rem"}} onClick={handleMinusBtn}>-</Button><hr></hr>
            <div id="display">
                <span id="span">Display Name : </span>
                <input type="text" placeholder="paper name" />
            </div>
            {question.length != 0 ? <span>Total Questions : {question.length}</span> : null}<br></br>
            {question}<br></br>
        </Container>
    );
};

export default Paper_Creator;