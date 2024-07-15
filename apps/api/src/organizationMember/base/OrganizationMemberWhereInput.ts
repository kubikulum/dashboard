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
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { InvitationWhereUniqueInput } from "../../invitation/base/InvitationWhereUniqueInput";
import { EnumOrganizationMemberStatus } from "./EnumOrganizationMemberStatus";

@InputType()
class OrganizationMemberWhereInput {
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
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;

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
    type: () => InvitationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvitationWhereUniqueInput)
  @IsOptional()
  @Field(() => InvitationWhereUniqueInput, {
    nullable: true,
  })
  invitation?: InvitationWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumOrganizationMemberStatus,
  })
  @IsEnum(EnumOrganizationMemberStatus)
  @IsOptional()
  @Field(() => EnumOrganizationMemberStatus, {
    nullable: true,
  })
  status?:
    | "PendingInvitation"
    | "Activated"
    | "Suspended"
    | "InvitationRevoked";
}

export { OrganizationMemberWhereInput as OrganizationMemberWhereInput };
