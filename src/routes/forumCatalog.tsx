import React, { useState, useEffect } from 'react';
import MainNavbar from '../components/mainNavbar';
import { doGraphQLFetch } from '../utils/graphql/fetch';
import { getPosts } from '../utils/graphql/queries';
import { Filter } from '../utils/interfaces/Filter';
import SortOrder from '../utils/interfaces/SortOrder';
import { Post } from '../utils/interfaces/Post';
import { Link } from 'react-router-dom';

const ForumCatalog: React.FC = () => {
    const apiURL = import.meta.env.VITE_API_URL;
    const [posts, setPosts] = useState<Post[]>([]); // Update to specify the type of posts
    const [filter, setFilter] = useState<Filter>({
        page: 1,
        limit: 10, // Adjust as needed
    });
    const [numberOfPages, setNumberOfPages] = useState<number>(1); // Initialize with 1 page initially

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await doGraphQLFetch(apiURL, getPosts, { filter });
            console.log('Response:', response.getPosts.posts);
            setPosts(response.getPosts.posts);
            setNumberOfPages(response.getPosts.numberOfPages); // Update numberOfPages state
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    
    const handlePageChange = (page: number) => {
        setFilter({ ...filter, page });
    };

    // Rendering the posts
    const renderPosts = () => {
        console.log('Rendering posts:', posts);
        return posts.map((post: Post) => (
            <tr key={post.id}>
                <td style={tdStyle}>
                    <Link to={`/forum?id=${post.id}`} style={linkStyle}>{post.title}</Link>
                </td>
                <td style={tdStyle}>{post.comments.length}</td>
                <td style={tdStyle}>{typeof post.author === 'object' ? post.author.username : 'Unknown'}</td>
                <td style={tdStyle}>{new Date(Number(post.createdAt)).toLocaleString()}</td>
            </tr>
        ));
    };

    // Pagination buttons
    const renderPagination = () => {
        const pageButtons = [];
        for (let i = 1; i <= numberOfPages; i++) {
            pageButtons.push(
                <button key={i} onClick={() => handlePageChange(i)}>
                    {i}
                </button>
            );
        }
        return (
            <div>
                {pageButtons}
            </div>
        );
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
            <MainNavbar onSearch={() => {}} />
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
                    {renderPosts()}
                </tbody>
            </table>
            {renderPagination()}
            <Link to="/createpost">Create New Post</Link>
        </div>
    );
};

export default ForumCatalog;
