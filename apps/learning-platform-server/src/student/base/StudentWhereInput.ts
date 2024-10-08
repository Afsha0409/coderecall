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
import { CertificateListRelationFilter } from "../../certificate/base/CertificateListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CompletionListRelationFilter } from "../../completion/base/CompletionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

@InputType()
class StudentWhereInput {
  @ApiProperty({
    required: false,
    type: () => CertificateListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CertificateListRelationFilter)
  @IsOptional()
  @Field(() => CertificateListRelationFilter, {
    nullable: true,
  })
  certificates?: CertificateListRelationFilter;

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
  email?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  profilePicture?: JsonFilter;
}

export { StudentWhereInput as StudentWhereInput };
