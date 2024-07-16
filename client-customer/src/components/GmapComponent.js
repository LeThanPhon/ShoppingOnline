import React, { Component } from 'react';

class Gmap extends Component {
    render() {
        return (
            <div className='align-center'>
                <h2 className='text-center'>MY LOCATION</h2>
                <iframe title='gmap' src='https://maps.app.goo.gl/FMeEogz8J8qZpa7z5' width="800" height="600" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        );
    }
}
export default Gmap;
