import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Room } from "@/types/types";
import { getRoomByRefCode } from "@/apis/apis";
import { QRCodeSVG } from "qrcode.react";

export default function Room({
  room,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // TODO: Head
  return (
    <div className="container">
      <div>
        <div className="grid">
          <QRCodeSVG
            size={250}
            includeMargin={true}
            value={`${process.env.NEXT_URL}/room/${room.ref_code}`}
          />
        </div>
        <div>
          <h2>
            This room&apos;s code is <strong>{room.ref_code}</strong>
          </h2>
        </div>
      </div>
      <div>
        {room.persons.map((person) => (
          <article key={person.id}>
            <h2>{person.name}</h2>
            {person.contacts.map((contact) => (
              <div key={contact.id} className="grid">
                <h4>{contact.content_type}</h4>
                <h3>{contact.content}</h3>
              </div>
            ))}
          </article>
        ))}
      </div>
      <button>Add your contacts</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  room: Room;
}> = async (context) => {
  const ref_code = context.params?.id as string;
  const room = await getRoomByRefCode(ref_code);
  console.log(room);
  return { props: { room: room } };
};
