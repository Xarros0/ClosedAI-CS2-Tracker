import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainNavbar from '../components/mainNavbar';
import { doGraphQLFetch } from '../utils/graphql/fetch';
import { getEvent } from '../utils/graphql/queries';

interface PrizeDistribution {
    otherPrize: string;
    place: string;
    prize: string;
    qualifiesFor: string;
    Team: {id: string, name: string};
}

interface Event {
    name: string;
    prizeDistribution: PrizeDistribution[];
}

const Events: React.FC = () => {
    const apiURL = import.meta.env.VITE_API_URL;
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // State to track loading state

    useEffect(() => {
        fetchEventData();
    }, []);

    const fetchEventData = async () => {
        try {
            console.log('Fetching post by ID:', id);
            const response = await doGraphQLFetch(apiURL, getEvent, { getEventId: id });
            setEvent(response.getEvent);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching event data:', error);
        }
    };

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

    const eventBox: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '95%',
        height: '85%',
        background: '#D9D9D9',
        border: '1px solid #000000',
        marginTop: '0px',
        marginLeft: '50px',
        marginRight: '50px',
        overflow: 'hidden',
    };

    const titleStyling: React.CSSProperties = {
        marginTop: '50px',
        fontWeight: 'bold',
        marginLeft: '10px',
        color: '#000000',
    };

    const eventTitleStyling: React.CSSProperties = {
        fontWeight: 'bold',
        marginLeft: '10px',
        color: '#000000',
        fontSize: '30px',
        textDecoration: 'none',
    };

    const eventWinners: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 330px)',
        gap: '10px',
        height: '600px',
        width: '80%',
        background: '#FFBA08',
        border: '1px solid #000000',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        padding: '10px',
        gridAutoRows: '1fr',
        overflowY: 'auto', // Enable vertical scrolling
    };

    const teamBox: React.CSSProperties = {
        background: '#A07400',
        color: 'white',
        border: '1px solid #000000',
        width: '310px',
        height: '200px',
        padding: '10px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column', // Set flex direction to column
        justifyContent: 'space-between', // Space between the elements
    };

    const teamTextStyle: React.CSSProperties = {
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '40px',
    };

    const placementTextStyle: React.CSSProperties = {
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '40px',
    };

    return (
        <div style={foreground}>
            <MainNavbar onSearch={() => {}} />
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <h1 style={titleStyling}>{event?.name}</h1>
                        <div style={eventBox}>
                            <h2 style={eventTitleStyling}>Prize distribution</h2>
                            <div style={eventWinners}>
                                {event?.prizeDistribution.map((prize, index) => (
                                    <div key={index} style={teamBox}>
                                        <span style={teamTextStyle}>{prize.Team?.name}</span>
                                        <span style={placementTextStyle}>{prize.place}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
};

export default Events;
