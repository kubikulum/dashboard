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
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumClusterClusterType } from "./EnumClusterClusterType";
import { Organization } from "../../organization/base/Organization";
import { EnumClusterPlan } from "./EnumClusterPlan";
import { EnumClusterRegion } from "./EnumClusterRegion";

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
  clusterType?: "Kubeflow" | "Flytes";

  @ApiProperty({
    required: false,
    type: () => Organization,
  })
  @ValidateNested()
  @Type(() => Organization)
  @IsOptional()
  organization?: Organization | null;

  @ApiProperty({
    required: true,
    enum: EnumClusterPlan,
  })
  @IsEnum(EnumClusterPlan)
  @Field(() => EnumClusterPlan, {
    nullable: true,
  })
  plan?: "Free" | "Reserved_1" | "Reserved_2" | "Entreprise";

  @ApiProperty({
    required: true,
    enum: EnumClusterRegion,
  })
  @IsEnum(EnumClusterRegion)
  @Field(() => EnumClusterRegion, {
    nullable: true,
  })
  region?: "EuropeParis_1" | "UsOhio_1";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

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
  gardenerShootId!: string | null;
}

export { Cluster as Cluster };
