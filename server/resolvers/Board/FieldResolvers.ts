import { Resolver, FieldResolver, Root } from "type-graphql";
import { Board } from "models/Board";
import { Card } from "models/Card";
import { prisma } from "prisma";

@Resolver(Board)
export class BoardFieldResolver {
  @FieldResolver(() => [Card])
  cards(@Root() { id }: Board) {
    return prisma.board.findOne({ where: { id } }).lists();
  }
}
