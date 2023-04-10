import React from 'react';
import {AppBar} from "@mui/material";
function Navigation(){
    return (
        <>
            <AppBar>
                <a href="/cards">Cards</a>
                <a href="/decks">Decks</a>
                <a href="/categories">categories</a>
            </AppBar>
        </>
    )
}
export default Navigation