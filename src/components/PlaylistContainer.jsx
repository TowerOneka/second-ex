import React, { useCallback } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from "react-redux";
import Playlist from './Playlist/Playlist';
import { ADD_SINGLE, EDIT_SINGLE, DELETE_SINGLE, CHANGE_FILTER } from '../redux/playlistReducer';
import { filterSearch, searchSelector, playlistSelector } from './../redux/selectors';

const PlaylistContainer = () => {
    let playlist;
    let allPlaylist = useSelector(playlistSelector);
    let searchPlaylist = useSelector(searchSelector)
    let search = useSelector(filterSearch);
    if(search == ""){
        playlist = allPlaylist;
    }
    else{
        playlist = searchPlaylist;
    }

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
    const handleChangeFilter = useCallback(
        (text)=>{
            dispatch(CHANGE_FILTER(text))
        },[dispatch]
    )
    return (
        <div className='container'>
            <Header onSubmit={handleSubmitForm}/>
            <Playlist playlist={playlist} onEditForm={handleEditForm} onDelete={handleDelete} onChangeFilter={handleChangeFilter} search = {search} />
        </div>
    );
}

export default PlaylistContainer;
