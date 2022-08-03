import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import {DataProvider} from "./context/UserContext";
import {useState} from "react";


const App = () => {
    // On crée notre variable pour useContext

    const [currentUser, setCurrentUser] = useState("")
    return (
        // On passe ses paramètres à chaque composant
        <DataProvider value={{currentUser,setCurrentUser}}>
            {/*On créer nos différentes routes pour nos 3 pages*/}
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