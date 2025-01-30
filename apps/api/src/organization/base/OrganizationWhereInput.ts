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
import { ClusterListRelationFilter } from "../../cluster/base/ClusterListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvitationListRelationFilter } from "../../invitation/base/InvitationListRelationFilter";
import { OrganizationMemberListRelationFilter } from "../../organizationMember/base/OrganizationMemberListRelationFilter";

@InputType()
class OrganizationWhereInput {
  @ApiProperty({
    required: false,
    type: () => ClusterListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ClusterListRelationFilter)
  @IsOptional()
  @Field(() => ClusterListRelationFilter, {
    nullable: true,
  })
  clusters?: ClusterListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  gardenerProjectNamespace?: StringNullableFilter;

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
    type: () => InvitationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InvitationListRelationFilter)
  @IsOptional()
  @Field(() => InvitationListRelationFilter, {
    nullable: true,
  })
  invitations?: InvitationListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => OrganizationMemberListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrganizationMemberListRelationFilter)
  @IsOptional()
  @Field(() => OrganizationMemberListRelationFilter, {
    nullable: true,
  })
  organizationMembers?: OrganizationMemberListRelationFilter;
}

export { OrganizationWhereInput as OrganizationWhereInput };
