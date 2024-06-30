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
import { EnumClusterClusterType } from "./EnumClusterClusterType";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";

@InputType()
class ClusterWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumClusterClusterType,
  })
  @IsEnum(EnumClusterClusterType)
  @IsOptional()
  @Field(() => EnumClusterClusterType, {
    nullable: true,
  })
  clusterType?: "kubeflow" | "flyte";

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
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organization?: OrganizationWhereUniqueInput;
}

export { ClusterWhereInput as ClusterWhereInput };