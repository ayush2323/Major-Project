import React from 'react'
import { Context } from '../../Context'

const Show_Paper = () => {
    const { question } = useContext(Context)
    return (
        <>
            <h1>Your Question Paper</h1>
            <div className="container">
                <div className="header">
                    <h3>Instruction:</h3>
                    <p>1. All Questions are compalsory</p>
                    <p>2. Complete in time</p>
                </div>
                <main>
                    {question.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </main>
            </div>
        </>
    )
}

export default Show_Paper
