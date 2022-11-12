import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

function SongList(props) {
    const renderList = () => {
        return (props.songs.length ?
            props.songs.map(s => {
                return (
                    <div className='song' key={s.title}>
                        <span>{s.title}</span>
                        <button onClick={() => props.selectSong(s)}>Select</button>
                    </div>)
            }) : <p>No data Found</p>)
    };

    return (
        <div className='songList'>
            <h3>Songs...</h3>
            {renderList()}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state)
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);