import { ObjectType, Field, ID } from "type-graphql";
import { List } from "./List";

@ObjectType()
export class Board {
  @Field(() => ID) id: string;
  @Field(() => [List]) lists: List[];
}
