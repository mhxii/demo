import React from "react";
import Tweet from "./Tweet";


function Myform() {
    const[cour,setCour] = React.useState("");
    const[comment,setComment] = React.useState("");
    
    const changeCour = event=> {
        setCour(event.target.value);
        
    };
    const changeComment = event=> {
        setComment(event.target.value);
        
    };

    // const soumettre = event =>{
    //     alert(`Je m'appele: ${prenom} ${nom}`);
    //     event.preventDefault();
    // };
        

    return(
        // <form onSubmit={soumettre}>
        //     <label for="nom">Nom</label>
        //     <input type="text" onChange={changeNom} value={nom}/><br/>
        //     <label for="prenom">Prenom</label>
        //     <input type="text" onChange={changePrenom} value={prenom}/><br/>
        //     <input type="submit" value="Valider"/>
            
        // </form>
        <form>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Cour" onChange={changeCour} value={cour}/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Comment" onChange={changeComment} value={comment}/>
                </div>
            </div>
            <input type="submit" value="Valider"/>
        <Tweet cour={cour} comment={comment}/>
      </form>
    )
}

export default Myform;