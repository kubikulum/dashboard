import { Organization as TOrganization } from "../api/organization/Organization";

export const ORGANIZATION_TITLE_FIELD = "gardenerProjectNamespace";

export const OrganizationTitle = (record: TOrganization): string => {
  return record.gardenerProjectNamespace?.toString() || String(record.id);
};
