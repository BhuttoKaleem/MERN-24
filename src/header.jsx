import React  from "react";
import { Link } from "react-router-dom";

function Header(){

    return(
        <React.Fragment>
          <div className="flex gap-5 bg-slate-600">
          <Link to={"/"}>
                    Home
                </Link>   
                <Link to={"/api"}>
                    Api
                </Link>  
                <Link to={"/stopWatch"}>
                    Stopwatch
                </Link>  
                <Link to={"/calculator"}>
                    Calculator
                </Link> 
                <Link to={"/todo"}>
                    todoApp
                </Link>  
                    
            </div>
        </React.Fragment>
    );
}

export default Header;