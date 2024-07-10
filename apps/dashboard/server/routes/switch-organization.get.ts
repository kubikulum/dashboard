import { CookieStorage, LogtoRuntimeConfig } from "@logto/nuxt";
import assert from "assert";
export type OrganizationCookie = {
  organization: Organization;
  organizationAccessToken: string;
}
type Organization = {id:string, name:string}

export default defineEventHandler(async (event) => {
  const logtoClient = event.context.logtoClient;
  const logtoUser = event.context.logtoUser
  const cookieName = 'organization'


  const query = getQuery(event)
  const organizationId = query.organizationId
  const redirectUri  = query.redirectUri?.toString()  ||  '/';
  if (!organizationId) {
    console.error('Organization ID is required')
    return;
  }

  const user = logtoUser;
  const organization = user.organization_data.find((org: any) => org.id === organizationId);
  assert(organization, 'Organization not found');

  const organizationAccessToken = await logtoClient.getOrganizationToken(organizationId);
  const cookie = JSON.stringify({ organization, organizationAccessToken });
  setCookie(event, cookieName, cookie );

  sendRedirect(event, redirectUri, 302);


  return;
})
