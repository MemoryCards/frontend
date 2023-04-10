import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import Navigation from "./nav";

export default (
    function Cards (){

        return (
            <>
                <Navigation></Navigation>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </>

        );

    }
)