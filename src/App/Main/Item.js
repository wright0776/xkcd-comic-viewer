import React from 'react'

function Item (props) {
    const { title, img, alt, month, day, year, num, index, removeFav } = props;
    // console.log(props)
    return (
        <div className='item'>
            <h3 className='comicTitle'>{title}</h3>
            <div className='imgContainer itemImgCon'>
                <img className='comicImg' src={img} alt={alt} title={alt} />
            </div>
            <p>Date published: {month}/{day}/{year}</p>
            <p>Comic Number: {num}</p>
            <button onClick={() => {
                    console.log('test')
                    removeFav(index)
                    }
                }>Remove
            </button>
        </div>
    )
}

export default Item;