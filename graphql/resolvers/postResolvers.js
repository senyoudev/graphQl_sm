import Post from '../../models/Post.js';


// The root provides a resolver function for each API endpoint
const resolvers = {
    Query: {
        async getPosts() {
          try {
            const posts = await Post.find();
            return posts;
          } catch (err) {
            throw new Error(err);
          }
        }
      }

};

export default resolvers