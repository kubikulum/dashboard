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
  MaxLength,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { Cluster } from "../../cluster/base/Cluster";
import { Invitation } from "../../invitation/base/Invitation";
import { OrganizationMember } from "../../organizationMember/base/OrganizationMember";

@ObjectType()
class Organization {
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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  members?: Array<User>;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  owner?: User | null;

  @ApiProperty({
    required: false,
    type: () => [Cluster],
  })
  @ValidateNested()
  @Type(() => Cluster)
  @IsOptional()
  clusters?: Array<Cluster>;

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
  gardenerProjectNamespace!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Invitation],
  })
  @ValidateNested()
  @Type(() => Invitation)
  @IsOptional()
  invitations?: Array<Invitation>;

  @ApiProperty({
    required: false,
    type: () => [OrganizationMember],
  })
  @ValidateNested()
  @Type(() => OrganizationMember)
  @IsOptional()
  organizationMembers?: Array<OrganizationMember>;
}

export { Organization as Organization };
