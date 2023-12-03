import React  from "react";
import { Link } from "react-router-dom";

function Header(){

    return(
        <React.Fragment>
          <header className="flex gap-5 bg-slate-600 text-white">
          <Link to={"/"}>
                    Home
                </Link>   
                <Link to={"/api"}>
                    Api
                </Link>  
                <Link to={"/todoAPI"}>
                    Todo App
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
                    
            </header>
        </React.Fragment>
    );
}

export default Header;