import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import awardsData from "../public/awardsData.json";
import Card from "../components/contactCard";

const years = ["2019-20", "2018-19", "2017-18", "2016-17", "2015-16"];

export default function Fame() {
  const [currentTab, setCurrentTab] = useState("socult");
  const [currentYear, setCurrentYear] = useState("2019-20");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <Layout>
      <Head>
        <title>Hall of Fame</title>
      </Head>
      <section className="awards content">
        <h2>TSG Awards!</h2>

        <div className="tabs">
          <div className={`tab ${currentTab == "socult" ? "active" : ""}`} onClick={() => handleTabChange("socult")}>
            Social &amp; Cultural
          </div>
          <div className={`tab ${currentTab == "sports" ? "active" : ""}`} onClick={() => handleTabChange("sports")}>
            Sports &amp; Games
          </div>
          <div className={`tab ${currentTab == "tech" ? "active" : ""}`} onClick={() => handleTabChange("tech")}>
            Technology
          </div>
          {Object.keys(awardsData[currentYear]).length === 4 && (
            <div
              className={`tab ${currentTab == "specialRecog" ? "active" : ""}`}
              onClick={() => handleTabChange("specialRecog")}
            >
              Special Recognition
            </div>
          )}
        </div>

        <select value={currentYear} onChange={(e) => setCurrentYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {(awardsData[currentYear][currentTab]["awards"] != undefined || currentTab == "specialRecog") && (
          <>
            <h2> Awards </h2>
            <div className="cards">
              {currentTab != "specialRecog"
                ? awardsData[currentYear][currentTab]["awards"]?.map((winner) => (
                    <Card Name={winner.Name} RollNo="person-placeholder" Path="awards" Post={winner.Award} />
                  ))
                : awardsData[currentYear][currentTab].map((winner) => (
                    <Card Name={winner.Name} RollNo="person-placeholder" Path="awards" Post={winner.Award} />
                  ))}
            </div>
          </>
        )}

        {currentTab != "specialRecog" && (
          <>
            <h2> Honours </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Institute Award</th>
                    {currentTab == "sports" && <th>Game</th>}
                  </tr>
                </thead>
                <tbody>
                  {awardsData[currentYear][currentTab]["honours"].map((winner) => (
                    <tr>
                      <td>{winner.Name}</td>
                      <td>{winner.Roll} </td>
                      <td>{winner.Award}</td>
                      {currentTab == "sports" && <td>{winner.Game}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
}
