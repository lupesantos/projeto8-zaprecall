import React from "react";

function QuestionAnswer (){

    const [appear, setAppear] = React.useState("");
    const [appear2, setAppear2] = React.useState("Disappear");
    const [appear3, setAppear3] = React.useState("Disappear");
    const [appear4, setAppear4] = React.useState("Appear");
    const [appear5, setAppear5] = React.useState("Disappear");
    const [appear6, setAppear6] = React.useState("Disappear");
    const [appear7, setAppear7] = React.useState("Disappear");

    function aparecer(){
        if(appear === "")
        {
            setAppear("Disappear");
            setAppear2("Appear");
        }
    }
    function aparecer2(){
        if(appear2 === "Appear")
        {
            setAppear2("Disappear");
            setAppear3("Appear");
        }
    }

    function check(cor)
    {
        setAppear3("Disappear");

        if(cor === "red")
        {
            setAppear5("Appear")
        }
        else if(cor === "orange")
        {
            setAppear6("Appear")
        }
        else if (cor === "green")
        {
            setAppear7("Appear")
        }
    }

    return(
        <div className="QuestionAnswer">
                <div onClick={aparecer} className={`Question ${appear}`}>
                  <p>Pergunta 1</p>
                  <ion-icon name="play-outline"></ion-icon>
                </div>
                <div onClick={aparecer2} className={`Answer ${appear2}`}>
                    <p>O que é JSX?</p>
                    <ion-icon name="return-down-forward"></ion-icon>
                </div>
                <div className={`AnswerBack ${appear3}`}>
                    <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                    <div className="Alternatives">
                        <div onClick={()=>check("red")} className={`RedBox ${appear4}`}>Não lembrei</div>
                        <div onClick={()=>check("orange")} className={`OrangeBox ${appear4}`}>Quase não lembrei</div>
                        <div onClick={()=>check("green")} className={`GreenBox ${appear4}`}>Zap!</div>
                    </div>   
                </div>
                <div className={`AnswerRed ${appear5}`}>
                    <p>Pergunta 1</p>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
                <div className={`AnswerOrange ${appear6}`}>
                    <p>Pergunta 1</p>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
                <div className={`AnswerGreen ${appear7}`}>
                    <p>Pergunta 1</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>

)
}

export default QuestionAnswer;