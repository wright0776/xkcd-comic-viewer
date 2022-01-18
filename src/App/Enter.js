import React from 'react';
import {Link} from 'react-router-dom';

function Enter() {
    return (
        <div className='enterCont'>
            <div className='enter'>
                <div className='tv'>
                    <div className='fuzz'>
                        <div className='sheep'>
                        </div>
                    </div>
                </div>
                <div className='enterBottomHalf'>
                    <h2 className='enterTitle'>This is a really cool website...</h2>
                    <h3>Enter at your own risk!</h3>
                    <div className='enterSign'>
                        <Link to='/main'>Enter</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Enter
