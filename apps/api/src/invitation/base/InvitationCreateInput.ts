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
  IsEnum,
  IsOptional,
  IsDate,
  ValidateNested,
  MaxLength,
} from "class-validator";
import { EnumInvitationStatus } from "./EnumInvitationStatus";
import { Type } from "class-transformer";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { OrganizationMemberCreateNestedManyWithoutInvitationsInput } from "./OrganizationMemberCreateNestedManyWithoutInvitationsInput";

@InputType()
class InvitationCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    enum: EnumInvitationStatus,
  })
  @IsEnum(EnumInvitationStatus)
  @IsOptional()
  @Field(() => EnumInvitationStatus, {
    nullable: true,
  })
  status?: "PENDING" | "ACCEPTED" | "REVOKED" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expirationDate?: Date | null;

  @ApiProperty({
    required: true,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @Field(() => OrganizationWhereUniqueInput)
  organization!: OrganizationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  inviter!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  code!: string;

  @ApiProperty({
    required: false,
    type: () => OrganizationMemberCreateNestedManyWithoutInvitationsInput,
  })
  @ValidateNested()
  @Type(() => OrganizationMemberCreateNestedManyWithoutInvitationsInput)
  @IsOptional()
  @Field(() => OrganizationMemberCreateNestedManyWithoutInvitationsInput, {
    nullable: true,
  })
  organizationMembers?: OrganizationMemberCreateNestedManyWithoutInvitationsInput;
}

export { InvitationCreateInput as InvitationCreateInput };
