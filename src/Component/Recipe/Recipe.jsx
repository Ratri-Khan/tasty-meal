import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillHeart } from "react-icons/ai";

const Recipe = ({ recipe }) => {
    const { image, name, description, like, recipes, experience, recipeName, recipeImage, ingredients } = recipe;

    const notify = () => {
        toast("My Favorite")
    }
    return (
        <div className='bg-black'>
            <div className='md:flex lg:flex  bg-teal-200'>
                <img src={image} alt=""className='md:w-5/12 lg:w-5/12' />
                <div className='p-5 mt-5 md:w-7/12 lg:w-7/12'>
                    <p className='text-4xl font-bold m-auto '>{name}</p>
                    <p className='flex items-center'><AiFillHeart />{like}</p>
                    <p className=' m-auto text-xl font-bold'>Number Of Recipes : {recipes}</p>
                    <p className=' m-auto text-xl font-bold'>Experience : {experience} Years</p>
                    <p className=' m-auto text-xl font-bold'> Description : {description}</p>
                </div>
            </div>
            <div className='text-white w-4/5 m-auto py-12'>
                <div className='m-auto md:grid grid-cols-3 lg:grid gap-4'>
                    <div className='border-2  bg-teal-800 rounded p-5 text-center'>
                        <img src={recipeImage.image1} alt="" className='m-auto' />
                        <h2 className='text-3xl font-bold'>{recipeName.name1}</h2>
                        <p className='py-5'><span className='text-xl text-teal-500'>Ingredient :</span>  {ingredients.ingredient1}</p>

                        <button onClick={notify} className="btn bg-black text-white w-full">Favorite</button>
                        <ToastContainer />

                    </div>
                    <div className='border-2 bg-teal-800 rounded p-5 text-center'>
                        <img src={recipeImage.image2} alt="" className='m-auto' />
                        <h2 className='text-3xl font-bold'>{recipeName.name2}</h2>
                        <p className='py-5'><span className='text-xl text-teal-500'>Ingredient :</span>  {ingredients.ingredient2}</p>
                        <button onClick={notify} className="btn bg-black text-white w-full">Favorite</button>
                        <ToastContainer />
                    </div>
                    <div className='border-2  bg-teal-800 rounded p-5 text-center'>
                        <img src={recipeImage.image3} alt="" className='m-auto' />
                        <h2 className='text-3xl font-bold'>{recipeName.name3}</h2>
                        <p className='py-5'><span className='text-xl text-teal-500'>Ingredient :</span> {ingredients.ingredient3}</p>
                        <button onClick={notify} className="btn bg-black text-white w-full">Favorite</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Recipe;