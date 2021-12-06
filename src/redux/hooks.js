import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useCustomSelector = (selector, search) => {
  const selectPlaylist = useMemo(selector, []);

  const playlist = useSelector((state) => {
    selectPlaylist(state, search);
  });
  return playlist;
};
