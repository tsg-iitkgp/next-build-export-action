import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/electionCard";
import electionData from "../public/electionsData";

export default function Elections() {
  const [currentTab, setCurrentTab] = useState("vp");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <Layout>
      <Head>
        <title>TSG Elections</title>
      </Head>
      <section className="points content">
        <h2>Technology Students' Gymkhana Elections 2021-2022</h2>

        <div className="tabs">
          <div className={`tab ${currentTab == "vp" ? "active" : ""}`} onClick={() => handleTabChange("vp")}>
            Vice President
          </div>
          <div
            className={`tab ${currentTab == "gsecSports" ? "active" : ""}`}
            onClick={() => handleTabChange("gsecSports")}
          >
            G.Sec Sports &amp; Games
          </div>
          <div
            className={`tab ${currentTab == "gsecSoCult" ? "active" : ""}`}
            onClick={() => handleTabChange("gsecSoCult")}
          >
            G.Sec SoCult
          </div>{" "}
          <div
            className={`tab ${currentTab == "gsecTech" ? "active" : ""}`}
            onClick={() => handleTabChange("gsecTech")}
          >
            G.Sec Tech
          </div>
          <div className={`tab ${currentTab == "gsecSW" ? "active" : ""}`} onClick={() => handleTabChange("gsecSW")}>
            G.Sec Student Welfare
          </div>
          <div className={`tab ${currentTab == "secy" ? "active" : ""}`} onClick={() => handleTabChange("secy")}>
            Secretaries
          </div>
        </div>
        <h2>Candidates</h2>
        <div className="main-content">
          <div className="society-cards">
            <div className="cards">
              {electionData.VPData.map((contact) => {
                return (
                  <Card
                    key={contact.RollNo}
                    Name={contact.Name}
                    Hall={contact.Hall}
                    Description={contact.Description}
                    RollNo={contact.RollNo}
                    Email={contact.Email}
                    Proposal={contact.Proposal}
                    ProposalLink={contact.ProposalLink}
                    FacebookLink={contact.FacebookLink}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
