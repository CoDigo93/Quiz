import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import '../Record/styles.css'
import {defineFLexOrGridLayout} from '../../styles/DefineFlexOrGridLayout'

export const StorageRecord = () => {
    
    const [storageAnswers, setStorageAnswers] = useState([])
    const [storageScore, setStorageScore] = useState()
    

    useEffect(()=>{
        const pullDataFromStorage = () => {
            const storageResult = localStorage.getItem('items')
            if(storageResult === null) return null
    
            setStorageAnswers(JSON.parse(storageResult))            

        }

        pullDataFromStorage()

    },[setStorageAnswers])


    useEffect(()=>{
        const pullScoreFromStorage = () =>{
            const storageScoreData = localStorage.getItem('scores')
            if(storageScoreData === null) return null
   
            setStorageScore(JSON.parse(storageScoreData))
              
        }

        pullScoreFromStorage()
    },[setStorageScore])


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
                    <div 
                        key ={`storage-record${Math.random()}`} 
                        className = {giveBackgroundStyle(chosenAnswer, correctAnswer)}>
                        
                        <span >chosen answer: {chosenAnswer}</span>
                        <span><HighlightOffOutlinedIcon/></span>  
                    </div>

                    <span className="chosenAnswer">correct answer: {correctAnswer}</span>
                
                </>
            )
            
            : <div className="correctAnswer">
                <span>correct answer: {correctAnswer}</span>
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


    
    
    return (
        <div className="recordContainer">
            <div className="score-wrapper">
                <h4>Score: {storageScore?.score.toFixed(2)}%</h4>
                <h4>Mistakes: {storageScore?.mistakes}</h4>
                <h4>Hits:{storageScore?.hits}</h4>

            </div>
            <div className="returnToBeggining">
                <Link className="link" to='/'> Home <ArrowBackIcon/></Link>
            </div>
            <div className={defineFLexOrGridLayout(storageAnswers.length)}>
                {storageAnswers.map(record => renderRecords(record))}
            </div>
        </div>
        

    )
}