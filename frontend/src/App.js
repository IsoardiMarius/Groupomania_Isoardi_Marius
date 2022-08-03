import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import {UidContext} from "./components/AppContext";
import {useEffect, useState} from "react";
import axios from "axios";


const App = () => {

    const [uid,setUid] = useState(null)
    useEffect(async () => {
        await axios({
        })
    })

    return (() =>
        <div>
            <UidContext.Provider value={uid}>

                <BrowserRouter>
                    <Routes>
                        <Route path="/signin" element={<SignInForm/>}></Route>
                        <Route path="/signup" element={<SignUpForm/>}></Route>
                        <Route path="/" element={<Home/>}></Route>


                    </Routes>
                </BrowserRouter>
            </UidContext.Provider>

        </div>
    );
};

export default App;