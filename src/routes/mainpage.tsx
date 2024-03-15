import React, {useState, useEffect} from 'react';
import MainNavbar from '../components/mainNavbar';
// @ts-expect-error - TS7016: Could not find a declaration file for module 'react-twitch-embed-video'.
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';
import Streamer from '../components/streamer';
import Streams from '../utils/interfaces/Streams';
import { getStreams } from '../utils/graphql/queries';
import { doGraphQLFetch } from '../utils/graphql/fetch';

const MainPage: React.FC = () => {
    
    const foreground: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '94%',
        maxHeight: '98%', // Limit the maximum height to 80% of the viewport height
        overflowY: 'auto', // Enable vertical scrolling
        background: '#A2AEBB',
        border: '1px solid #000000',
        marginTop: '0px',
        marginLeft: '50px',
        marginRight: '50px',
        padding: '20px',
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

    const streamersBox: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 220px)',
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
        overflowY: 'auto',
    };

    const [streamers, setStreamers] = useState<Streams[]>([]);
    const [name, setName] = useState<string>('ESLC');

    useEffect(() => {
        const handleNews = async () => {
            const response = await doGraphQLFetch(import.meta.env.VITE_API_URL, getStreams, {});
            setStreamers(response.getStreams);
        };
        handleNews();
    }, []);

    return (
        <div>
            <MainNavbar />
            <div style={foreground}>
                <div style={streamWindow}>
                   
                    {/* ReactTwitchEmbedVideo component */}
                    <ReactTwitchEmbedVideo channel={name} layout="video" theme="dark" width={1400} height={663} />
                </div>
                <div style={streamCatalog}>
                    <p><b>Top Streams</b></p>
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
                <div style={streamersBox}>
                {streamers && streamers.map((e, i)=><div onClick={()=>setName(e.name)}><Streamer key={i} name={e.name} category={e.category} /></div>)}
                </div>
            </div>
        </div>
    );
};

export default MainPage;

