import { prisma } from '../app/generated/prisma-client'

const faker = require('faker');
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function demo(){
  await createUser()
  return
  const authorIds = ['5d02149324aa9a0007a25814','5d02149324aa9a0007a25819']
  const tagConnect = [{
    connect:[
      {
        slug : "test-1",
      },
      {
        slug : "test-3",
      }
    ]
  },
  {
    connect:[
      {
        slug : "test-1",
      },
      {
        slug : "test-2",
      }
    ]
  },
  {
    connect:[
      {
        slug : "test-2",
      },
      {
        slug : "test-3",
      }
    ]
  }]
  const categorys = [{
    connect:
      {
        slug: "cat-1"
      },
  },
  {
    connect:
      {
        slug: "cat-2"
      }
    
  }]
  for (let c = 0; c < 2; c++) {
    let articles = []

    for (let i = 0; i < 2500; i++) {  // 5000,2000,1000,100 for create user and article error
      const title = faker.lorem.words()+ `${i}`  // faker has duplicate title
      await prisma.createArticle({
      // articles.push({
        title:title ,
        slug: faker.helpers.slugify(title) ,
        category: categorys[getRandomInt(0,1)],
        tags : tagConnect[getRandomInt(0,2)],
        author:{
          connect:{
            id: authorIds[getRandomInt(0,1)]
          }
        }
      })
    }
    // await prisma.createUser({
    //   email: faker.internet.email(),
    //   name: faker.fake("{{name.firstName}} {{name.lastName}}"),
    //   articles: {
    //     create: articles
    //   },
    //   password: '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m' // "secret42"
    // })
    
  }
}
demo()
async function createUser(){
  await prisma.createUser({
    email: 'alice1@prisma.io',
    name: 'Alice 1',
    password: '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m', // "secret42"
  })
  await prisma.createUser({
    email: 'alice2@prisma.io',
    name: 'Alice 2',
    password: "$2b$10$LoHpsGV4AYrm8veXdJ7LkeQk8OINGEXggCHiiT598EmSR/LrZGHFa", // 1234
  })
}
