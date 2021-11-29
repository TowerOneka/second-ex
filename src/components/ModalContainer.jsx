import React, { useCallback } from "react";
import Modal from "./Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_DATE,
  CHANGE_SINGER,
  CHANGE_SONG,
  openClose,
} from "../redux/modalReducer";
import {
  ADD_SINGLE,
  EDIT_SINGLE,
  DELETE_SINGLE,
} from "../redux/playlistReducer";
import { modalSelector } from "../redux/selectors";
import { modalEdit, modalView } from "../redux/selectors";

const ModalContainer = () => {
  const modal = useSelector(modalSelector);
  const playlistEdit = useSelector(modalEdit);
  const playlistView = useSelector(modalView);

  let modalInput = {
    form: modal,
    view: playlistView[Number(modal.openId)],
    edit: playlistEdit[Number(modal.openId)],
  };
  const dispatch = useDispatch();
  let handleChangeSong = useCallback(
    (song) => {
      dispatch(CHANGE_SONG(song));
    },
    [dispatch]
  );
  let handleChangeSinger = useCallback(
    (singer) => {
      dispatch(CHANGE_SINGER(singer));
    },
    [dispatch]
  );
  let handleChangeDate = useCallback(
    (date) => {
      dispatch(CHANGE_DATE(date));
    },
    [dispatch]
  );
  let handleOpenClose = useCallback(() => {
    dispatch(openClose({ type: "form" }));
  }, [dispatch]);
  const handleSubmitForm = useCallback(
    (singer, song, date) => {
      dispatch(ADD_SINGLE({ singer: singer, song: song, date: date }));
    },
    [dispatch]
  );
  const handleEditForm = useCallback(
    (id, singer, song, date) => {
      dispatch(EDIT_SINGLE({ id: id, singer: singer, song: song, date: date }));
    },
    [dispatch]
  );
  const handleDelete = useCallback(
    (id) => {
      dispatch(DELETE_SINGLE(id));
    },
    [dispatch]
  );

  return (
    <div>
      <Modal
        onSubmit={handleSubmitForm}
        onEditForm={handleEditForm}
        onDelete={handleDelete}
        visible={modal.isOpen}
        singer={modalInput[modal.modalType].singer}
        song={modalInput[modal.modalType].song}
        date={modalInput[modal.modalType].date}
        handleOpenClose={handleOpenClose}
        handleChangeSinger={handleChangeSinger}
        handleChangeSong={handleChangeSong}
        handleChangeDate={handleChangeDate}
        modalType={modal.modalType}
      />
    </div>
  );
};

export default ModalContainer;
