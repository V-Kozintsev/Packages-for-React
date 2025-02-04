//src/index.js
import { deleteHistory } from "./store/weatherSlice";
import { store } from "./store";

document.getElementById("delHistory").addEventListener("click", () => {
  store.dispatch(deleteHistory());
});
