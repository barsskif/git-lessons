import React from "react"

function Joke(props) {
    return (
        <div>
            <h3>Вопрос: {props.question}</h3>
            <h3>Ответ: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke