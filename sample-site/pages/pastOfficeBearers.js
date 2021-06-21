import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import senateData from "../public/senateData.json";

const posts = [
  "President",
  "Hony. Treasurer",
  "Vice President",
  "G.Sec Sports & Games",
  "G.Sec Social & Cultural",
  "G.Sec Technology",
  "G.Sec Student Welfare",
  "Public Relations Chairperson",
  "TSG Editors",
  "Technology Coordinator",
  "Undergraduate Representative",
  "Postgraduate Representative",
  "Research Scholar Representative",
  "Women Representative",
];

export default function Sports() {
  const [currentPost, setCurrentPost] = useState("President");

  return (
    <Layout>
      <Head>
        <title>Past Office Bearers</title>
      </Head>
      <section className="awards content">
        <h2> Past Office Bearers</h2>

        <select value={currentPost} onChange={(e) => setCurrentPost(e.target.value)}>
          {posts.map((post) => (
            <option key={post} value={post}>
              {post}
            </option>
          ))}
        </select>

        {/* Now render based on the value of the currentYear */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Tenure</th>
                {currentPost.includes("G.Sec") || currentPost.includes("Editors") ? (
                  <>
                    <th>Name</th>
                    <th>Name</th>
                  </>
                ) : (
                  <th>Name</th>
                )}
              </tr>
            </thead>
            <tbody>
              {senateData[currentPost].map((item) => (
                <tr>
                  <td>{item.year}</td>
                  {currentPost.includes("G.Sec") || currentPost.includes("Editors") ? (
                    <>
                      <td>{item.name[0]}</td> <td>{item.name[1]}</td>
                    </>
                  ) : (
                    <td>{item.name}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
