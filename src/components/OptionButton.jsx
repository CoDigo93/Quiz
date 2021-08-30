import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
//import {BootstrapButton} from './testeButton'

import { purple} from '@material-ui/core/colors';

const useStyles = makeStyles({
    homeButton:{
      boxShadow: 'none',
      width: props => props.width,
      height:props => props.height,
      textTransform: 'none',
      fontSize: 14,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#fff',
      borderColor:purple[500],
      color:purple[500],
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#e0dfdf',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#00cc00',
        borderColor: '#00bf30',
      },
      '&:focus': {
        outline: 'none'
      },
    },
  })



export const OptionButton = (props) =>{
    const {homeButton} = useStyles(props)

    return(
        
            <Button
                className={homeButton}
                variant={props.variant} 
                color={props.color} 
                onClick={props.onClick}
                width={props.width}>
                    
                    {props.value}
            </Button>
       
        
    )
}

