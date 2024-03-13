const checkToken = `
query CheckToken {
    checkToken {
      message
      user {
        user_name
      }
    }
  }
`;

const getPosts = `
query GetPosts($filter: Filter) {
    getPosts(filter: $filter) {
      numberOfPages
      posts {
        author {
          email
          id
          username
        }
        comments {
          author {
            id
            email
            username
          }
          content
          createdAt
          id
          postId
        }
        content
        createdAt
        id
        title
      }
    }
  }
`;

const postByID = `
query Query($postByIdId: ID!) {
    postById(id: $postByIdId) {
      author {
        email
        id
        username
      }
      comments {
        author {
          email
          id
          username
        }
        content
        createdAt
        id
        postId
      }
      content
      createdAt
      id
      title
    }
  }
`;

const userById = `
query Query($userByIdId: ID!) {
    userById(id: $userByIdId) {
      id
      username
      email
    }
  }
`;

const users = `
query Query {
    users {
      email
      id
      username
    }
  }
`;

const login = `
mutation Mutation($credentials: Credentials!) {
    login(credentials: $credentials) {
      message
      token
      user {
        email
        id
        username
      }
    }
  }
`;

const register = `
mutation Mutation($user: UserInput!) {
    register(user: $user) {
      message
      user {
        email
        id
        username
      }
    }
  }
`;

const updateUser = `
mutation Mutation($user: UserModify!, $updateUserId: ID) {
    updateUser(user: $user, id: $updateUserId) {
      message
      user {
        email
        id
        username
      }
    }
  }
`;

const deleteUser = `
mutation Mutation($deleteUserId: ID) {
    deleteUser(id: $deleteUserId) {
      message
      user {
        email
        id
        username
      }
    }
  }
`;

const createPost = `
utation Mutation($postContent: writePost!) {
    createPost(postContent: $postContent) {
      message
      response {
        id
        title
        content
        author {
          id
          username
          email
        }
        createdAt
        comments {
          id
          postId
          content
          createdAt
          author {
            email
            id
            username
          }
        }
      }
    }
  }
`;

const deletePost = `
mutation Mutation($deletePostId: ID!) {
    deletePost(id: $deletePostId) {
      message
      response {
        author {
          email
          id
          username
        }
        comments {
          author {
            id
            email
            username
          }
          content
          createdAt
          id
          postId
        }
        createdAt
        content
        id
        title
      }
    }
  }
`;

const createComment = `
mutation Mutation($commentContent: writeComment!) {
    createComment(commentContent: $commentContent) {
      message
      response {
        author {
          email
          id
          username
        }
        content
        createdAt
        id
        postId
      }
    }
  }
`;

const deleteComment = `
mutation Mutation($deleteCommentId: ID!) {
    deleteComment(id: $deleteCommentId) {
      message
      response {
        author {
          email
          id
          username
        }
        content
        createdAt
        id
        postId
      }
    }
  }
`;

export {
    checkToken, 
    getPosts, 
    postByID, 
    userById, 
    users, 
    login, 
    register, 
    updateUser, 
    deleteUser, 
    createPost, 
    deletePost, 
    createComment, 
    deleteComment
};