import React from 'react';

import styled from 'styled-components';

const BuyButton = ({ item }) => {

    if (item.quantity > 0) {
        return <PrimaryButton>{`$${item.price} - Buy now`}</PrimaryButton>;
    } else {
        return <PrimaryButton disabled>Out of stock</PrimaryButton>;
    }
};

const PrimaryButton = styled.button`
    box-shadow: 0px 10px 50px lightgrey;
    font-family: 'Raleway', sans-serif;
    background-color: #4600E0;
    border-radius: 10px;
    margin: 20px 0 30px;
    padding: 15px 0;
    font-size: 1.5em;
    width: 300px;
    border: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 10px 50px silver;
    }

    &:disabled {
        background-color: silver;
        cursor: not-allowed;
        box-shadow: none;
    }
`;

export default BuyButton;