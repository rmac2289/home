import * as cheerio from "cheerio";

export default function Housing() {
  return <div>Housing</div>;
};

//   export async function getStaticProps() {
//     // Instead of fetching your `/api` route you can call the same
//     // function directly in `getStaticProps`
//     let urls = data.urls;
//     let dataArray = [];
//     for (let i = 0; i < urls.length; i++) {
//       const res = await fetch(urls[i]);

//       const body = await res.text();

//       const $ = cheerio.load(body);

//       let intro = $(".cityIntro").text();
//       let image = $(".cityGuideImages > img").attr("src");

//       let urlParseArray = urls[i].split("/");
//       let cityName = urlParseArray[5];
//       let state = urlParseArray[4];
//       let medianPrice = $(
//         "#livingIn > div > div.cityGuideContent > div.cityGuideParagraph > div:nth-child(5) > span"
//       ).text();
//       let obj = {
//         city: cityName,
//         medianHomePrice: medianPrice,
//         cityGuideUrl: urls[i],
//         state: state,
//         intro: intro,
//         image: image,
//         mapUrl:
//       };
//       dataArray.push(obj);
//     }
//     // Props returned will be passed to the page component
//     return { props: { dataArray } };
//   }
