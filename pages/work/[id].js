import React from "react";
import axios from "axios";

import SinglePageBannerSlider from "../../components/page/SinglePageBannerSlider";
import WorkVideo from "../../components/page/WorkVideo";
import ImageSlider from "../../components/page/ImageSlider";
import RelatedProjects from "../../components/page/RelatedProjects";
import Clients from "../../components/page/Clients";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

export default function Work({ singleWorkRes, clients }) {
  console.log("workItems",singleWorkRes);
  return (
    <>
      <Navbar />
      <div className="pt-[2.5rem] md:pt-[5.65rem]">
        <SinglePageBannerSlider data={singleWorkRes.items} />
      </div>
      {singleWorkRes.items.video_url && <WorkVideo data={singleWorkRes.items} />}
      <ImageSlider data={singleWorkRes.items.images} />
      {singleWorkRes.items.related_works && <RelatedProjects data={singleWorkRes.items} />}
      {/* <Clients clients={clients} /> */}
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  // get single news
  const singleWork = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND}${process.env.NEXT_PUBLIC_WORK_ID}/${params.id}`
  );
  
  const singleWorkRes = singleWork.data;
  // // get latest news
  // const news = await axios.get(
  //   `${process.env.NEXT_PUBLIC_BACKEND}${lang}/${process.env.NEXT_PUBLIC_NEWS}?limit=4`
  // );
  // const newsRes = news.data.news;
  return {
    props: {
      singleWorkRes,
    },
    // revalidate: 1
  };
}
// export async function getStaticPaths() {
//   try {
//     const workInfo = await axios.get(
//       `${process.env.NEXT_PUBLIC_BACKEND}${process.env.NEXT_PUBLIC_WORK_ID}/${id}`
//     );
//     const workInfoRes = workInfo.items.data;
//     console.log("aaaa",workInfoRes);

//     const paths = workInfoRes.map((work) => ({
//       params: { id: work.id.toString() },
//     }));
//     return {
//       paths,
//       fallback: false,
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getStaticProps(context) {
//   try {
//     const id = context.params.id;
//     const res = await Promise.all([
//       axios.get(
//         `${process.env.NEXT_PUBLIC_BACKEND}${process.env.NEXT_PUBLIC_WORK_ID}/${id}`
//       ),
//       axios.get(
//         `${process.env.NEXT_PUBLIC_BACKEND}${process.env.NEXT_PUBLIC_CLIENTS_SHOW}`
//       ),
//     ]);

//     const data = res.map((res) => res.data);
//     const workItems = data[1].items.data;
//     const clients = data[2].items;

//     console.log('test',res);
//     return {
//       props: {
//         workItems,
//         clients,
//       },
//       revalidate: 1,
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
