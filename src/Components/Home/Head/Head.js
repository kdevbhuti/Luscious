import React from "react";
import HeadImage from "../../../assets/images/Home-Header.jpg";

const Head = ({allRecipeName = [], searchRecipe = ()=>{}}) => {
    const [selectBoxElement, setSelectBoxElement] = React.useState([]); // for select box element 
    const [searchValue, setSearchValue] = React.useState(""); // for search box value

    const handleChange = (event)=>{ //this function 
        setSearchValue(event.target.value);  //chenging the search box value,
        let nameArr = allRecipeName.filter((element)=>{  //filtering the select box recipes
            return element.toLowerCase().startsWith(event.target.value.toLowerCase())
        })
        setSelectBoxElement(nameArr);
        if(event.target.value === ""){
            setSelectBoxElement([])
        }

    }

    const handleOnClick = (event)=>{ // this method sore the recipe name from select box to defined state
        setSearchValue(event.target.innerHTML);
    }

    const searchRecipeValue = () =>{ // sending search value to Home Parent component through call back function
        searchRecipe(searchValue);
        setSelectBoxElement([]);
    }

    return(
        <div data-testid="header">
            <figure className="headerImg">
                <img src={HeadImage}></img>
            </figure>
            <div className="blueOpacity"></div>
                <div className="headDiv">
                    <h1>Find Recipes</h1>
                    <div className="searchSection">
                    <input data-testid="search-box" onChange={handleChange} className="searchBox" placeholder="Enter Recipe" type="text" value={searchValue}></input>
                    <button onClick={searchRecipeValue} className="searchBtn">Search</button>
                    <p>Want to craft your own creative meat-free meals? Get inspiration from other food lovers!</p>
                </div>
                <div className="selectBox">
                    <ul>
                        {selectBoxElement.map((element, index) => <li key={`${element}-${index}`} onClick={handleOnClick}>{element}</li> )}
                    </ul>
                </div>
               
            </div>
        </div>
    )
}

export default Head;