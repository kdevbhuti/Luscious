import React from "react";
import Head from "./Head/Head"
import "../../css/home.css"
import Recipe from "./Recipe/index"

const Home = ()=>{
    const [recipe, setRecipe] = React.useState([]); // for recive all recipes from database
    const [allRecipeName, setAllRecipeName] = React.useState([]);// for send all resipe name to Child Recipe component

    React.useEffect(() => { // for receive all recipes from database on page lode
        fetch("http://localhost:4000/api/v1/get-recipes")
        .then((responce)=>responce.json())
        .then((json)=> setRecipe(json));
      }, []);

    React.useEffect(()=>{ //updating the allAllRecipeName when change the recipe state
        let allRecipe = [];
        recipe.map((element, index)=>{
            allRecipe[index] = element.recipeName;
        })
        setAllRecipeName(allRecipe);
    },[recipe])

    const searchRecipe = (searchValue) =>{ // this function filter recipes from search box
        let recipeArr = recipe.filter((element)=>{
            return element.recipeName.toLowerCase() === searchValue.toLowerCase();
        })
        if(recipeArr.length != 0){
            setRecipe(recipeArr);
        }
    }

    
      return(
          <main>
          <section className="header">
             <Head searchRecipe={searchRecipe} allRecipeName={allRecipeName}/>
        </section>
          <section className="recipes"> 
            {recipe.map((recipe, index) => <Recipe key={`${recipe.recipeName}-${index}`} recipe={recipe} />)}
          </section>
          </main>
          
      )
}


export default Home;