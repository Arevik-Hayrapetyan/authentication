import { prisma } from "../../services/Prisma.js";

const { user } = prisma;

export const getUserByEmailDb = async (email) => {
    try {
      const userData = await user.findUnique({
        where: {
          email,
        },
      });
      return {
        data: userData,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error,
      };
    }
  };
