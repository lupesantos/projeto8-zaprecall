import React from "react";
import Questions from "./Questions";


function App()
{
    

    return(
        <div className="All">
            <div className="Main">
              <img src="assets/image1.png"></img>
              <div className="Zap">ZapRecall</div>
              <div className="InicialButton">Iniciar Recall!</div>
            </div>
            <Questions />
        </div>
    )
}

export default App;