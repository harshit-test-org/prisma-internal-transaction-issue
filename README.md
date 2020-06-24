## Introduction

This repository contains reproduction for https://prisma-company.slack.com/archives/CEYCG2MCN/p1592985426262900


## Steps for reproduction

1. Clone the repository and run `yarn`. Also, set your credentials in `prisma/.env`
2. Run `npx prisma migrate save --experimental && npx prisma migrate up --experimental`
3. Now run `yarn start`, it will work fine
4. But open the database with your favourite GUI or CLI and the `User` table will be empty
