import React from 'react';
import MainNavbar from './mainNavbar';

const ForumCatalog: React.FC = () => {
    const foreground: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '94%',
        height: '2759px',
        background: '#A2AEBB',
        border: '1px solid #000000',
        marginTop: '0px',
        marginLeft: '50px',
        marginRight: '50px',
        overflow: 'hidden',
        padding: '20px', // Add padding for better spacing
    };

    const tableStyle: React.CSSProperties = {
        marginTop: '30px', // Add margin to the top of the table
        width: '100%', // Make table fill the container
        borderCollapse: 'collapse', // Collapse borders between cells
    };

    const thStyle: React.CSSProperties = {
        background: '#D9D9D9',
        borderTop: '1px solid #000000',
        borderBottom: '1px solid #000000',
        padding: '10px',
        textAlign: 'left',
    };

    const tdStyle: React.CSSProperties = {
        borderTop: '1px solid #000000',
        borderBottom: '1px solid #000000',
        padding: '10px',
        backgroundColor: '#FFFFFF', // Background color for each row
    };

    const linkStyle: React.CSSProperties = {
        textDecoration: 'none',
        color: '#000', // Set the color of the link
    };

    return (
        <div style={foreground}>
            <MainNavbar />
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Topic</th>
                        <th style={thStyle}>Replies</th>
                        <th style={thStyle}>Author</th>
                        <th style={thStyle}>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={tdStyle}><a href="/forum" style={linkStyle}>Otsikko</a></td>
                        <td style={tdStyle}>1</td>
                        <td style={tdStyle}>user</td>
                        <td style={tdStyle}>1 min ago</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ForumCatalog;
