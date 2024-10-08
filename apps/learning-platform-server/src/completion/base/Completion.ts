/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Badge } from "../../badge/base/Badge";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Student } from "../../student/base/Student";
import { Task } from "../../task/base/Task";

@ObjectType()
class Completion {
  @ApiProperty({
    required: false,
    type: () => [Badge],
  })
  @ValidateNested()
  @Type(() => Badge)
  @IsOptional()
  badges?: Array<Badge>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  completionDate!: Date | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Student,
  })
  @ValidateNested()
  @Type(() => Student)
  @IsOptional()
  student?: Student | null;

  @ApiProperty({
    required: false,
    type: () => Task,
  })
  @ValidateNested()
  @Type(() => Task)
  @IsOptional()
  task?: Task | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Completion as Completion };
