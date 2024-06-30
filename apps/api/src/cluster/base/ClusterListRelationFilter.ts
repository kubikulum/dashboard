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
import { ClusterWhereInput } from "./ClusterWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClusterListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ClusterWhereInput,
  })
  @ValidateNested()
  @Type(() => ClusterWhereInput)
  @IsOptional()
  @Field(() => ClusterWhereInput, {
    nullable: true,
  })
  every?: ClusterWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClusterWhereInput,
  })
  @ValidateNested()
  @Type(() => ClusterWhereInput)
  @IsOptional()
  @Field(() => ClusterWhereInput, {
    nullable: true,
  })
  some?: ClusterWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClusterWhereInput,
  })
  @ValidateNested()
  @Type(() => ClusterWhereInput)
  @IsOptional()
  @Field(() => ClusterWhereInput, {
    nullable: true,
  })
  none?: ClusterWhereInput;
}
export { ClusterListRelationFilter as ClusterListRelationFilter };