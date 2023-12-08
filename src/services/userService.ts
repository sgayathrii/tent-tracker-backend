import prisma from "../prisma";


const UserService = {
  createUser: async (name: string, email: string) => {
    const user = await prisma.user.create({
      data: { name, email },
    });

    return user;
  },

  getUserById: async (userId: number) => {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return user;
  },
};

export default UserService;
