import React from 'react';

import styled from 'styled-components';

import ListingGrid from './ListingGrid';
import { items } from '../data';

const HomePage = styled.div`
    .browse {
        font-weight: 900;
    }
    .items-container {
        display: flex;
        flex-wrap: wrap;
    }
`;

const Home = (props) => {
    return (
        <HomePage>
            <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
            <p className='browse'>Browse items:</p>
            <div className='items-container'>
                <ListingGrid itemList={items} />
            </div>
        </HomePage>
    );
};

export default Home;