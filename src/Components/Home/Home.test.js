import React from "react";
import ReactDom from "react-dom";
import Home from "./Home";
import Recipe from "./Recipe/index"

import { render, cleanup } from "@testing-library/react"
// import "jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect"



const recipeObject = {
    ingredients:[
        "2 pounds fresh green beans, trimmed",
        "½ cup balsamic vinegar",
        "⅓ cup extra-virgin olive oil",
        "1 small sweet onion, thinly sliced"
    ],
    description: "What makes this cold green bean salad so good is that the beans marinate while they are still warm--that way the beans soak up the vinaigrette and become more flavorful.",
    recipeName: "Easy Cold Green Bean Salad",
    snapshort:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9106368.jpg&q=85",
    preparationMethod: "Bring a large pot with lightly salted water to a boil over high heat. Add beans and cook, uncovered, until soft but still firm to the bite, 7 to 10 minutes. Check often so beans don't overcook.Combine vinegar, olive oil, onion, garlic, parsley, sugar, salt, and pepper in a large bowl.Drain cooked green beans and mix with dressing in the bowl while still warm. Allow to marinate at room temperature for at least 1 hour. Serve at room temperature or chilled.",
    preparationVideo:"https://www.youtube.com/embed/OxGq_Zk73q0",
    comments:[
        "Nice Recipe",
        "Nice Video",
        "Good work"
    ]

}

afterEach(cleanup)

it("render home component without crashing", ()=>{
    const main =  document.createElement("main");
    ReactDom.render(<Home></Home>, main);
})

it("Render view content button correctly", ()=>{
    const {getByTestId} = render(<Recipe recipe={recipeObject}></Recipe>);
    expect(getByTestId("recipe")).toContainElement(getByTestId("view-recipe-button"))
})

it("Render Description of recipe correctly", ()=>{
    const {getByTestId} = render(<Recipe recipe={recipeObject}></Recipe>);
    expect(getByTestId("recipe")).toContainElement(getByTestId("view-description-of-recipe"))
})