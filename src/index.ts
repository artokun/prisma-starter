import { prisma } from './generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: resolvers as any,
  context: {
    prisma
  }
})
server.start(() => console.log('Server is running on http://localhost:4000'))
