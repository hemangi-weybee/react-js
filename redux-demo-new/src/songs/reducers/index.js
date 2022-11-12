import { combineReducers } from "redux";
import { SONG_SELECTED } from "../actions";

const songReducer = () => {
    return [
        { title: 'Abcd', duration: '3:05' },
        { title: 'Rain Rain Go away', duration: '4:34' },
        { title: 'Twinkle twinkle Little Star', duration: '5:08' },
        { title: 'Baa Baa Black Sheep', duration: '3:45' },
        { title: 'Humpty Dumpty', duration: '2:25' },
        { title: 'Rain Rain Go away', duration: '3:34' },
    ];
};

const selectSongReducer = (selectedSong = null, action) => {
    switch(action.type) {
        case SONG_SELECTED: {
            return action.payload;
        }
        default: {
            return selectedSong;
        }
    };
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectSongReducer,
});