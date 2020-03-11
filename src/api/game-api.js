import { root } from "../config/conf";

export const getResult = async game => {
  return await fetch(`${root}/game/result`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  })
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .catch(err => console.log(err));
};
