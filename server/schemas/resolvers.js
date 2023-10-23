import { Client } from "../models/Index.js";

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
  Mutation: {
    createAppointment: async (_, { input }) => {
      console.log("hi");
      try {
        await Client.create({
          ...input,
        });
        return {
          success: true,
          message: "Appointment created successfully!",
          client: input,
        };
      } catch (err) {
        console.log(err);
        return {
          success: false,
          message: "Appointment failed to create!",
        };
      }
    },
  },
};

export default resolvers;
