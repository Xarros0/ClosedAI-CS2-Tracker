import React from 'react';
import Navbar from '../components/mainNavbar';

const news: React.FC = () => {
    const foreground: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: '#A2AEBB',
        border: 'none',
        marginTop: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const imageStyle: React.CSSProperties = {
        width: '70%',
        height: '250px',
        objectFit: 'cover',
        background: '#939393',
        marginBottom: '20px',
    };

    const titleStyle: React.CSSProperties = {
        color: 'black',
        marginLeft: '20px',
        textAlign: 'center',
        fontSize: '40px',
    };

    const contentContainerStyle: React.CSSProperties = {
        width: '90%',
        height: '400px',
        padding: '20px',
        background: '#D9D9D9',
        overflowY: 'auto',
        textAlign: 'left',
    };

    const dateStyle: React.CSSProperties = {
        float: 'right',
    };

    const newsContent: React.CSSProperties = {
        fontSize: '24px',
    };

    return (
        <div>
            <Navbar />
            <div style={foreground}>
                <div style={containerStyle}>
                    <h1 style={titleStyle}>Live updates from Asia RMR 2024</h1>
                    <img style={imageStyle} src="/asiarmr.webp" alt="News image" />
                    <div style={contentContainerStyle}>
                        <h1 style={dateStyle}>Date</h1>
                        <h1>LV coach: "It's dream to come true"</h1>
                        <p style={newsContent}>Yifei "⁠GUM⁠" Dai, speaking to the desk:  "It's a dream come true. Everyone is speechless. Some of our players  have spent six or seven years in CS and never reached the RMR, never  made the Major, never had a sticker. For them this is so unbelievable."</p>
                        <p style={newsContent}>On adapting:  "Teams know how to counter Chinese teams. We like to execute at once,  everyone just standing there throwing their utilities. They were  rotating very fast to counter us. After TheMongolz game we tried to slow  down, I discussed with Westmelon how to calm down and perform how we  should."</p>
                        <p style={newsContent}>On Vertigo:  "It's so hard to practice it in China. TheMongolz don't play it, many Chinese teams don't. Right now we don't have enough experience on the  map."</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default news;
