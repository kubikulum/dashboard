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
  ValidateNested,
  IsOptional,
} from "class-validator";
import { UserCreateNestedManyWithoutOrganizationsInput } from "./UserCreateNestedManyWithoutOrganizationsInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ClusterCreateNestedManyWithoutOrganizationsInput } from "./ClusterCreateNestedManyWithoutOrganizationsInput";
import { InvitationCreateNestedManyWithoutOrganizationsInput } from "./InvitationCreateNestedManyWithoutOrganizationsInput";

@InputType()
class OrganizationCreateInput {
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
    type: () => UserCreateNestedManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutOrganizationsInput, {
    nullable: true,
  })
  members?: UserCreateNestedManyWithoutOrganizationsInput;

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
    type: () => ClusterCreateNestedManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => ClusterCreateNestedManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => ClusterCreateNestedManyWithoutOrganizationsInput, {
    nullable: true,
  })
  clusters?: ClusterCreateNestedManyWithoutOrganizationsInput;

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
    type: () => InvitationCreateNestedManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => InvitationCreateNestedManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => InvitationCreateNestedManyWithoutOrganizationsInput, {
    nullable: true,
  })
  invitations?: InvitationCreateNestedManyWithoutOrganizationsInput;
}

export { OrganizationCreateInput as OrganizationCreateInput };
