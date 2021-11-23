import React, { useCallback } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from "react-redux";
import Playlist from './Playlist/Playlist';
import { ADD_SINGLE, EDIT_SINGLE, DELETE_SINGLE } from '../redux/playlistReducer';
import { playlistSelector } from './../redux/selectors';

const PlaylistContainer = () => {
    const playlist = useSelector(playlistSelector);
    const dispatch = useDispatch();

    const handleSubmitForm = useCallback(
        (singer, song, date) =>{
            dispatch(ADD_SINGLE({singer: singer, song: song, date: date}))
        },[dispatch]
    )
    const handleEditForm = useCallback(
        (id, singer, song, date) =>{
            dispatch(EDIT_SINGLE({id:id, singer: singer, song: song, date: date}))
        },[dispatch]
    )
    const handleDelete = useCallback(
        (id)=>{
            dispatch(DELETE_SINGLE(id))
        },[dispatch]
    )
    return (
        <div className='container'>
            <Header onSubmit={handleSubmitForm}/>
            <Playlist playlist={playlist} onEditForm={handleEditForm} onDelete={handleDelete} />
        </div>
    );
}

export default PlaylistContainer;
