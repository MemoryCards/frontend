import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button} from "@mui/material";
const address = 'http://127.0.0.1:8000/api/decks/';

type Deck = {
    id: number;
    name: string;
};

function ApiTest() {
    const [decks, setDecks] = useState<Deck[]>([]);

    useEffect(() => {
        axios.get(address)
            .then(response => {
                setDecks(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {decks.map(deck => (
                <Button key={deck.id}>{deck.name}</Button>
            ))}
        </div>
    );
}

export default ApiTest;
