import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eggs: [{
        title: "Shoot the Moon",
        poster:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-vice-city/b/b2/EasterEggAndSecrets6.png?width=814",
        description:"When shooting at the moon with the likes of a Sniper Rifle, you'll see it change size in real-time -- just like GTA 3."
    }
     ,
    {
        title: "Apartment 3C - Scarface Easter Egg",
        poster: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-vice-city/3/38/EasterEggs-_1-28_screenshot.png?width=814",
        description : "There's a Scarface easter egg in the form of a bloody bathroom and a chainsaw weapon. Go to the Pay N' Spray at Ocean beach, then go south and take the first left. On your left, you'll see a two-story apartment with two sets of stairs on the second floor."
    }
    ,
    {
        title: "He Sleeps With the Fishes",
        poster: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-vice-city/e/e1/EasterEggAndSecrets8.png?width=814",
        description: "Just slightly northeast of Lasslo's office, you'll find a man beneath the water that has been drowned due to having concreted feet -- this is known as a typical mafia-style killing. While you may be able to catch a glimpse of the body from land, you'll have a much better chance at seeing this Easter Egg when using a boat (or a car with cheats activated)."
    }
    ]
}

const eggs = createSlice({
    name: "easterEggs",
    initialState,
    reducers:{
        setEggs : (state,action)=>{
            state.eggs = [...state.eggs,action.payload];
        }
    }
});

export const {setEggs} = eggs.actions;
export default eggs.reducer; 