// CreatePost.tsx
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { doGraphQLFetch } from '../utils/graphql/fetch';
import { createPost } from '../utils/graphql/queries';
import { checkTokenValidity } from '../utils/checkToken';

const CreatePost: React.FC = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
        try {
            const token = await checkTokenValidity();
            console.log('Token:', token.user);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
  }, []);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Make sure title and content are not empty
    if (title.trim() === '' || content.trim() === '') {
      alert('Please enter a title and content for the post.');
      return;
    }

    try {
      // Get the authentication token from the cookie
      const token = Cookies.get('token');
      if (!token) {
        // Handle case where token is not found
        alert('User not authenticated. Please log in.');
        return;
      }

      // Call the doGraphQLFetch function with the createPost mutation query and variables
      const data = await doGraphQLFetch(apiURL, createPost, {postContent: { title: title, content: content }}, token);
      
      // Redirect to the main page after successful post creation
      if (data?.createPost?.response) {
        console.log('Post created successfully:', data);
        window.location.href = `/forum?id=${data.createPost.response.id}`; // Redirect to the new forum post
    }
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
        <div>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={handleTitleChange} 
            required 
          />
        </div>
        <label htmlFor="content">Content:</label>
        <div>
          <textarea 
            id="content" 
            value={content} 
            onChange={handleContentChange} 
            required 
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
