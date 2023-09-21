import axios from "axios";
import { Room } from "@/types/types";

const BASE_URL = process.env.BACKEND_BASE_URL;
if (!BASE_URL) {
  throw new Error("BACKEND_BASE_URL is not set");
}

export async function getRoomByRefCode(ref_code: string): Promise<Room> {
  const response = await axios.get<Room>(`${BASE_URL}/room/${ref_code}`);
  return response.data;
}