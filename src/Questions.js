import QuestionAnswer from "./QuestionAnswer";
function Questions()
{
    return(
<div className="Questions">
              <div className="QuestionsHeader">
                <img src="assets/image1.png"></img>
                <div className="Zap">ZapRecall</div>
              </div>
              <QuestionAnswer />
              
              <div className="QuestionFooter">
                <p>0/4 CONCLUÍDOS</p>
              </div>           

            </div>

    )
}

export default Questions;