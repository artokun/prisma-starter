import { Resolvers } from '../graphqlgen'

import { Query } from './Query'
import { Pokemon } from './Pokemon'
import { Element } from './Element'
import { Mutation } from './Mutation'

export const resolvers: Resolvers = {
  Query,
  Pokemon,
  Element,
  Mutation
}
