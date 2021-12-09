import * as axios from "axios";

const instanse = axios.create({
  baseURL: "http://localhost:3000",
});

export const myApi = {
  fetch() {
    return instanse.get("/playlist").then((response) => response.data);
  },

  postSingle(single) {
    console.log(single.single);
    let params = {
      singer: single.single.singer,
      song: single.single.song,
      date: single.single.date,
    };
    return instanse.post("/playlist", params).then((res) => {});
  },

  deleteSingle(itemId) {
    return instanse.delete(`/playlist/${itemId}`).then((res) => {});
  },

  getCurrentSingle(itemId) {
    return instanse
      .get(`/playlist/${itemId}`)
      .then((response) => response.data);
  },
  editSingle(single) {
    console.log(single);
    let id = single.id;
    let params = {
      singer: single.singer,
      song: single.song,
      date: single.date,
    };
    return instanse.put(`/playlist/${id}`, params).then((res) => {});
  },
};
