import React, {useState, useEffect, useContext, Children} from 'react'
import Question_Creator from './Components/Question_Creator'

const Context = React.createContext()


function ContextProvider(props) {
    const [question, setQuestion] = useState([]);
    const [options, setOptions] = useState();

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
        <Context.Provider value={{question, options, handlePlusBtn, handleMinusBtn, reset}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
