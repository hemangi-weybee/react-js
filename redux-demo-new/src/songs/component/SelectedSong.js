import React from 'react'
import { connect } from 'react-redux';

function SelectedSong(props) {
    return (
        <div>
            <h3>Song Detail</h3>
            {
                props.song ?
                    (<div>
                        <div>
                            <span> <b> Title : </b></span>
                            <p> {props.song.title} </p>
                        </div>
                        <div>
                            <span><b>Duration : </b></span>
                            <p> {props.song.duration} </p>
                        </div>
                    </div>) : (<p> Select a song</p>)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SelectedSong);