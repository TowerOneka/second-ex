import React, { useEffect, useCallback } from "react";
import ModalForm from "./ModalForm/ModalForm";
import ModalView from "./ModalView/ModalView";
import ModalEdit from "./ModalEdit/ModalEdit";

const Modal = (props) => {
  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  const onKeydown = useCallback((e) => {
    if (props.visible) {
      switch (e.key) {
        case "Escape":
          props.handleOpenClose();
      }
    }
  });
  let modals = {
    form: ModalForm,
    view: ModalView,
    edit: ModalEdit,
  };

  if (!props.visible) return null;
  return modals[props.modalType](props);
};

export default React.memo(Modal);
