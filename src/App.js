import './App.css';
import SignInUpContainer from "./containers/SignInUpContainer";
import WelcomePageContainer from "./containers/WelcomePageContainer";
import SeeProblemsContainer from "./containers/SeeProblemsContainer";
import SubmitSolutionContainer from "./containers/SeeProblemsContainer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, Switch
} from "react-router-dom";
import SeeSubmissionsContainer from "./containers/SeeSubmissionsContainer";


function App() {
    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element = {SignInUpContainer()}
                        />

                        <Route
                            exact
                            path='/login'
                            element = {SignInUpContainer()}
                        />

                        <Route
                            exact
                            path='/problems'
                            element = {SeeProblemsContainer()}
                        />

                        <Route
                            exact
                            path = '/submissions'
                            element = {SeeSubmissionsContainer()}
                        />
                    </Routes>
                </div>
            </Router>
        </div>)

}

export default App;
