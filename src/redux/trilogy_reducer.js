import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trilogy: [{url:"https://images-na.ssl-images-amazon.com/images/I/41Tsta3MqjL.png"},{url: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/499a3352327833.5608d930ae1e0.jpg"},{url:"https://img.gta5-mods.com/q95/images/san-andreas-intro-video/36ab23-gta_mod_sa_intro_promo.jpg"}],
  }
const MySlice = createSlice({
    name: "trilogy",
    initialState,
    reducers : {
        addItem : (state,action) =>{
            state.trilogy = [...state.trilogy,action.payload]
        }
    }
})

export const {addItem} = MySlice.actions;
export default MySlice.reducer;