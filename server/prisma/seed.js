import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const { user } = prisma;
const { score } = prisma;

const hashPassword = async (password) => {
  const saltRounds = 8;
  const myPlaintextPassword = password;

  const hashedPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);
  return hashedPassword;
};

const seedUser = async () => {
  const hashedPassword = await hashPassword("user1");
  await user.upsert({
    where: { email: "user@user.com" },
    update: {},
    create: {
      firstName: "userName",
      lastName: "userLastName",
      email: "user@user.com",
      password: hashedPassword,
    },
  });
};

// const seedScore = async () => {
//   await score.upsert({
//     where: { },
//     update: {},
//     create: {

//       result: 9,
//       userId:1
//     },
//   });
// };

const seedScore = async () => {
  await score.createMany({
    data: [
      {
        result:9,
        userId: 1,
        }
      ]})}

seedUser().finally(() => {
  console.log("finnaly");
  prisma.$disconnect();
});
seedScore().finally(() => {
  console.log("finnaly score");
  prisma.$disconnect;
});
