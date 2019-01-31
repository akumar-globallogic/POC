import { ADD_NAME, DELETE_NAME } from "./types";

export const addNameAction = (name) => ({
    name,
    "type": ADD_NAME
});

export const deleteNameAction = (name) => ({
    name,
    "type": DELETE_NAME
});
