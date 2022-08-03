import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import {DataProvider} from "./context/UserContext";
import {useState} from "react";


const App = () => {

    const [currentUser, setCurrentUser] = useState("")
    return (
        <DataProvider value={{currentUser,setCurrentUser}}>

            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SignInForm/>}/>
                    <Route path="/signup" element={<SignUpForm/>}/>
                    <Route path="/" element={<Home/>}/>


                </Routes>
            </BrowserRouter>
        </DataProvider>

    );
};

export default App;