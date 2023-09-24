import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { Room } from "@/types/types";
import { getRoomByRefCode } from "@/apis/apis";

export default function PersonCreate({
  room,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [name, setName] = useState<string>("");
  const [contacts, setContacts] = useState<
    { content_type: string; content: string }[]
  >([{ content_type: "email", content: "" }]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleAddContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setContacts([...contacts, { content_type: "email", content: "" }]);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <article>
          <label htmlFor="name">
            <h2>name</h2>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <h2>contacts</h2>
          {contacts.map((contact, index) => (
            <div key={index} className="grid">
              <label htmlFor="content_type">
                <select
                  name="content_type"
                  id="content_type"
                  value={contact.content_type}
                  onChange={(e) => {
                    const newContacts = [...contacts];
                    newContacts[index].content_type = e.target.value;
                    setContacts(newContacts);
                  }}
                  required
                >
                  <option value="email">email</option>
                </select>
              </label>
              <label htmlFor="content">
                <input
                  type="text"
                  id="content"
                  name="content"
                  placeholder="Content"
                  value={contact.content}
                  onChange={(e) => {
                    const newContacts = [...contacts];
                    newContacts[index].content = e.target.value;
                    setContacts(newContacts);
                  }}
                  required
                />
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const newContacts = [...contacts];
                  newContacts.splice(index, 1);
                  setContacts(newContacts);
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <button onClick={handleAddContact}>Add your contacts</button>
        </article>

        <div className="grid">
          <Link href={`/room/${room.ref_code}`} passHref>
            <button>Back</button>
          </Link>
          <button type="submit">Submit</button>
        </div>
      </form>
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
