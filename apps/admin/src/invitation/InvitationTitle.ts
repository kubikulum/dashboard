import { Invitation as TInvitation } from "../api/invitation/Invitation";

export const INVITATION_TITLE_FIELD = "code";

export const InvitationTitle = (record: TInvitation): string => {
  return record.code?.toString() || String(record.id);
};
