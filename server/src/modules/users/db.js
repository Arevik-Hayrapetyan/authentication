import { prisma } from "../../services/Prisma.js";

const { user } = prisma;
const { score } = prisma;

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

export const getUserByIdDb = async (id) => {
  try {
    const users = await user.findUnique({
      where: {
        id: Number(id),
      },
    });
    return {
      data: users,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

export const getUserScore = async (userId) => {
  try {
    const userScore = await score.findMany({
      where: {
        userId: userId,
      },
    });
    return {
      data: userScore,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};
