/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClusterWhereInput } from "./ClusterWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ClusterCountArgs {
  @ApiProperty({
    required: false,
    type: () => ClusterWhereInput,
  })
  @Field(() => ClusterWhereInput, { nullable: true })
  @Type(() => ClusterWhereInput)
  where?: ClusterWhereInput;
}

export { ClusterCountArgs as ClusterCountArgs };
