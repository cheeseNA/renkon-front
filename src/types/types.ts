export type Contact = {
  id: number;
  person_id: number;
  content: string;
  content_type: string;
};

export type Person = {
  id: number;
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
