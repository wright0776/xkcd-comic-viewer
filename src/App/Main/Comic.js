import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodaysComic,getRandomComic } from '../../redux/comics';
import { addFav, removeFav } from '../../redux/favorites';

class Comic extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
        }
    }
    
    checkPath(pathname) {
        switch (pathname) {
            case '/main/random':
                return this.props.getRandomComic();
            default:
                return this.props.getTodaysComic();
        }
    }
    componentDidMount() {
        this.checkPath(this.props.location.pathname)
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.location.pathname !== this.props.location.pathname){
            this.checkPath(nextProps.location.pathname)
        }
    }

    render() {
        const { data, loading, errMsg } = this.props;
        const { num, title, alt, img, month, day, year } = data
        if (loading) {
            return (
                <div>...loading</div>
            )
        } else {
            if (errMsg) {
                return (
                    <div>{errMsg}</div>
                )
            } else {
                if (this.props.location.pathname === '/main/random') {
                    return (
                        <div className='random'>
                            <h2>Random Comic</h2>
                            <div className='buttons'>
                                <h3 className='comicTitle'>{title}</h3>
                                <button onClick={this.props.getRandomComic} className='newComic'>New</button>
                                <button onClick={()=> this.props.addFav(data)} className='addToFavs'>Add To Favorites</button>
                            </div>
                            <div className='imgContainer'>
                                <img className='comicImg' src={img} alt={alt} title={alt} />                            
                            </div>
                            <p>Date published: {month}/{day}/{year}</p>
                            <p>Comic Number: {num}</p>
                            <button onClick={()=> this.props.addFav(data)} className='addToFavs'>Add To Favorites</button>
                        </div>
                    )
                } else {
                    return (
                        <div className='mostRecent'>
                            <h2>Most Recent Comic:</h2>
                            <h3 className='comicTitle'>{title}</h3>
                            <button onClick={()=> this.props.addFav(data)} className='addToFavs'>Add To Favorites</button>
                            <div className='imgContainer'>
                                <img className='comicImg' src={img} alt={alt} title={alt} />                            
                            </div>
                            <p>Date published: {month}/{day}/{year}</p>
                            <p>Comic Number: {num}</p>
                            <button onClick={()=> this.props.addFav(data)} className='addToFavs'>Add To Favorites</button>
                        </div>
                    )
                }
            }
        }
    }
}

const mapStateToProps = state => {
    return state.comics
}

export default connect(mapStateToProps, { getTodaysComic,getRandomComic,addFav,removeFav })(Comic)