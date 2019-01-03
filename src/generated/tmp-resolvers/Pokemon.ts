// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { PokemonResolvers } from '../../graphqlgen'

export const Pokemon: PokemonResolvers.Type = {
  ...PokemonResolvers.defaultResolvers,

  types: (parent, args, ctx) => {
    throw new Error('Resolver not implemented')
  }
}
