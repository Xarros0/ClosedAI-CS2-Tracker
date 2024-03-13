import React from 'react';
import MainNavbar from '../components/mainNavbar';

const NewsCatalog: React.FC = () => {
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
    };

    const todaysNewsTitle: React.CSSProperties = {
        boxSizing: 'border-box',
        width: '94%',
        background: '#AFAFAF',
        border: '1px solid #000000',
        marginTop: '100px',
        marginLeft: '50px',
        marginRight: '50px',
        overflow: 'hidden',
    };

    const todaysNews: React.CSSProperties = {
        boxSizing: 'border-box',
        width: '94%',
        background: '#D9D9D9',
        border: '1px solid #000000',
        marginLeft: '50px',
        marginRight: '50px',
        overflow: 'hidden',
        top: '180px',
        display: 'flex',
        flexDirection: 'column',
    };

    const newsArticle: React.CSSProperties = {
        backgroundColor: '#D9D9D9',
        display: 'flex',
        alignItems: 'center', // Center items vertically
        padding: '10px', // Add padding for spacing
        width: '100%', // Set a fixed width for each article
    };

    const newsImageContainer: React.CSSProperties = {
        width: '200px', // Fixed width for the image container
        height: '100%', // Set height to 100% to fill the container vertically
        marginRight: '20px',
    };

    const newsImage: React.CSSProperties = {
        float: 'left',
        backgroundColor: '#939393',
        width: '150px', // Ensure the image fills the container
        height: '150px', // Ensure the image fills the container
    };

    const newsTitle: React.CSSProperties = {
        backgroundColor: '#D9D9D9',
        flexGrow: 1, // Allow the title to grow and fill remaining space
        fontSize: '24px', // Adjust font size as needed
        width: '100%', // Ensure the title fills the remaining space
        textDecoration: 'none', // Remove underline from the title
        color: 'black', // Set the color of the title
    };

    const previousNewsContainer: React.CSSProperties = {
        marginTop: '20px', // Add some space between today's news and previous news
        backgroundColor: '#D9D9D9', // Background color for the previous news container
        width: '94%',
        background: '#AFAFAF',
        border: '1px solid #000000',
        marginLeft: '50px',
        marginRight: '50px',
    };

    const previousNewsArticle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between', // Align items to each end of the container
        alignItems: 'center', // Center items vertically
        backgroundColor: '#D9D9D9', // Background color for each previous news article
        borderBottom: '1px solid #000000', // Add a border to separate each article
    };

    const previousNewsTitle: React.CSSProperties = {
        fontSize: '24px', // Adjust font size as needed
        marginRight: 'auto', // Push the title to the left
    };

    const previousNewsDate: React.CSSProperties = {
        fontSize: '24px', // Adjust font size as needed
        marginLeft: 'auto', // Push the date to the right
    };

    return (
        <div style={foreground}>
            <MainNavbar />
            <div style={todaysNewsTitle}>
                <h1 style={{ marginLeft: '20px' }}>Today's news</h1>
            </div>
            <div style={todaysNews}>
                <div style={newsArticle}>
                    <div style={newsImageContainer}>
                        <img src="/asiarmr.webp" alt="News Image" style={newsImage} />
                    </div>
                    <a style={newsTitle} href="/news">
                        <div style={newsTitle}>Live updates from Asia RMR 2024</div>
                    </a>
                </div>
                <div style={newsArticle}>
                    <div style={newsImageContainer}>
                        <img src="https://via.placeholder.com/150" alt="News Image" style={newsImage} />
                    </div>
                    <a style={newsTitle} href="/news">
                    <div style={newsTitle}>News 2 Title</div>
                    </a>    
                </div>
            </div>
            <div style={previousNewsContainer}>
                <h2>Previous News</h2>
                <div style={previousNewsArticle}>
                    <div style={previousNewsTitle}>Previous News 1 Title</div>
                    <div style={previousNewsDate}>March 10, 2024</div>
                </div>
                <div style={previousNewsArticle}>
                    <div style={previousNewsTitle}>Previous News 2 Title</div>
                    <div style={previousNewsDate}>March 9, 2024</div>
                </div>
                <div style={previousNewsArticle}>
                    <div style={previousNewsTitle}>Previous News 3 Title</div>
                    <div style={previousNewsDate}>March 8, 2024</div>
                </div>
                <div style={previousNewsArticle}>
                    <div style={previousNewsTitle}>Previous News 4 Title</div>
                    <div style={previousNewsDate}>March 7, 2024</div>
                </div>
            </div>
        </div>
    );
};

export default NewsCatalog;
