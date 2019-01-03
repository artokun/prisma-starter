import { QueryResolvers } from '../graphqlgen'

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  search: async (parent, args, ctx) => {
    const result = await ctx.prisma.pokemons({
      where: {
        OR: [
          {
            AND: [{ name_contains: args.query }, { types_some: { name_contains: args.query } }]
          },
          { name_contains: args.query },
          { types_some: { name_contains: args.query } }
        ]
      }
    })
    return result
  }
}
