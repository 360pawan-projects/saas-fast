export enum EmailType {
  SUPPORT = "SUPPORT",
  NEWS_LETTER = "NEWS_LETTER",
  WAITING_LIST = "WAITING_LIST",
}

export type EmailDataType = {
  from: string;
  name: string;
  message: string;
  type: EmailType;
};
