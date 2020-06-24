import { PrismaClient } from "@prisma/client";

async function main() {
  const client = new PrismaClient({
    log: ["query"],
  });

  const write1 = client.user.create({
    data: {
      email: "harshit@gmail.com",
      name: "something else",
    },
  });

  const write2 = client.user.create({
    data: {
      email: "someone@hey.com",
      name: "something",
    },
  });

  const result = await client.transaction([write1, write2]);
  console.log(result);

  client.disconnect();
}

main();
