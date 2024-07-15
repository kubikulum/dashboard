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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { UserUpdateManyWithoutOrganizationsInput } from "./UserUpdateManyWithoutOrganizationsInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ClusterUpdateManyWithoutOrganizationsInput } from "./ClusterUpdateManyWithoutOrganizationsInput";
import { InvitationUpdateManyWithoutOrganizationsInput } from "./InvitationUpdateManyWithoutOrganizationsInput";
import { OrganizationMemberUpdateManyWithoutOrganizationsInput } from "./OrganizationMemberUpdateManyWithoutOrganizationsInput";

@InputType()
class OrganizationUpdateInput {
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
  name?: string;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  members?: UserUpdateManyWithoutOrganizationsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  owner?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ClusterUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => ClusterUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => ClusterUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  clusters?: ClusterUpdateManyWithoutOrganizationsInput;

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
  gardenerProjectNamespace?: string | null;

  @ApiProperty({
    required: false,
    type: () => InvitationUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => InvitationUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => InvitationUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  invitations?: InvitationUpdateManyWithoutOrganizationsInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationMemberUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => OrganizationMemberUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => OrganizationMemberUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  organizationMembers?: OrganizationMemberUpdateManyWithoutOrganizationsInput;
}

export { OrganizationUpdateInput as OrganizationUpdateInput };
