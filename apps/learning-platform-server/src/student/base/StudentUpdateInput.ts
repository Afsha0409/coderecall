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
import { CertificateUpdateManyWithoutStudentsInput } from "./CertificateUpdateManyWithoutStudentsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { CompletionUpdateManyWithoutStudentsInput } from "./CompletionUpdateManyWithoutStudentsInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class StudentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CertificateUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => CertificateUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => CertificateUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  certificates?: CertificateUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    type: () => CompletionUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => CompletionUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => CompletionUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  completions?: CompletionUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  profilePicture?: InputJsonValue;
}

export { StudentUpdateInput as StudentUpdateInput };
