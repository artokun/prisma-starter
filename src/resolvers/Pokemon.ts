import { PokemonResolvers } from '../graphqlgen'

export const Pokemon: PokemonResolvers.Type = {
  ...PokemonResolvers.defaultResolvers,

  types: (parent, args, ctx) => {
    return ctx.prisma
      .pokemon({
        id: parent.id
      })
      .types()
  }
}
