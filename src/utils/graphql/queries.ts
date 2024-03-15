const checkToken = `
query CheckToken {
  checkToken {
    message
    user {
      email
      id
      username
    }
  }
}
`;

const getEvent = `
query GetEvent($getEventId: ID!) {
  getEvent(id: $getEventId) {
    name
    prizeDistribution {
      otherPrize
      place
      prize
      qualifiesFor
      team
    }
  }
}
`;

const getEventByName = `
query GetEventByName($name: String!) {
  getEventByName(name: $name) {
    name
    id
  }
}
`;
 
const getEvents = `
query GetEvents {
  getEvents {
    dateStart
    dateEnd
    id
    name
  }
}
`;

const getNews = `
query GetNews {
  getNews {
    title
    link
    date
    country {
      name
      code
    }
  }
}
`;

const getPlayer = `
query GetPlayer($getPlayerId: ID!) {
  getPlayer(id: $getPlayerId) {
    age
    country {
      code
      name
    }
    ign
    image
    statistics {
      rating
      killsPerRound
      headshots
      mapsPlayed
      deathsPerRound
      roundsContributed
    }
  }
}
`;

const getPlayerByName = `
query GetPlayerByName($name: String!) {
  getPlayerByName(name: $name) {
    id
    ign
  }
}
`;

const getPlayerRanking = `
query GetPlayerRanking {
  getPlayerRanking {
    player {
      id
      name
    }
    teams {
      id
      name
    }
    maps
    rounds
    kdDiff
    kd
    rating1
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
}
`;

const getStreams = `
query GetStreams {
  getStreams {
    name
    country {
      code
      name
    }
    category
  }
}
`;

const getTeam = `
query GetTeam($getTeamId: ID!) {
  getTeam(id: $getTeamId) {
    country {
      code
      name
    }
    logo
    name
    rank
    rankingDevelopment
  }
}
`;

const getTeamByName = `
query GetTeamByName($name: String!) {
  getTeamByName(name: $name) {
    id
    name
  }
}
`;

const getTeamRanking = `
query GetTeamRanking {
  getTeamRanking {
    team {
      id
      name
    }
    points
    place
  }
}
`;

const postById = `
query PostById($postByIdId: ID!) {
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

const userByID = `
query UserById($userByIdId: ID!) {
  userById(id: $userByIdId) {
    email
    id
    username
  }
}
`;

const users = `
query Users {
  users {
    email
    id
    username
  }
}
`;

const createComment = `
mutation CreateComment($commentContent: writeComment!) {
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

const createPost = `
mutation CreatePost($postContent: writePost!) {
  createPost(postContent: $postContent) {
    message
    response {
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
}
`;

const deleteComment = `
mutation DeleteComment($deleteCommentId: ID!) {
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

const deletePost = `
mutation DeletePost($deletePostId: ID!) {
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
}
`;

const deleteUser = `
mutation DeleteUser($deleteUserId: ID) {
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

const login = `
mutation Login($credentials: Credentials!) {
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
mutation Register($user: UserInput!) {
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
mutation UpdateUser($user: UserModify!, $updateUserId: ID) {
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

export { 
  checkToken,
  getEvent,
  getEventByName,
  getEvents,
  getNews,
  getPlayer,
  getPlayerByName,
  getPlayerRanking,
  getPosts,
  getStreams,
  getTeam,
  getTeamByName,
  getTeamRanking,
  postById,
  userByID,
  users,
  createComment,
  createPost,
  deleteComment,
  deletePost,
  deleteUser,
  login,
  register,
  updateUser,
};
