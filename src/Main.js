import React from "react";

function Main()
{
    const [disappear, setDisappear] = React.useState("");

    function sumirMain(){
        setDisappear("Disappear");
    }

    return(
        <div onClick={sumirMain}   className={`Main ${disappear}`}>
              <img src="assets/image1.png" alt=""></img>
              <div className="Zap">ZapRecall</div>
              <div className="InicialButton">Iniciar Recall!</div>
            </div>
    )
}

export default Main;
