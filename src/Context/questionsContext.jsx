import { createContext, useState, useContext } from "react";

export const QuestionsContext = createContext({})

export const QuestionsContextProvider = ({children}) =>{
    const [option, setOption] = useState(0)
    const [questions, setQuestions] = useState([])
    const [recordOfAnswers, setRecordOfAnswers] = useState([])
    const [mistakes, setMistakes] = useState(0)
    const [hits, setHits] = useState(0)
    const [score, setScore] = useState(0)
    


    return(
        <QuestionsContext.Provider value={
            {
                option,
                setOption,
                questions,
                setQuestions,
                recordOfAnswers,
                setRecordOfAnswers,
                mistakes,
                setMistakes,
                hits,
                setHits,
                score,
                setScore
            }
        }>
            {children}
        </QuestionsContext.Provider>
    )
}

export const useQuestions = () =>{
 return useContext(QuestionsContext)
}



