import {useState} from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import './styles.css'

import {useQuestions} from '../../Context/questionsContext' 

export const ConfirmationPage = () => {
    const history = useHistory()
    const {setQuestions, option, questions} = useQuestions()
    const [loading, setLoading] = useState(false)



    const fetchQuestions = async () =>{
        setLoading(true)
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=${option}`)
        setQuestions(data)

        setLoading(false)
        redirectToQuestionsPage()
        
    }



    const redirectToHome = () =>{
        history.push('/')
    }


    const redirectToQuestionsPage = () =>{
        history.push('/questions')
    }


    const renderButtons = 
    <>
        <Button 
            onClick={()=> fetchQuestions()}
            variant="contained" 
            color="primary">   
                Start     
        </Button>

        <Button 
            onClick={()=> redirectToHome()}
            variant="contained" 
            color="secondary">
                Cancel
        </Button>
    </>
    console.log(questions)
    return(
        <div className="wrapperConfirmation">
    
            <h1> Aperte "start" para iniciar o quiz! "Cancel" para retornar!</h1>
            <div className="confirmationContainer">
            
                {loading ? <CircularProgress/> : renderButtons }    
            </div>
        </div>
    )
}