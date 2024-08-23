/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumTaskCategory } from "./EnumTaskCategory";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { CompletionListRelationFilter } from "../../completion/base/CompletionListRelationFilter";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

@InputType()
class TaskWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumTaskCategory,
  })
  @IsEnum(EnumTaskCategory)
  @IsOptional()
  @Field(() => EnumTaskCategory, {
    nullable: true,
  })
  category?: "Option1";

  @ApiProperty({
    required: false,
    type: () => CompletionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CompletionListRelationFilter)
  @IsOptional()
  @Field(() => CompletionListRelationFilter, {
    nullable: true,
  })
  completions?: CompletionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  points?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}

export { TaskWhereInput as TaskWhereInput };
