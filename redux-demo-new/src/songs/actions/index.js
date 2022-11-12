export const SONG_SELECTED = 'SONG_SELECTED';

export const selectSong = (song) => {
    //return an action
    return {
        type: SONG_SELECTED,
        payload: song,
    }
};

// export default selectSong;