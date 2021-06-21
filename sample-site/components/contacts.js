import * as Icon from "react-feather";

import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/contactCard";
import contactsData from "../public/contactsData";

export default function Contacts() {
  return (
    <Layout>
      <Head>
        <title>Contacts</title>
      </Head>
      <section className="contact content">
        <h1>Contact Us</h1>
        <p>
          Technology Students' Gymkhana <br /> IIT Kharagpur, Kharagpur <br />
          West Bengal - 721302
        </p>
        <div className="cards">
          {contactsData.data.map((contact) => {
            return (
              <Card
                key={contact.RollNo}
                Name={contact.Name}
                Contact={contact.Contact}
                RollNo={contact.RollNo}
                Post={contact.Post}
                Email={contact.Email}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
