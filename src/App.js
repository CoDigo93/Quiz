import { useState, useEffect } from 'react'
import { OptionButton } from './components/OptionButton'
import { useQuestions } from './Context/questionsContext'
import { useHistory } from 'react-router-dom'

import { Button } from '@material-ui/core'
import AssessmentIcon from '@material-ui/icons/Assessment';

import img from './assets/logodefinitivo.png'



function App() {
  const { setOption } = useQuestions()
  const [hasStorage, setHasStorage] = useState(false)
  
  const history = useHistory()


  useEffect(()=>{
    const checkIfHasStorage = () =>{
      const storage = localStorage.getItem('items')
      storage?.length > 0 ? setHasStorage(true) : setHasStorage(false)
    }

    checkIfHasStorage()

  },[setHasStorage])
  


  const handleOPtion = (e) => {
    setOption(e.target.innerText)

    history.push('/confirmation')
  }



  const redirectToStorageRecordPage = () =>{
    history.push('/storageRecord')
  }



  return (
    <main className='mainContainer'>
      
        <div className='div-image'>
          <img src='https://ik.imagekit.io/rdlustosa/logodefinitivo_Y43G3YVPQ.png?updatedAt=1633207371042' alt='imagem' />
        </div>
        


        <div className='right-section'>
          
          <h1> How many questions do you want to answer?</h1>

            <div className='div-buttons'>
              <OptionButton value={1} onClick={e => handleOPtion(e)}/>
              <OptionButton value={2} onClick={e => handleOPtion(e)}/>
              <OptionButton value={3} onClick={e => handleOPtion(e)}/>
              <OptionButton value={4} onClick={e => handleOPtion(e)}/>
              <OptionButton value={5} onClick={e => handleOPtion(e)}/>
              <OptionButton value={6} onClick={e => handleOPtion(e)}/>
              <OptionButton value={7} onClick={e => handleOPtion(e)}/>
              <OptionButton value={8} onClick={e => handleOPtion(e)}/>
              <OptionButton value={9} onClick={e => handleOPtion(e)}/>
              <OptionButton value={10} onClick={e => handleOPtion(e)}/>
            </div>

            <footer>
              <Button
                onClick={() => redirectToStorageRecordPage()} 
                color='primary'
                variant = 'contained'
                disabled = {!hasStorage ? true : false}
              >
                Check your previous result!
                
                <AssessmentIcon />  
              </Button>
          </footer> 
        </div> 
        
          
     </main>
     
  );
}

export default App;
