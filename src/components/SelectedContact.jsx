import { useEffect, useState } from "react";
export default function SelectedContact({ selectedContactId }) {
  const [contact, setContacts] = useState(null);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const dataAPI = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const json = await dataAPI.json();
        setContacts(() => json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contact && (
          <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
