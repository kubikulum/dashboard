/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InvitationWhereInput } from "./InvitationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InvitationOrderByInput } from "./InvitationOrderByInput";

@ArgsType()
class InvitationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InvitationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InvitationWhereInput, { nullable: true })
  @Type(() => InvitationWhereInput)
  where?: InvitationWhereInput;

  @ApiProperty({
    required: false,
    type: [InvitationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InvitationOrderByInput], { nullable: true })
  @Type(() => InvitationOrderByInput)
  orderBy?: Array<InvitationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InvitationFindManyArgs as InvitationFindManyArgs };