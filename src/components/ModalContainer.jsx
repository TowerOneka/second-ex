import React, { useCallback } from "react";
import Modal from "./Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_DATE,
  CHANGE_SINGER,
  CHANGE_SONG,
  EMPTY_INPUT,
  openClose,
} from "../redux/reducers/modalReducer";
import {
  ADD_SINGLE,
  EDIT_SINGLE,
  DELETE_SINGLE,
} from "../redux/reducers/playlistReducer";
import { modalSelector } from "../redux/selectors/selectors";
import {
  modalEditSelector,
  modalViewSelector,
} from "../redux/selectors/selectors";

const ModalContainer = () => {
  const modal = useSelector(modalSelector);
  const ModalEdit = useSelector(modalEditSelector);
  const ModalView = useSelector(modalViewSelector);

  let modals = React.useMemo(
    () => ({
      form: modal,
      view: ModalView[0],
      edit: ModalEdit,
    }),
    [modal, ModalView, ModalEdit]
  );
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
    dispatch(EMPTY_INPUT());
  }, [dispatch]);
  const handleSubmitForm = useCallback(
    (singer, song, date) => {
      dispatch({ type: "ADD_SINGLE", single: { singer, song, date } });
      dispatch(EMPTY_INPUT());
    },
    [dispatch]
  );
  const handleEditForm = useCallback(
    (id, singer, song, date) => {
      dispatch({
        type: "EDIT_SINGLE",
        payload: { id: id, singer: singer, song: song, date: date },
      });
      dispatch(EMPTY_INPUT());
    },
    [dispatch]
  );
  const handleDelete = useCallback(
    (id) => {
      dispatch({ type: "DELETE_SINGLE", payload: id });
      dispatch(EMPTY_INPUT());
    },
    [dispatch]
  );

  return (
    <Modal
      onSubmit={handleSubmitForm}
      onEditForm={handleEditForm}
      onDelete={handleDelete}
      visible={modal.isOpen}
      singer={modals[modal.modalType].singer}
      song={modals[modal.modalType].song}
      date={modals[modal.modalType].date}
      id={modals[modal.modalType].openId}
      handleOpenClose={handleOpenClose}
      handleChangeSinger={handleChangeSinger}
      handleChangeSong={handleChangeSong}
      handleChangeDate={handleChangeDate}
      modalType={modal.modalType}
    />
  );
};

export default ModalContainer;
