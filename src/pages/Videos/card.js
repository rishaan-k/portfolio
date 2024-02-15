import './card.css';
import React from 'react';
import { Card, Typography, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';




function VidCard(props) {


    return (
        <div className='Card'>
            <a  target="_blank" className='videolink'>
                <Card className='VideoCard'>
                    <CardContent>
                        <p className='title'>
                            bruh {props.title}
                        </p>
                        <img className='Thumbnail' />

                    </CardContent>
                </Card>
            </a>
        </div>
    )
}

export default VidCard;