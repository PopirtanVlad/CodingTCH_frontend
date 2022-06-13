import './App.css';
import SignInUpContainer from "./containers/SignInUpContainer";
import WelcomePageContainer from "./containers/WelcomePageContainer";
import SeeProblemsContainer from "./containers/SeeProblemsContainer";
import SubmitSolutionContainer from "./containers/SubmitSolutionContainer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, Switch
} from "react-router-dom";
import SeeSubmissionsContainer from "./containers/SeeSubmissionsContainer";
import AddProblemContainer from "./containers/AddProblemContainer";
import SubmissionDetailsContainer from "./containers/SubmissionDetailsContainer";


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
                            path='/problems/add'
                            element = {AddProblemContainer()}
                        />

                        <Route
                            exact
                            path = '/submissions'
                            element = {SeeSubmissionsContainer()}
                        />

                        <Route
                            exact
                            path = '/problems/:title'
                            element = {SubmitSolutionContainer()}
                        />

                        <Route
                            exact
                            path = '/submissions/:id'
                            element = {SubmissionDetailsContainer()}
                        />

                    </Routes>
                </div>
            </Router>
        </div>)

}

export default App;
