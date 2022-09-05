import {createSlice} from "@reduxjs/toolkit"
export const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"Tan Hoang",
        age:"24",
        about:"I'm a software Engineer",
        avaUrl:"https://www.citypng.com/public/uploads/preview/-416033231078je0pamawh.png",
        themeColor: "#01bef1",
        pending: false,
        error: false,
    },
    reducers:{
        updateStart : (state) =>{
            state.pending = true
        },
        updateError : (state) =>{
            state.pending = false; 
            state.error = true;
        },
        updateSuccess : (state, action) => {
            state.pending = false; 
            state.error = false;        
            state.name = action.payload.name
            state.age = action.payload.age
            state.about= action.payload.about
            state.avaUrl = action.payload.avaUrl
            state.themeColor = action.payload.themeColor
        }


        // update:(state,action) =>{
        //     state.name = action.payload.name
        //     state.age = action.payload.age
        //     state.about= action.payload.about
        //     state.avaUrl = action.payload.avaUrl
        //     state.themeColor = action.payload.themeColor
        // },

    }
})
export const {updateStart, updateError,updateSuccess} = userSlice.actions;
export default userSlice.reducer;