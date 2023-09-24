export enum ContentType {
  GITHUB = "github",
  TWITTER = "twitter",
  FACEBOOK = "facebook",
  INSTAGRAM = "instagram",
  LINKEDIN = "linkedin",
  EMAIL = "email",
  URL = "url",
}

export type Contact = {
  id: string;
  person_id: string;
  content: string;
  content_type: ContentType;
};

export type Person = {
  id: string;
  name: string;
  room_id: string;
  contacts: Contact[];
};

export type Room = {
  id: string;
  ref_code: string;
  created_at: string;
  close_at: string;
  persons: Person[];
};
