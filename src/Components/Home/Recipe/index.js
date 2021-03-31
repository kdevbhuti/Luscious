import React from "react";
import { useHistory } from "react-router-dom";



const Recipe = ({recipe = {}})=>{
    let history = useHistory();

    const buttonClickHandeler = ()=>{
        history.push({
            pathname: '/Cooking',
            state: { recipe: recipe }
        });
    }

    return(
        <div className="recipeContent">
            <h2 className="recipeName"><span className="dash">&mdash;&mdash;&emsp;</span>{recipe.recipeName}</h2>
            <p className="description">
            {recipe.description}
            </p>
            
            <div className="comments">
                <h4 className="commentHeading">Comments</h4>
                <ul className="commentList"> 
                    {recipe.comments.map((comment, index)=> <li key={index}>{comment}</li>)}
                </ul>
            </div>
       
            <figure className="snapShort">
                <img src={recipe.snapshort}></img>
            </figure>
        <button className="viewRecipe" onClick={buttonClickHandeler}>View Recipe</button>
        </div>
    )
}

export default Recipe;