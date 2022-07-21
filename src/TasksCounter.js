function TasksCounter ({
    counter, 
    appear,
    setAppear,
    appear2,
    setAppear2})

{
    if(counter.length === 4)
    {
        let counters = counter.filter(value => value !== "close-circle");

        if(counters.length === 4)
        {
            setAppear("Appear");
        }
        else 
        {
            setAppear2("Appear");
        }
    }
    

    console.log(counter.length);

    return(
        <>
            <div className={`Party ${appear}`}>
                <div className="Party1">
                    <img src="assets/party.png"></img>
                    <p>Parabéns!</p>
                </div>
                <div className="Party2">
                    <p>Você não esqueceu de nenhum flashcard!</p>   
                </div>
            </div>
            <div className={`Party ${appear2}`}>
                <div className="Party1">
                    <img src="assets/sad.png"></img>
                    <p>Putz...</p>
                </div>
                <div className="Party2">
                    <p>Ainda faltam alguns... Mas não desanime!</p>   
                </div>
            </div>
            <div className="QuestionFooter">
                <p>{counter.length}/4 CONCLUÍDOS</p>
                <div>
                    {counter.map((value, index)=>
                        <ion-icon 
                        key={index} 
                        name={value}></ion-icon>)}
                </div>
               </div> 
        </>
           
    )
}

export default TasksCounter;