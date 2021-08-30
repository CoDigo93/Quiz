import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import {Question} from './pages/Question'
import {ConfirmationPage} from './pages/ConfirmationPage'
import {Record} from './pages/Record'
import {StorageRecord} from './pages/StorageRecord'


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {App}/>
                <Route path="/questions" component = {Question} />
                <Route path="/confirmation" component = {ConfirmationPage} />
                <Route path="/record" component = {Record} />
                <Route path="/storageRecord" component = {StorageRecord} />
            </Switch>
        </BrowserRouter>
    )
}