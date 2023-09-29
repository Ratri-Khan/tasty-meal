import React, { useEffect, useState } from 'react';
import ChefInfoCard from '../ChefInfoCard/ChefInfoCard';

const ChefInfo = () => {
    const [chefInfo, setChefInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/chefInfo')
            .then(res => res.json())
            .then(data => setChefInfo(data))
            .catch((err) => console.log(err));
    }, [])
    return (
        <div>
            <h1 className='text-white text-center text-3xl py-5'>OUR CHEFS</h1>
            <div className='w-11/12 m-auto gap-3 grid md:grid-cols-3'>
                {
                    chefInfo.map(info => <ChefInfoCard key={info.id} info={info}></ChefInfoCard>)
                }
            </div>
        </div>
    );
};

export default ChefInfo;