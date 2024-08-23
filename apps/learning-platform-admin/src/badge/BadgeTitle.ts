import { Badge as TBadge } from "../api/badge/Badge";

export const BADGE_TITLE_FIELD = "title";

export const BadgeTitle = (record: TBadge): string => {
  return record.title?.toString() || String(record.id);
};
