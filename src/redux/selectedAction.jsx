import { DELETE_MUSIC, MUSIC_TO_UPDATE, SELECTED_MUSIC } from "./constant";
export const selectedMusic = (data) =>{
    return{
        type:SELECTED_MUSIC,
        data
    }
}
export const musicTOUpdate = (data) =>{
    return{
        type:MUSIC_TO_UPDATE,
        data
    }
}

export const deleteMusic=(data)=>{
    return{
        type:DELETE_MUSIC,
        data
    }
}

