import React from "react";
import "../../css/cooking.css";
import { useLocation } from "react-router-dom";

const Cooking = ()=>{
    const location = useLocation();
    const [recipeDetails, setRecipeDetails] = React.useState(location.state.recipe);
    const [comments, setComment] = React.useState([{value:""}]); //for store the comments

    
     React.useEffect(()=>{
            let coppyComment = [];
            recipeDetails.comments.map((recipeComment, index)=>{
               coppyComment[index] = {value: recipeComment};
             })
             setComment([...coppyComment, {value: ""}]);
     },[])


     

    React.useEffect(async()=>{
        const responce = await fetch("http://localhost:4000/api/v1/save-comment-data", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                recipiId: recipeDetails._id,
                comments: recipeDetails.comments
            })
        })
    },[recipeDetails])

    const handleChangeState = (event)=>{
        let getComment = [...comments];
        getComment[comments.length-1].value = event.target.value;
        setComment(getComment)
    }
    
    const submitComment = () => {
        const commentValue = [];
        comments.map((comment, index)=>{ commentValue[index] = comment.value })
        setComment([...comments, {value:""}])
        setRecipeDetails({...recipeDetails, comments: commentValue })

    
    }

    return(
        <main>
            <section className="cookHeading">
                <h1>{recipeDetails.recipeName}</h1>
            </section>
            <section className="recipeDetails">
            <div className="imageContent">
                <figure className="recipeImg">
                    <img src={recipeDetails.snapshort}></img>
                </figure>
            </div>
               <div className="recipeIngredians">
                    <h2>Ingrediens</h2>
                    <ul className="ingrediansList">
                    {recipeDetails.ingredients.map((element, index) => <li key={index}>{index+1}. {element}</li>)}
                    </ul>
               </div>
                <div className="recipeMethod">
                    <h2>Method of Preparation</h2>
                    <p>{recipeDetails.preparationMethod}</p>
                </div>
                <div className="recipeVideo">
                <iframe  src={recipeDetails.preparationVideo}></iframe>
                </div>
    
               <div className="userComments">
                    <div className="commentContainer">
                        <h2>User Commants</h2>
                        <ul>
                            {recipeDetails.comments.map((comment, index)=> <li key={index}>{comment}</li>)}
                        </ul>
                    </div>
                   
                    <div className="submitComment">
                        <input onChange={handleChangeState} type="text" placeholder="Enter your Comment" value={comments[comments.length-1].value}></input>
                        <button onClick={submitComment}>Submit</button>
                    </div> 
               </div>
            </section>
    
        </main>
    )
}

export default Cooking;