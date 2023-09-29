import React from 'react';
import { Link } from 'react-router-dom';

const ChefInfoCard = ({ info }) => {
    const { image, name, like, recipes, experience,id } = info;
    return (
        <div className="card w-96 bg-teal-900 shadow-xl mx-4">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-white items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='py-0'>Experience : {experience}</p>
                <p className='py-0'>Number Of Recipes : {recipes}</p>
                <p className='py-0 inline'> {like}</p>
                <div className="card-actions">
                    <Link to={`recipeDetails/${id}`}><button className="btn bg-teal-700 hover:bg-black hover:text-white text-white">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefInfoCard;
