import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import pointsData from "../public/pointsData";

const years = ["2019-20"];

export default function InterIIT() {
  const [currentTab, setCurrentTab] = useState("Sports");
  const [currentYear, setCurrentYear] = useState("2019");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <Layout>
      <Head>
        <title>InterIIT 2019</title>
      </Head>
      <section className="awards content">
        <h2>
          InterIIT {currentYear} {currentTab} Standings
        </h2>
        <div className="tabs">
          <div className={`tab ${currentTab == "Sports" ? "active" : ""}`} onClick={() => handleTabChange("Sports")}>
            Sports &amp; Games
          </div>
          <div
            className={`tab ${currentTab == "Technology" ? "active" : ""}`}
            onClick={() => handleTabChange("Technology")}
          >
            Technology
          </div>
          <div className={`tab ${currentTab == "Socult" ? "active" : ""}`} onClick={() => handleTabChange("Socult")}>
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

        {currentTab == "Sports" && (
          <>
            <h2> Men's Standings</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Sport</th>
                    <th>
                      <span className="medal gold"></span> Gold
                    </th>
                    <th>
                      <span className="medal silver"></span> Silver
                    </th>
                    <th>
                      <span className="medal bronze"></span> Bronze
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pointsData.interIIT[0].map((item) => (
                    <tr id="overall">
                      <td>{item.Sport}</td>
                      <td>{item.Gold} </td>
                      <td>{item.Silver} </td>
                      <td>{item.Bronze} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2> Women's Standings</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Sport</th>
                    <th>
                      <span className="medal gold"></span> Gold
                    </th>
                    <th>
                      <span className="medal silver"></span> Silver
                    </th>
                    <th>
                      <span className="medal bronze"></span> Bronze
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pointsData.interIIT[1].map((item) => (
                    <tr id="overall">
                      <td>{item.Sport}</td>
                      <td>{item.Gold} </td>
                      <td>{item.Silver} </td>
                      <td>{item.Bronze} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        {currentTab == "Socult" && (
          <>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Event Genre</th>
                    <th>
                      <span className="medal gold"></span> Gold
                    </th>
                    <th>
                      <span className="medal silver"></span> Silver
                    </th>
                    <th>
                      <span className="medal bronze"></span> Bronze
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pointsData.interIIT[2].map((item) => (
                    <tr id="overall">
                      <td>{item.Event}</td>
                      <td>{item.Gold} </td>
                      <td>{item.Silver} </td>
                      <td>{item.Bronze} </td>
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
