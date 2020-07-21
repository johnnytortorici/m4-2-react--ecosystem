import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StoreHeader = styled.header`
    font-family: 'Raleway', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 50px;

    .logo {
        font-size: 2em;
        font-weight: 900;
    }

    a {
        text-decoration: none;
        padding-left: 40px;
    }
`;

const Header = (props) => {
    return(
        <StoreHeader>
            <div className='logo'>Fruit Emporium</div>
            <nav>
                <Link to ='/'>Home</Link>
                <Link to ='/about'>About</Link>
            </nav>
        </StoreHeader>
    );
};

export default Header;