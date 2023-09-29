import React from 'react';

const ChefInfoCard = ({ info }) => {
    const { image, name, like, recipes, experience } = info;
    return (
        <div class="card w-96 bg-teal-900 shadow-xl mx-4">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body text-white items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='py-0'>Experience : {experience}</p>
                <p className='py-0'>Number Of Recipes : {recipes}</p>
                <p className='py-0 inline'> {like}</p>
                <div class="card-actions">
                    <button class="btn bg-teal-700 hover:bg-black hover:text-white text-white">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default ChefInfoCard;
