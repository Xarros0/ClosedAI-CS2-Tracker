import React, { useState } from 'react';
import Cookies from 'js-cookie'; // Import Cookies library
import { doGraphQLFetch } from '../utils/graphql/fetch';
import { createComment } from '../utils/graphql/queries';

const CreateComment: React.FC<{ postId: string }> = ({ postId }) => {
  const apiURL = import.meta.env.VITE_API_URL;
  const [content, setContent] = useState('');

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Make sure content is not empty
    if (content.trim() === '') {
      alert('Please enter content for the comment.');
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

      // Call the doGraphQLFetch function with the createComment mutation query and variables
      const { data } = await doGraphQLFetch(apiURL, createComment, { input: { content, postId } }, authToken);
      
      // Check if the comment was successfully created
      if (data?.createComment?.response) {
        // Clear the content field after successful comment creation
        setContent('');
        // Optionally, you can reload the page or update the comments section after creating a new comment
        // For simplicity, let's just log a message to the console
        console.log('Comment created successfully:', data.createComment.response);
      }
    } catch (error) {
      console.error('Error creating comment:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Create New Comment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea 
            id="content" 
            value={content} 
            onChange={handleContentChange} 
            required 
          />
        </div>
        <button type="submit">Create Comment</button>
      </form>
    </div>
  );
};

export default CreateComment;
