import Head from "./Head";
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"


const recipeNames = [
    "Chicken momo",
    "Allu Paratha",
    "Chicken Biriyani"
]
const searchRecipe = (searchValue) =>{ // this function filter recipes from search box
    let recipeArr = recipe.filter((element)=>{
        return element.recipeName.toLowerCase() === searchValue.toLowerCase();
    })
    if(recipeArr.length != 0){
        setRecipe(recipeArr);
    }
}

it("Head must render a search box.",()=>{
    const {getByTestId} = render(<Head allRecipeName={recipeNames} searchRecipe={searchRecipe}></Head>);
    expect(getByTestId("header")).toContainElement(getByTestId("search-box"))
})