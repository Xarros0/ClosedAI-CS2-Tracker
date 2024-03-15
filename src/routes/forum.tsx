import React, { useState, useEffect } from 'react';
import MainNavbar from '../components/mainNavbar';
import { useLocation } from 'react-router-dom';
import { doGraphQLFetch } from '../utils/graphql/fetch';
import { postById } from '../utils/graphql/queries';
import { Post } from '../utils/interfaces/Post';
import CreateComment from '../components/CreateComment';

const Forum: React.FC = () => {
    const apiURL = import.meta.env.VITE_API_URL;
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [post, setPost] = useState<Post | null>(null); // State to store the fetched post
    const [loading, setLoading] = useState<boolean>(true); // State to track loading state

    useEffect(() => {
        // Fetch the post by ID when the component mounts
        fetchPostById();
    }, []);

    // Function to fetch the post by ID
    const fetchPostById = async () => {
        try {
            // Send GraphQL query to fetch post by ID
            console.log('Fetching post by ID:', id);
            const response = await doGraphQLFetch(apiURL, postById, { postByIdId: id });
            // Set the fetched post in state
            setPost(response.postById);
            // Update loading state to false
            setLoading(false);
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };

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

    // JSX to render the post and its comments
    return (
        <div style={containerStyle}>
            <MainNavbar />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {post && (
                        <div style={postBoxStyle}>
                            <div style={titleStyle}>{post.title}</div>
                            <div style={userInfoStyle}>{post.author?.username}</div>
                            <div style={contentStyle}>{post.content}</div>
                            <div style={datetimeStyle}>{new Date(Number(post.createdAt)).toLocaleString()}</div>
                        </div>
                    )}
                    {post && post.comments.map((comment, index) => (
                        <div key={index} style={responseBoxStyle}>
                            <div style={titleStyle}>Comment by {comment.author?.username}</div>
                            <div style={contentStyle}>{comment.content}</div>
                            <div style={datetimeStyle}>{new Date(Number(comment.createdAt)).toLocaleString()}</div>
                        </div>
                    ))}
                </>
            )}
            <CreateComment postId={id} />
        </div>
    );
};

export default Forum;
