import { Certificate as TCertificate } from "../api/certificate/Certificate";

export const CERTIFICATE_TITLE_FIELD = "title";

export const CertificateTitle = (record: TCertificate): string => {
  return record.title?.toString() || String(record.id);
};
