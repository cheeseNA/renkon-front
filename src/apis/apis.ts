import axios from "axios";
import { Room, Person, Contact, ContentType } from "@/types/types";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
console.log("BASE_URL", BASE_URL);
if (!BASE_URL) {
  throw new Error("BACKEND_BASE_URL is not set");
}

export async function getRoomByRefCode(ref_code: string): Promise<Room> {
  const response = await axios.get<Room>(`${BASE_URL}/room/${ref_code}`);
  return response.data;
}

export async function createPerson(
  room_id: string,
  name: string
): Promise<Person> {
  const response = await axios.post<Person>(`${BASE_URL}/person/create`, {
    name: name,
    room_id: room_id,
  });
  return response.data;
}

export async function createContact(
  person_id: string,
  content_type: ContentType,
  content: string
): Promise<Contact> {
  const response = await axios.post<Contact>(`${BASE_URL}/contact/create`, {
    person_id: person_id,
    content: content,
    content_type: content_type,
  });
  return response.data;
}
