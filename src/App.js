import React from "react"
import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke 
                question="Что самое лучшее в Швейцарии?" 
                punchLine="Я не знаю, но флаг это большой плюс!"
            />
            
            <Joke 
                question="Вы слышали о математике, который боится отрицательных чисел?" 
                punchLine="Он не остановится ни перед чем, чтобы избежать их!"
            />
            
            <Joke 
                question="Слышать о новом ресторане под названием Карма?" 
                punchLine="Нет меню: вы получаете то, что заслуживаете."
            />
            
            <Joke 
                question="Вы слышали об актере, который провалился сквозь половицы?" 
                punchLine="Он просто проходил сцену."
            />
            
            <Joke 
                question="Вы слышали о астронавте-клаустрофоби?" 
                punchLine="Ему просто нужно немного места."
            />

<Joke 
                question="Как отмазаться от работы?" 
                punchLine="Просто умереть."
            />
            
        </div>
    )
}

export default App