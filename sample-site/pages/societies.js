import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/societyCard";
import societiesData from "../public/societiesData";
import Router from "next/router";

export default function Societies() {
  return (
    <Layout>
      <Head>
        <title>Societies</title>
      </Head>
      <section className="societies content">
        <h1>Societies &amp; Clubs</h1>

        <h2>Students' Welfare</h2>
        <div className="society-cards">
          {societiesData.data
            .filter((a) => a.category === "Welfare")
            .map((society) => {
              return (
                <Card
                  name={society.name}
                  facebook_link={society.facebook_link}
                  wiki_link={society.wiki_link}
                  shortform={society.shortform}
                  description={society.description}
                  Heads={society.Heads}
                  website={society.website}
                />
              );
            })}
        </div>

        <h2>Social &amp; Cultural Societies</h2>
        <div className="society-cards">
          {societiesData.data
            .filter((a) => a.category === "Socult")
            .map((society) => {
              return (
                <Card
                  name={society.name}
                  facebook_link={society.facebook_link}
                  wiki_link={society.wiki_link}
                  shortform={society.shortform}
                  description={society.description}
                  Heads={society.Heads}
                  website={society.website}
                />
              );
            })}
        </div>

        <h2>Tech Societies</h2>
        <div className="society-cards">
          {societiesData.data
            .filter((a) => a.category === "Tech")
            .map((society) => {
              return (
                <Card
                  name={society.name}
                  facebook_link={society.facebook_link}
                  wiki_link={society.wiki_link}
                  shortform={society.shortform}
                  description={society.description}
                  Heads={society.Heads}
                  website={society.website}
                />
              );
            })}
        </div>

        <h2>Sports &amp; Games Societies</h2>
        <div className="society-cards">
          {societiesData.data
            .filter((a) => a.category === "Sports & Games")
            .map((society) => {
              return (
                <Card
                  name={society.name}
                  facebook_link={society.facebook_link}
                  wiki_link={society.wiki_link}
                  shortform={society.shortform}
                  description={society.description}
                  Heads={society.Heads}
                  website={society.website}
                />
              );
            })}
        </div>
      </section>
    </Layout>
  );
}
