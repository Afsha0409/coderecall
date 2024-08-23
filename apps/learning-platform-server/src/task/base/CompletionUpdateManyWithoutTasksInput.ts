/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CompletionWhereUniqueInput } from "../../completion/base/CompletionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CompletionUpdateManyWithoutTasksInput {
  @Field(() => [CompletionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompletionWhereUniqueInput],
  })
  connect?: Array<CompletionWhereUniqueInput>;

  @Field(() => [CompletionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompletionWhereUniqueInput],
  })
  disconnect?: Array<CompletionWhereUniqueInput>;

  @Field(() => [CompletionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompletionWhereUniqueInput],
  })
  set?: Array<CompletionWhereUniqueInput>;
}

export { CompletionUpdateManyWithoutTasksInput as CompletionUpdateManyWithoutTasksInput };
