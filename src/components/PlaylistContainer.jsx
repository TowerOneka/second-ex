import React, { useCallback } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from "react-redux";
import Playlist from './Playlist/Playlist';
import { ADD_SINGLE } from '../redux/playlistReducer';
import { playlistSelector } from './../redux/selectors';

const PlaylistContainer = () => {
    const playlist = useSelector(playlistSelector);
    const dispatch = useDispatch();

    const handleSubmitForm = useCallback(
        (singer, song, date) =>{
            dispatch(ADD_SINGLE({singer: singer, song: song, date: date}))
        }
    )
    return (
        <div className='container'>
            <Header onSubmit={handleSubmitForm}/>
            <Playlist playlist={playlist}/>
        </div>
    );
}

export default PlaylistContainer;
