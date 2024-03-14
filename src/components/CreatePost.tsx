// CreatePost.tsx
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { doGraphQLFetch } from '../utils/graphql/fetch';
import { createPost } from '../utils/graphql/queries';

const CreatePost: React.FC = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
      const authToken = Cookies.get('token');
      if (!authToken) {
        // Handle case where token is not found
        alert('User not authenticated. Please log in.');
        return;
      }

      // Call the doGraphQLFetch function with the createPost mutation query and variables
      const { data } = await doGraphQLFetch(apiURL, createPost, { input: { title, content } }, authToken);
      
      // Redirect to the main page after successful post creation
      if (data?.createPost?.response) {
        window.location.href = '/'; // Redirect to the main page
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
        <div>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={handleTitleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
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
