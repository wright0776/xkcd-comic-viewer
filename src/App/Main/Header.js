import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <h1>Welcome to my xkcd Comic Interface</h1>
            <div className='nav'>
                <Link to='/main'>Home</Link>
                <Link to='/main/random'>Random</Link>
                <Link to='/main/favorites'>Favorites</Link>
            </div>
        </div>
    )
}

export default Header
