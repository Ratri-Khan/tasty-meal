import React, { useState } from 'react';
// import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const { image, name, description, like, recipes, experience, recipeName, recipeImage, ingredients } = recipe;
    const [disable,setDisable] = useState(false);

    const notify = () => {
        setDisable(toast("My Favorite"))
    }
    return (
        <div className='bg-black'>
            <div className='flex w-4/4 bg-teal-200'>
                <img src={image} alt="" className='w-2/4 h-96' />
                <div className='w-2/4 mt-5'>
                    <p className='text-4xl font-bold w-2/4 m-auto '>{name}</p>
                    <p className='w-2/4 m-auto text-xl font-bold'>{like}</p>
                    <p className='w-2/4 m-auto text-xl font-bold'>Number Of Recipes : {recipes}</p>
                    <p className='w-2/4 m-auto text-xl font-bold'>Experience : {experience}</p>
                    <p className='w-3/4 m-auto text-xl font-bold'> Description : {description}</p>
                </div>
            </div>
            <div className='text-white  w-full'>
                <div className='w-9/12 m-auto flex gap-5 py-5'>
                    <div className='border-2 w-4/12 bg-teal-800 rounded p-5 text-center'>
                        <img src={recipeImage.image1} alt="" className='m-auto' />
                        <h2 className='text-3xl font-bold'>{recipeName.name1}</h2>
                        <p className='py-5'>Ingredient : {ingredients.ingredient1}</p>

                        <button onClick={notify} disabled={disable} className="btn bg-black text-white w-full">Favorite</button>
                        <ToastContainer />

                    </div>
                    <div className='border-2 w-4/12 bg-teal-800 rounded p-5 text-center'>
                        <img src={recipeImage.image2} alt="" className='m-auto' />
                        <h2 className='text-3xl font-bold'>{recipeName.name2}</h2>
                        <p className='py-5'>Ingredient : {ingredients.ingredient2}</p>
                        <button onClick={notify} className="btn bg-black text-white w-full">Favorite</button>
                        <ToastContainer />
                    </div>
                    <div className='border-2 w-4/12 bg-teal-800 rounded p-5 text-center'>
                        <img src={recipeImage.image3} alt="" className='m-auto' />
                        <h2 className='text-3xl font-bold'>{recipeName.name3}</h2>
                        <p className='py-5'>Ingredient : {ingredients.ingredient3}</p>
                        <button onClick={notify} className="btn bg-black text-white w-full">Favorite</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Recipe;