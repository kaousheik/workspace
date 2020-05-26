import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Team {
  @Field(() => ID) id: string;
}
