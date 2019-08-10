import axios from "axios";
import { GET_GROUP_ID, GET_USER_ID,GET_ITEMS_DATA,UPDATE_ITEMS_DATA,ADD_ITEM,REMOVE_ITEM } from "./types";


//Get Group Id  @GET
export const getGroupId = () => {
    return async (dispatch) => {
            const res = await axios.get("/group/jor_sargsyan");

            dispatch({
                type: GET_GROUP_ID,
                payload: res.data
            })
    }
}


//Get User Id @GET
export const getUserId = () => {
    return async (dispatch) => {
        const res = await axios.get("/user/jor_sargsyan");
        dispatch({
            type: GET_USER_ID,
            payload: res.data
        })
    }
}




//Get all Items data @GET
export const getItemsData = (groupId,userId) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/proscons/group/${groupId}/user/${userId}`);
            dispatch({
                type: GET_ITEMS_DATA,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: GET_ITEMS_DATA,
                payload: {cons:[],pros:[]}
            })
        }
      
    }
}

//Add new Item to the store state

export const addItem = (text,type) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_ITEM,
            payload: {
                text,
                type
            }
        })
    }
}

//Remove Item from the store state

export const removeItem = (text,type) => {
    return async (dispatch) => {
        dispatch({
            type: REMOVE_ITEM,
            payload: {
                text,
                type
            }
        })
    }
}



//Update Items Data  @PUT
export const updateItemsData = (groupId,userId,items) => {
    if(!items.cons){
        items.cons = [];
    }
    else if(!items.pros){
        items.pros = [];
    }
    return async (dispatch) => {
        const res = await axios.put(`/proscons/group/${groupId}/user/${userId}`,items);
        dispatch({
            type: UPDATE_ITEMS_DATA,
            payload : res.data
        })
    }
}

