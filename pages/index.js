import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as cheerio from "cheerio";
import { Cities } from "./Cities";

export default function Home({ dataArray }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Where is home?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Where is home?</h1>

        <Cities dataArray={dataArray} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

const data = {
  urls: [
    "https://www.redfin.com/living-in/WA/Lacey/6/9353",
    "https://www.redfin.com/living-in/OR/Salem/6/30778",
    "https://www.redfin.com/living-in/OR/Corvallis/6/4092",
    "https://www.redfin.com/living-in/WA/Olympia/6/13223",
    "https://www.redfin.com/living-in/WA/Spokane/6/17154",
    "https://www.redfin.com/living-in/WA/Auburn/6/29438",
    "https://www.redfin.com/living-in/WA/Vancouver/6/18823",
    "https://www.redfin.com/living-in/WA/Tacoma/6/17887",
    "https://www.redfin.com/living-in/OR/McMinnville/6/11457",
  ],
};
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  let urls = data.urls;
  let dataArray = [];
  for (let i = 0; i < urls.length; i++) {
    const res = await fetch(urls[i]);

    const body = await res.text();

    const $ = cheerio.load(body);

    let intro = $(".cityIntro").text();
    let image = $(".cityGuideImages > img").attr("src");

    let urlParseArray = urls[i].split("/");
    let cityName = urlParseArray[5];
    let state = urlParseArray[4];
    let medianPrice = $(
      "#livingIn > div > div.cityGuideContent > div.cityGuideParagraph > div:nth-child(5) > span"
    ).text();
    let obj = {
      city: cityName,
      medianHomePrice: medianPrice,
      cityGuideUrl: urls[i],
      state: state,
      intro: intro,
      image: image,
    };
    dataArray.push(obj);
  }
  // Props returned will be passed to the page component
  return { props: { dataArray } };
}
