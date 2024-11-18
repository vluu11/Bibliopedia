import { User } from '../models/index.js'; 
import { signToken, AuthenticationError } from '../services/auth.js';

interface Context {
  user?: {
    _id: string;
    username: string;
    email: string;
  };
}

const resolvers = {
  Query: {
    me: async (_: any, __: any, context: Context) => {
      const { user } = context;
      if (!user) throw new AuthenticationError('Not logged in');
      return User.findById(user._id); 
    },
    getUser: async (_: any, { id, username }: { id: string; username: string }) => {
      return User.findOne({ $or: [{ _id: id }, { username }] }); 
    },
  },
  Mutation: {
    addUser: async (
      _: any,
      { username, email, password }: { username: string; email: string; password: string }
    ) => {
      const user = await User.create({ username, email, password }); 
      const token = signToken(username, email, user._id); 
      return { token, user };
    },
    login: async (
      _: any,
      { email, username, password }: { email: string; username: string; password: string }
    ) => {
      const user = await User.findOne({ $or: [{ username }, { email }] }); 
      if (!user) throw new AuthenticationError('User not found');

      const correctPw = await user.isCorrectPassword(password); 
      if (!correctPw) throw new AuthenticationError('Invalid password');

      const token = signToken(user.username, user.email, user._id); 
      return { token, user };
    },
    saveBook: async (_: any, { input }: { input: any }, context: Context) => {
      const { user } = context;
      console.log('User from context:', user); 
    
      if (!user) throw new AuthenticationError('Not logged in');
    
      try {
        const updatedUser = await User.findByIdAndUpdate(
          user._id, 
          { $addToSet: { savedBooks: input } }, 
          { new: true, runValidators: true } 
        );
    
        console.log('Updated User:', updatedUser);
        console.log('User ID from context: ', user._id);
        console.log('User data: ', user); 
    
        if (!updatedUser) throw new Error('User not found');
    
        return updatedUser;
      } catch (err) {
        console.error('Error in saveBook resolver:', err);
        throw new Error('Failed to save the book');
      }
    },
    removeBook: async (_: any, { bookId }: { bookId: string }, context: Context) => {
      const { user } = context;
      if (!user) throw new AuthenticationError('Not logged in');
      return User.findByIdAndUpdate(
        user._id,
        { $pull: { savedBooks: { bookId } } }, 
        { new: true }
      );
    },
  },
};

export default resolvers;
