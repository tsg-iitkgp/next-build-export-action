import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { ResponsiveBar } from "@nivo/bar";
import pointsData from "../public/pointsData";
import Chart from "../components/chart";

const years = ["2018-19"];

export default function Sports() {
  const [currentTab, setCurrentTab] = useState("sports");
  const [currentYear, setCurrentYear] = useState("2018-19");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <Layout>
      <Head>
        <title>GC results</title>
      </Head>
      <section className="points content">
        <h2> Points Tally General Championship {currentYear} </h2>

        <div className="tabs">
          <div className={`tab ${currentTab == "sports" ? "active" : ""}`} onClick={() => handleTabChange("sports")}>
            Sports &amp; Games
          </div>
          {/* <div className={`tab ${currentTab == "tech" ? "active" : ""}`} onClick={() => handleTabChange("tech")}>
            Technology
          </div> */}
          <div className={`tab ${currentTab == "socult" ? "active" : ""}`} onClick={() => handleTabChange("socult")}>
            Socult
          </div>
        </div>

        <select value={currentYear} onChange={(e) => setCurrentYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <div className="chart">
          {currentTab == "sports" ? (
            <Chart
              data={pointsData.sports}
              keys={[
                "badminton",
                "lawnTennis",
                "football",
                "basketball",
                "hockey",
                "bridge",
                "tableTennis",
                "volleyball",
                "weightlifting",
                "sqaush",
                "chess",
                "cricket",
                "athletics",
              ]}
              layout={"vertical"}
            />
          ) : (
            <Chart
              data={pointsData.socult}
              keys={[
                "easternVocals",
                "westernVocals",
                "easternInstrumentals",
                "groups",
                "westernInstrumentals",
                "sketching",
                "cartooning",
                "painting",
                "clayModelling",
                "bengaliElocution",
                "debate",
                "englishElocution",
                "wtgw",
                "quiz",
                "stagePlay",
                "choreography",
                "streetPlay",
              ]}
              layout={"vertical"}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}
