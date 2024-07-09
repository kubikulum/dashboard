import * as graphql from "@nestjs/graphql";
import { ClusterResolverBase } from "./base/cluster.resolver.base";
import { Cluster } from "./base/Cluster";
import { ClusterService } from "./cluster.service";

@graphql.Resolver(() => Cluster)
export class ClusterResolver extends ClusterResolverBase {
  constructor(protected readonly service: ClusterService) {
    super(service);
  }
}
