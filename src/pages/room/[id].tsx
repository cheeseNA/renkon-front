import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Room } from "@/types/types";
import { getRoomByRefCode } from "@/apis/apis";

export default function Room({
  room,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>{room.id}</div>;
}

export const getServerSideProps: GetServerSideProps<{
  room: Room;
}> = async (context) => {
  const ref_code = context.params?.id as string;
  const room = await getRoomByRefCode(ref_code);
  return { props: { room: room } };
};
