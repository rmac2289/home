import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as cheerio from "cheerio";
import Cities from "../components/Cities";
import Nav from "../components/Nav";

export default function Home({ dataArray }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Where is home?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav taxes={taxes} />
      <main className={styles.main}>
        <h1 className={styles.title}>Where is home?</h1>

        {/* <Cities dataArray={dataArray} /> */}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  // for (let i = 0; i < data.length; i++) {
  //   // const redfinRes = await fetch(data[i].cityGuideUrl);
  //   // const redfinBody = await redfinRes.text();
  //   // const $ = await cheerio.load(redfinBody);

  //   // let intro = $(".cityIntro").text();
  //   // let image = $(".cityGuideImages > img").attr("src");

  //   // let medianPrice = $(
  //   //   "#livingIn > div > div.cityGuideContent > div.cityGuideParagraph > div:nth-child(5) > span"
  //   // ).text();
  //   // data[i].intro = intro || data[i].intro;
  //   // data[i].image = image || data[i].image;

  //   // data[i].medianHomePrice = medianPrice || data[i].medianPrice;
  // }
  let url =
    process.env.ENVIRONMENT === "dev"
      ? "http://localhost:3000/api/data"
      : "https://gorgeous-meerkat-3dd227.netlify.app/api/data";
  const res = await fetch(url);
  const body = await res.json();
  console.log(body);
  let dataArray = body;
  // Props returned will be passed to the page component
  return { props: { dataArray } };
}
