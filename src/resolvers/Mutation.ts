import { MutationResolvers } from '../graphqlgen'

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  createPokemonWithTypes: async (parent, args, ctx) => {
    const typeIds = await ctx.prisma.elements({
      where: { name_in: args.types }
    })
    const newTypes = args.types.filter(
      queryType => !typeIds.some(({ name: existingType }) => existingType === queryType)
    )
    return ctx.prisma.upsertPokemon({
      where: {
        name: args.name
      },
      create: {
        name: args.name,
        types: {
          connect: typeIds.map(({ id }) => ({ id })),
          create: newTypes.map(name => ({ name }))
        }
      },
      update: {
        name: args.name,
        types: {
          connect: typeIds.map(({ id }) => ({ id })),
          create: newTypes.map(name => ({ name }))
        }
      }
    })
  },
  deleteManyPokemons: (parent, args, ctx) => {
    return ctx.prisma.deleteManyPokemons()
  },
  deleteManyElements: (parent, args, ctx) => {
    return ctx.prisma.deleteManyElements()
  }
}
