import axios from "axios";
import { PayloadAction } from '../../node_modules/@reduxjs/toolkit/dist/index.d';

const BASE_URL = import.meta.env.VITE_API_URL;
const apiUrl = `${BASE_URL}/todos`;

//Action type 정의
export const FETCH_TODOS = "FETCH_TODOS";

//TodoList Action 함수
export const fetchALLTodos = () => {
    return(dispatch) => {
        axios.get(apiUrl) //Promise
        .then(res => dispatch({
            type: FETCH_TODOS,
            Payload: res.data
        }))
        .catch(error => {
            console.log(error);
            throw error;
        });
    }
};//fetchALLTodos