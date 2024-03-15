import React, { useState, useEffect } from 'react';
import MainNavbar from '../components/mainNavbar';
import { doGraphQLFetch } from '../utils/graphql/fetch';
import { getEvents } from '../utils/graphql/queries';

interface Event {
    id: string;
    name: string;
    dateStart: string;
    dateEnd: string;
}

const EventsCatalog: React.FC = () => {
    const apiURL = import.meta.env.VITE_API_URL;
    const [events, setEvents] = useState<Event[]>([]);
    const [ongoingEvents, setOngoingEvents] = useState<Event[]>([]);
    const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchEventsData = async () => {
            try {
                const response = await doGraphQLFetch(apiURL, getEvents, {});
                console.log('Response:', response.getEvents);
                const eventData = response.getEvents;
                setEvents(eventData);
            } catch (error) {
                console.error('Error fetching events data:', error);
            }
        };
        fetchEventsData();
    }, []);

    useEffect(() => {
        const now = new Date();
        const ongoing = events.filter(event => {
            const startDate = new Date(parseInt(event.dateStart));
            const endDate = new Date(parseInt(event.dateEnd));
            return startDate <= now && now <= endDate;
        });
        const upcoming = events.filter(event => {
            const startDate = new Date(parseInt(event.dateStart));
            return startDate > now;
        });
    
        setOngoingEvents(ongoing);
        setUpcomingEvents(upcoming);
    }, [events]);

    const containerStyle: React.CSSProperties = {
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

    const eventBox: React.CSSProperties = {
        boxSizing: 'border-box',
        width: '95%',
        height: '350px',
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

    return (
        <div style={containerStyle}>
            <MainNavbar />
            <div>
                <h1 style={titleStyling}>Ongoing events:</h1>
                {ongoingEvents.map((event) => (
                    <div key={event.id} style={eventBox}>
                        <a href={`/events?id=${event.id}`}>
                            <h2 style={eventTitleStyling}>{event.name}</h2>
                        </a>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '0px' }}>
                <h1 style={titleStyling}>Upcoming events:</h1>
                {upcomingEvents.map((event) => (
                    <div key={event.id} style={eventBox}>
                        <a href={`/events?id=${event.id}`}>
                            <h2 style={eventTitleStyling}>{event.name}</h2>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsCatalog;
