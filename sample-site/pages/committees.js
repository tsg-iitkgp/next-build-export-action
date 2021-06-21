import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import facilitiesData from "../public/facilities";
import ImageModal from "../components/imageModal";
import Card from "../components/societyCard";
import societiesData from "../public/societiesData";
import festData from "../public/festData";

export default function Committees() {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className="m-content">
          <section className="about" id="about">
            <h1>About Us</h1>
            <p>
              Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in
              IIT Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the
              students, under the guidance and active participation of the faculty and staff members.{" "}
            </p>
            <blockquote>"Yogah Karmasu Kausalam"</blockquote>
            <p>
              The moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in English means "Perfection in
              action is Yoga". Our goal is to bring overall development in IITians through cultivating and nurturing
              their extra-curricular talents.
            </p>
          </section>
        </section>
      </Layout>
    </>
  );
}
