import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class List {
  @Field(() => ID) id: string;
}
