import React, { useEffect } from "react";
import s from "./Modal.module.scss";
import ModalForm from "./ModalForm/ModalForm";
import ModalView from "./ModalView/ModalView";
import ModalEdit from "./ModalEdit/ModalEdit";

const Modal = (props) => {
  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  const onKeydown = (e) => {
    switch (e.key) {
      case "Escape":
        props.handleOpenClose();
    }
  };
  let modals = {
    form: ModalForm,
    view: ModalView,
    edit: ModalEdit,
  };

  if (!props.visible) return null;
  return modals[props.modalType](props);
};

export default Modal;
