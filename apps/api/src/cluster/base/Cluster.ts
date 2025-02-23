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
import {
  IsString,
  IsDate,
  IsEnum,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumClusterClusterType } from "./EnumClusterClusterType";
import { Organization } from "../../organization/base/Organization";
import { EnumClusterPlan } from "./EnumClusterPlan";

@ObjectType()
class Cluster {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    enum: EnumClusterClusterType,
  })
  @IsEnum(EnumClusterClusterType)
  @Field(() => EnumClusterClusterType, {
    nullable: true,
  })
  clusterType?: "kubeflow" | "Flytes";

  @ApiProperty({
    required: false,
    type: () => Organization,
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organization?: Organization | null;

  @ApiProperty({
    required: false,
    enum: EnumClusterPlan,
  })
  @IsEnum(EnumClusterPlan)
  @IsOptional()
  @Field(() => EnumClusterPlan, {
    nullable: true,
  })
  plan?: "Free" | "Reserved_1" | null;
}

export { Cluster as Cluster };
