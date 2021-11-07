import Home from "pages/Home";
import Dashboard from "pages/Home/Daschboard";
import { BrowserRouter, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard" exact>
                    <Dashboard />
                </Route>  
            </switch>
        </BrowserRouter>
    );
}

export default Routes;