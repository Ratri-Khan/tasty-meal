import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const RecipeDetails = () => {
    const recipes = useLoaderData();
    return (
        <div>           
            {
                recipes.map(recipe =><Recipe recipe={recipe} key={recipe.id}></Recipe>)
            }
        </div>
    );
};

export default RecipeDetails;