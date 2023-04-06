import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData()
    console.log(tShirts)
    return (
        <div>
            <h1>Hello This Is Home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;