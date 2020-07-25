import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemLink = styled(Link)`
    text-decoration: none;
    color: #000;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px 40px;
    margin: 40px 20px 0;
    border-radius: 20px;
    box-shadow: 0px 10px 50px lightgrey;
    
    &:hover {
        box-shadow: 0px 10px 50px silver;
    }

    img {
        position: relative;
        top: -10px;
        width: 150px;
        border-radius: 20px;
    }
    .name {
        font-weight: 900;
        font-size: 1.2em;
    }
    .latin {
        font-style: italic;
        font-size: 0.9em;
    }
`;

const ListingGrid = ({ itemList }) => {
    const items = Object.values(itemList);
    return (
        items.map((item) => {
            return(
                <ItemLink to ={`/items/${item.id}`} key={item.id}>
                    <Item>
                        <img src={item.imageSrc} alt={item.name} />
                        <p className='name'>{item.name}</p>
                        <p className='latin'>{item.latinName}</p>
                    </Item>
                </ItemLink>
            );
        })
    );
};

export default ListingGrid;