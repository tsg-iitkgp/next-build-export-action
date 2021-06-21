import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import awardsData from "../public/awardsData.json";
import Card from "../components/contactCard";

const years = ["2019-20", "2018-19", "2017-18", "2016-17", "2015-16"];

export default function Fame() {
  const [currentTab, setCurrentTab] = useState("sports");
  const [currentYear, setCurrentYear] = useState("2019-20");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <Layout>
      <Head>
        <title>Hall of Fame</title>
      </Head>
      <section className="m-content">
        <section className="about" id="about">
          <h2>Our Achievements</h2>
          <p>
            Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in
            IIT Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the
            students, under the guidance and active participation of the faculty and staff members.{" "}
          </p>
          <blockquote>"Yogah Karmasu Kausalam"</blockquote>
          <p>
            The moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in English means "Perfection in
            action is Yoga". Our goal is to bring overall development in IITians through cultivating and nurturing their
            extra-curricular talents.
          </p>
        </section>
      </section>
    </Layout>
  );
}
