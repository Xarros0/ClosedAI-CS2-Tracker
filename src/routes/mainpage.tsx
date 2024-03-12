import React from 'react';
import MainNavbar from '../components/mainNavbar';

const mainpage: React.FC = () => {
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
    };

    const streamWindow: React.CSSProperties = {
        width: '80%',
        height: '663px',
        background: '#FFBA08',
        border: '1px solid #000000',
        marginTop: '75px',
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    const streamWindowImage: React.CSSProperties = {
        width: '100%',
        height: '100%',
    };

    const streamCatalog: React.CSSProperties = {
        display: 'flex',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        fontSize: '22px',
    };

    const streamCatalogLink: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        marginLeft: '55px',
        marginTop: '20px',
        marginBottom: '20px',
    };

    const streamCatalogImg: React.CSSProperties = {
        marginRight: '5px',
        width: '30px',
        height: '30px',
    };

    const streamers: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 220px)',
        gap: '10px',
        height: '400px',
        width: '80%',
        background: '#FFBA08',
        border: '1px solid #000000',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        padding: '10px',
        gridAutoRows: '1fr',
    };

    const streamerBox: React.CSSProperties = {
        background: '#A07400',
        color: 'white',
        border: '1px solid #000000',
        width: '200px',
        height: '68px',
        padding: '10px',
        textAlign: 'center',
    };

    const streamerListItem: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
    };

    const streamerFlag: React.CSSProperties = {
        width: '40px',
        height: '30px',
        marginRight: '10px',
    };

    const eventTitle: React.CSSProperties = {
        fontSize: '22px',
        marginTop: '75px',
        display: 'flex',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
    };

    const eventStyle: React.CSSProperties = {
        width: '80%',
        height: '352px',
        background: '#D9D9D9',
        border: '1px solid #000000',
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    const newsTitle: React.CSSProperties = {
        fontSize: '22px',
        marginTop: '75px',
        display: 'flex',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
    };

    const newsStyle: React.CSSProperties = {
        width: '80%',
        height: '551px',
        background: '#D9D9D9',
        border: '1px solid #000000',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
    };
    
    const newsLinkStyle: React.CSSProperties = {
        display: 'block',
        textDecoration: 'none',
        background: '#1C3144',
        fontSize: '26px',
        fontWeight: 'bold',
        color: 'white',
        padding: '10px',
        marginBottom: '5px',
        border: '1px solid #000000',
    };

    const newsLink: React.CSSProperties = {
        color: 'black',
        fontSize: '22px',
        marginTop: '75px',
        display: 'flex',
        width: '15%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
    };

    return (
        <div>
            <MainNavbar />
            <div style={foreground}>
                <div style={streamWindow}>
                    <img
                        style={streamWindowImage}
                        src="./cs2map.jpg"
                        alt="Twitch stream of current event"
                    />
                </div>
                <div>
                    <div style={streamCatalog}>
                        <p>
                            <b>Top Streams</b>
                        </p>
                        <div style={streamCatalogLink}>
                            <a>All</a>
                        </div>
                        <div style={streamCatalogLink}>
                            <img style={streamCatalogImg} src="./microphone.png" alt="Casters" />
                            <a>Casters</a>
                        </div>
                        <div style={streamCatalogLink}>
                            <img style={streamCatalogImg} src="./cs2icon.png" alt="Streamers" />
                            <a>Streamers</a>
                        </div>
                        <div style={streamCatalogLink}>
                            <img style={streamCatalogImg} src="./trophy.jpg" alt="Organizers" />
                            <a>Organizers</a>
                        </div>
                    </div>

                    <div style={streamers}>
                        <div style={streamerBox}>
                            <div style={streamerListItem}>
                                <img style={streamCatalogImg} src="./microphone.png" alt="Casters" />
                                <img style={streamerFlag} src="flag.png" alt="Country Flag" />
                                <span>Streamer 1</span>
                            </div>
                        </div>
                        <div style={streamerBox}>
                            <div style={streamerListItem}>
                                <img style={streamCatalogImg} src="./cs2icon.png" alt="Streamers" />
                                <img style={streamerFlag} src="flag.png" alt="Country Flag" />
                                <span>Streamer 2</span>
                            </div>
                        </div>
                        <div style={streamerBox}>
                            <div style={streamerListItem}>
                                <img style={streamCatalogImg} src="./trophy.jpg" alt="Organizers" />
                                <img style={streamerFlag} src="flag.png" alt="Country Flag" />
                                <span>Streamer 3</span>
                            </div>
                        </div>
                        <div style={streamerBox}>
                            <div style={streamerListItem}>
                                <img style={streamerFlag} src="flag.png" alt="Country Flag" />
                                <span>Streamer 4</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p style={eventTitle}><b>Current event</b></p>
                    <div style={eventStyle}>
                        <img style={streamWindowImage} src="event.jpg" alt="event" />
                    </div>
                </div>
                <div>
                    <p style={newsTitle}><b>Today's News</b></p>
                    <div style={newsStyle}>
                        <a style={newsLinkStyle} href="/news/1">News 1</a>
                        <a style={newsLinkStyle} href="/news/2">News 2</a>
                        <a style={newsLinkStyle} href="/news/3">News 3</a>
                    </div>
                    <a style={newsLink} href="/news">More news</a>
                </div>
            </div>
        </div>
    );
};

export default mainpage;
