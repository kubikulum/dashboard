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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumClusterClusterType } from "./EnumClusterClusterType";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { EnumClusterPlan } from "./EnumClusterPlan";

@InputType()
class ClusterWhereInput {
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
    enum: EnumClusterClusterType,
  })
  @IsEnum(EnumClusterClusterType)
  @IsOptional()
  @Field(() => EnumClusterClusterType, {
    nullable: true,
  })
  clusterType?: "kubeflow" | "Flytes";

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organization?: OrganizationWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumClusterPlan,
  })
  @IsEnum(EnumClusterPlan)
  @IsOptional()
  @Field(() => EnumClusterPlan, {
    nullable: true,
  })
  plan?: "Free" | "Reserved_1";
}

export { ClusterWhereInput as ClusterWhereInput };
