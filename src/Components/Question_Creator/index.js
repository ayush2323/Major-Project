import React, {useState}from 'react';
import { Button, Container, Form } from "react-bootstrap";
import "./styles.css"
import Text from "../Options/Text";

const Question_Creator = () => {
    const [options, setOptions] = useState();

    const renderOptions = (event)=>{
        switch(event.target.value){
            case "MCQ":
                break;
            case "MCQ_Multi": 
                break;
            case "Text": setOptions((<Text />));
                break;
        }
    }
    return (
        <Container style={{border : "#cecece groove 2px", height : "10rem"}}>
            <br></br>
            <Form>
                <Form.Group>
                    <span>Question Type : </span>
                    <select defaultValue={'DEFAULT'} onChange={renderOptions}>
                        <option value="DEFAULT" disabled>Select Question Type</option>
                        <option value="MCQ">MCQ</option>
                        <option value="MCQ_Multi">MCQ_Multi</option>
                        <option value="Text">Text</option>
                    </select>
                    <span> Question : </span>
                    <input type="text" placeholder="Text area" style={{width:"15rem"}}/>
                    <span> Image Link : </span>
                    <input type="text" placeholder="url"/><br></br><br></br>
                    <div style={{marginLeft : "18rem"}}>{options}</div>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Question_Creator;