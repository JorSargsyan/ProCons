import { GET_GROUP_ID, GET_USER_ID,GET_ITEMS_DATA,UPDATE_ITEMS_DATA,ADD_ITEM,REMOVE_ITEM} from "../actions/types";
import initialState from "../store";

export default function (state = initialState, { type, payload }) {
    switch(type){
        case GET_GROUP_ID : {
            return {
                ...state,
                groupId : payload.groupId,
            }
        } 
        case GET_USER_ID : {
            return {
                ...state,
                userId : payload.userId,
            }
        } 
        case GET_ITEMS_DATA : {
            return {
                ...state,
                items : {
                    itemsList: payload,
                    loading:false,
                }
            }
        } 
        case UPDATE_ITEMS_DATA : {
            return {
                ...state,
                items : {
                    itemsList: payload,
                    loading:false,
                }
            }
        }
        case ADD_ITEM: {
            let type = payload.type;
            if(!state.items.itemsList[type]){
                state.items.itemsList[type] = [];
            }
            return {
                ...state,
                items : {
                    itemsList : {
                        ...state.items.itemsList,
                        [type] : [...state.items.itemsList[type],payload.text]
                    },
                    loading:true,
                }
            }
        }
        case REMOVE_ITEM : {
            let type = payload.type;
            return {
                ...state,
                items : {
                    itemsList : {
                        ...state.items.itemsList,
                        [type] : [...state.items.itemsList[type].filter(i=> i!== payload.text)]
                    },
                    loading:true,
                }
            }
        }
        default:
            return state;
    }
}