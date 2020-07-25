import React from 'react';

import { useParams } from'react-router-dom';
import styled from 'styled-components';

import { items, sellers } from '../data';
import BuyButton from './BuyButton';

const ItemDetails = () => {
    const { itemId } = useParams();
    const item = items[itemId];
    const seller = sellers[item.sellerId];

    return (
        <ItemWrapper>
            <ItemImage src={item.imageSrc} alt={item.name} />
            <ItemContent>
                <h1>{item.name}</h1>
                <LatinName>{item.latinName}</LatinName>
                <p>{item.description}</p>
                <Origin>Product of <strong>{item.countryOfOrigin}</strong></Origin>
                <BuyButton item={item} />
                <SellerInfo>
                    <SellerAvatar src={seller.avatarSrc} alt={seller.storeName} />
                    <StoreName>Sold by: <strong>{seller.storeName}</strong></StoreName>
                </SellerInfo>
            </ItemContent>
        </ItemWrapper>
    );
};

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const LatinName = styled.p`
    font-style: italic;
    font-size: 1.2em;
    color: grey;
`;

const Origin = styled.p`
    font-style: italic;
    font-size: 0.8em;
`;

const StoreName = styled.p`
    padding-left: 10px;
`;

const ItemImage = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 20px;
`;

const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    width: 600px;
`;

const SellerInfo = styled.div`
    display: flex;
    align-items: center;
`;

const SellerAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export default ItemDetails;