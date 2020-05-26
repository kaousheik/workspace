import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Card {
  @Field(() => ID) id: string;
}
