import Home from "pages/Home";
import Dashboard from "pages/Home/Daschboard";
import { BrowserRouter, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" >
                    <Home />
                </Route>
                <Route path="/dashboard" >
                    <Dashboard />
                </Route>  
            </switch>
        </BrowserRouter>
    );
}

export default Routes;