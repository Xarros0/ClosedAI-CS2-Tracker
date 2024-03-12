import React from 'react';
import MainNavbar from './mainNavbar';

const Forum: React.FC = () => {
    const foreground: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '94%',
        height: '100%',
        background: '#A2AEBB',
        border: '1px solid #000000',
        marginTop: '0px',
        marginLeft: '50px',
        marginRight: '50px',
        overflow: 'hidden',
        padding: '20px',
    };

    const postBoxStyle: React.CSSProperties = {
        marginTop: '30px', 
        backgroundColor: '#FFFFFF',
        border: '1px solid #000000',
        padding: '20px',
        marginBottom: '20px',
    };

    const responseBoxStyle: React.CSSProperties = {
        backgroundColor: '#FFFFFF',
        border: '1px solid #000000',
        padding: '20px',
        marginTop: '20px',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '20px',
        fontWeight: 'bold',
    };

    const userInfoStyle: React.CSSProperties = {
        marginTop: '10px',
        fontSize: '14px',
        textAlign: 'right',
    };

    const contentStyle: React.CSSProperties = {
        marginTop: '10px',
    };

    const datetimeStyle: React.CSSProperties = {
        fontSize: '12px',
        textAlign: 'right',
        marginTop: '10px',
    };

    // Dummy data for demonstration purposes
    const originalPost = {
        title: 'Original Post Title',
        user: 'Original Poster',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ipsum ac justo semper euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        datetime: 'March 12, 2024 10:30 AM',
    };

    const responses = [
        {
            user: 'Responder 1',
            content: 'Response content 1',
            datetime: 'March 12, 2024 11:00 AM',
        },
        {
            user: 'Responder 2',
            content: 'Response content 2',
            datetime: 'March 12, 2024 11:30 AM',
        },
    ];

    return (
        <div style={foreground}>
            <MainNavbar />
            <div style={postBoxStyle}>
                <div style={titleStyle}>{originalPost.title}</div>
                <div style={userInfoStyle}>{originalPost.user}</div>
                <div style={contentStyle}>{originalPost.content}</div>
                <div style={datetimeStyle}>{originalPost.datetime}</div>
            </div>
            {responses.map((response, index) => (
                <div key={index} style={responseBoxStyle}>
                    <div style={titleStyle}>Response {index + 1}</div>
                    <div style={userInfoStyle}>{response.user}</div>
                    <div style={contentStyle}>{response.content}</div>
                    <div style={datetimeStyle}>{response.datetime}</div>
                </div>
            ))}
        </div>
    );
};

export default Forum;
