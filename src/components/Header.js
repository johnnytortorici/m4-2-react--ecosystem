import React from 'react';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <StoreHeader>
            <div className='logo'>Fruit Emporium</div>
            <nav>
                <Nav exact to ='/' activeClassName='selected'>Home</Nav>
                <Nav to ='/about' activeClassName='selected'>About</Nav>
            </nav>
        </StoreHeader>
    );
};

const StoreHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;

    .logo {
        font-size: 2em;
        font-weight: 900;
    }
`;

const Nav = styled(NavLink)`
    color: #4600E0;
    font-weight: bold;
    margin-left: 40px;
    text-decoration: none;
    
    &.selected {
        color: #c71585;
        border-bottom: 3px solid;
    }
`;

export default Header;