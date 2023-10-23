import { User } from "../models/Index.js";

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
  Mutation: {
    createUserAccount: async (_, { input }) => {
      try {
        await User.create({
          ...input,
        });
        return {
          success: true,
          message: "Account created successfully!",
          user: input,
        };
      } catch (err) {
        console.log(err);
        return {
          success: false,
          message: "Failed to create account!",
        };
      }
    },
  },
};

export default resolvers;
