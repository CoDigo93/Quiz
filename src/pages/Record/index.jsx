import { useHistory } from "react-router-dom"
import { useQuestions } from "../../Context/questionsContext"

import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './styles.css'
import {defineFLexOrGridLayout} from '../../styles/DefineFlexOrGridLayout'

export const Record = () => {
    const {recordOfAnswers, mistakes,setMistakes, hits, setHits, score, setScore, setRecordOfAnswers} = useQuestions()
    
    const history = useHistory()


    const giveTitleStyleToCorrectAnswer = (chosenAnswer, correctAnswer) =>{
        return chosenAnswer === correctAnswer ? 'grenTitle' : 'redTitle'
    }




    const giveBackgroundStyle = (chosenAnswer, correctAnswer) => {
        return (
            chosenAnswer === correctAnswer 
                ? 'correctAnswer' 
                : 'incorrectAnswer'
        )
        
    }

    
    const showRecordOfAnswers = (chosenAnswer, correctAnswer) =>{
        return (
             chosenAnswer !== correctAnswer ? (
                <>
                    <div className = {giveBackgroundStyle(chosenAnswer, correctAnswer)}>
                        <span >resposta escolhida: {chosenAnswer}</span>
                        <span><HighlightOffOutlinedIcon/></span>  
                    </div>

                    <span className="chosenAnswer">resposta correta: {correctAnswer}</span>
                
                </>
            )
            
            : <div className="correctAnswer">
                <span>resposta correta: {correctAnswer}</span>
                <span><CheckCircleOutlinedIcon /></span>
            </div>
            
        )
    }
    


    const renderRecords = ({question,chosenAnswer,correctAnswer}) =>{
        return(
        <div className="answersContainer">
            <h4 className={giveTitleStyleToCorrectAnswer(chosenAnswer, correctAnswer)}>{question}</h4>
            {showRecordOfAnswers(chosenAnswer, correctAnswer)}
        </div>
        )
    }


    const backToBeggining = () =>{
        setRecordOfAnswers([])
        setMistakes(0)
        setHits(0)
        setScore(0)
        
        history.push('/')
    }


    



    
    return (
        <div className="recordContainer">
            <div className="score-wrapper">
                <h4>Score: {score.toFixed(2)}%</h4>
                <h4>Erros: {mistakes}</h4>
                <h4>Acertos:{hits}</h4>

            </div>
            <div className="returnToBeggining">
                <button className="link" onClick={backToBeggining}> início <ArrowBackIcon/></button>
            </div>
            <div className={defineFLexOrGridLayout(recordOfAnswers.length)}>
            {recordOfAnswers.map(record => renderRecords(record))}
            </div>
        </div>
        

    )
}


