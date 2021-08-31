import {useQuestions} from '../../Context/questionsContext'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import { OptionButton } from '../../components/OptionButton'
import '../Question/styles.css'


export const Question = () =>{
    const {
        questions, 
        setRecordOfAnswers, 
        recordOfAnswers, 
        setHits, 
        setMistakes, 
        setScore ,
        score,
        hits,
        mistakes
    } = useQuestions()

    const {results} = questions
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [options, setOptions] = useState([])
    const [lastQuestion] = useState(false)
    const [lastQuestionWasAnswered, setLastQuestionWasAnswered] = useState(false)
    
    const isLastQuestion = currentQuestion + 1 === results.length
    
    const history = useHistory()
    

    useEffect(()=>{
        const stringfiedRecordOfAnswers = JSON.stringify(recordOfAnswers)
        localStorage.setItem('items', stringfiedRecordOfAnswers)

    },[lastQuestion,recordOfAnswers])



    useEffect(()=>{
        const stringfiedScores = JSON.stringify({score,hits,mistakes})
        localStorage.setItem('scores', stringfiedScores)

    },[lastQuestion, recordOfAnswers, hits, mistakes, score])

    
    

    useEffect(()=>{
        const handleOptionsForQuestion = () =>{ 
            setOptions(
                [...results[currentQuestion].incorrect_answers, 
                results[currentQuestion].correct_answer] )
        }

        handleOptionsForQuestion()
       
    },[currentQuestion, results])



    useEffect(()=>{
        if(lastQuestionWasAnswered) history.push('/record')

    },[lastQuestion, lastQuestionWasAnswered, history])




    const handleCheckQuestion = event =>{
        const {correct_answer, question} = results[currentQuestion]
        const chosenAnswer = event.target.innerText
        
        createObjectsOfChosenAndCorrectAnswers(question, chosenAnswer, correct_answer)
        
        if(answerIsCorrect(correct_answer, chosenAnswer)){
            setScore((score + rulesToEarnPoints()))
            setHits(hits + 1)
        }

        if(!answerIsCorrect(correct_answer, chosenAnswer)) setMistakes(mistakes + 1)
            
        if(isLastQuestion) {
            setLastQuestionWasAnswered(true)
            
        }
        
         if(!isLastQuestion) setCurrentQuestion(currentQuestion + 1)
        
    }




    const rulesToEarnPoints = () => {
        const points =  (100 / results.length)
        return points
    }
    


    const createObjectsOfChosenAndCorrectAnswers = (question, chosenAnswer, correctAnswer) =>{
        const obj = {
            question,
            chosenAnswer,
            correctAnswer
        }
        
        setRecordOfAnswers([...recordOfAnswers, obj] ) 
    }



    const answerIsCorrect = (correct, chosen) => {
        return correct === chosen 
        ? true
        : false
    }

    


    return(
        <div className='questionContainer'>
            
            <h1>{results[currentQuestion].question}</h1>

            <ul>
                {options.map((option, index) => 
                <>
                <li key={Math.random() * index}>
                    <OptionButton 
                        value={option}
                        onClick={event => handleCheckQuestion(event)}
                        variant='outlined'
                        width={500}
                        height={30}
                        
                        >
                            
                            {option}
                    </OptionButton>
                </li>
                </>
                )}
            </ul>
        </div>
        
    )
}