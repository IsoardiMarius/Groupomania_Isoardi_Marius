
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<SignInForm/>}></Route>
                <Route path="/signup" element={<SignUpForm/>}></Route>
                <Route path="/" element={<Home/>}></Route>



            </Routes>
        </BrowserRouter>
    );
};

export default App;