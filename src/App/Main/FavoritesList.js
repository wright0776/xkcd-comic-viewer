import React from 'react';
import { connect } from 'react-redux';
import {removeFav} from '../../redux/favorites';
import Item from './Item';

function FavoritesList(props) {
    const favComponents = props.data
    const comps = favComponents.map((item,i) =>
        <Item key={item.num + i}{...item} removeFav={props.removeFav} index={i}/>)
    return (
        <div className='favorites'>
            <h2>Favorites</h2>
            {comps}
        </div>
    )
}

const mapStateToProps = state => {
    return state.favorites
}
// console.log(this)

export default connect(mapStateToProps, {removeFav })(FavoritesList);
