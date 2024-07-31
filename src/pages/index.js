// import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import ThumbProfile from "@/components/ThumbProfile";
import Card from "@/components/cards/Card";
import CardSektor from "@/components/cards/CardSektor";
import KawasanSTP from "@/images/Kawsan-STP-6.png";
import FungsiDanPeran from "@/images/fungsi-dan-peran.png";
import Image from "next/image";
import Mitra from "@/components/Mitra";
import CardLayanan from "@/components/cards/CardLayanan";
import Testimonial from "@/components/Testimonial";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import ImagePeopleManufactur from "@/images/image-manufactur-people.png";
import ImageBannerPeopleManufactur from "@/images/diklat-manufaktur-solotechnopark.png";
import axios from "./api/axios";
import Link from "next/link";
import CardSkeleton from "@/components/cards/CardSkeleton";
import { NextSeo } from "next-seo";
import Aos from "aos";
import dataCluster from "@/data/dataCluster";
import ModalLayanan from "@/components/modal/ModalLayanan";
import { useAppContext } from "@/context/AppContext"; // yang dicopy untuk translate langkah pertama

export async function getServerSideProps() {
  try {
    const eventResponse = await axios.get("event/all?limit=4");
    const beritaResponse = await axios.get("berita/all?limit=4");
    const mitraResponse = await axios.get("mitra");
    const testimoniResponse = await axios.get("testimonial");
    const layananResponse = await axios.get("layanan");

    const events = eventResponse.data.data;
    const berita = beritaResponse.data.data;
    const mitra = mitraResponse.data.data;
    const testimonials = testimoniResponse.data.data;
    const layanan = layananResponse.data.data;

    return {
      props: {
        events,
        berita,
        mitra,
        testimonials,
        layanan,
      },
    };
  } catch (err) {
    console.warn(err);
    return {
      props: {
        events: [],
        berita: [],
        mitra: [],
        testimonials: [],
        layanan: [],
      },
    };
  }
}

export default function Home({ berita, mitra, events, testimonials, layanan }) {
  const clusters = JSON.parse(dataCluster);
  // const services = JSON.parse(dataLayanan);
  const services = layanan;
  const [state, dispatch] = useAppContext(); // yang dicopy untuk tranlate langkah kedua, lanjut nanti state.lang

  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 300,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <NextSeo
        title="Home - Solo Technopark"
        description= {
          state.isLang === 'ID' ? 'Kawasan Inovatif dan Berdaya Saing International. Pusat Inovasi dan Vokasi yang Memadukan Unsur Pengembangan Iptek, Kebutuhan Pasar, Industri dan Bisnis Untuk Penguatan Daya Saing Daerah.' : 'Innovative and Internationally Competitive Region. Innovation and Vocational Center that Combines Elements of Science and Technology Development, Market Needs, Industry and Business to Strengthen Regional Competitiveness.'
        } // ini contoh yang diskripsi yaaaa <3
        canonical="https://solotechnopark.id/"
        openGraph={{
          url: "https://solotechnopark.id/",
          title: "Home - solo technopark",
          description: "Kawasan Inovatif dan Berdaya Saing International.",
          images: [
            {
              url: "/favicon.png",
              width: 800,
              height: 600,
              alt: "Profile Solo Technopark",
            },
          ],
          site_name: "Solo Technopark",
        }}
      />

      <Head>
        <title>Home - Solotechnopark</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="bg-header-1">
        <Navbar />
        <div className="container lg:h-[100vh] grid lg:grid-cols-12 lg:pt-32 pb-20">
          <div className="flex flex-col items-start justify-center order-2 py-5 lg:py-5 lg:col-span-5 lg:order-1">
            <h1 className="head-1" data-aos="fade-right" id="judul1">
              {
                state.isLang === 'ID' ? 'Kawasan Inovatif dan Berdaya Saing Internasional' : 'Innovative and Internationally Competitive Region'
              }
            </h1>
            <p className="paragraph" data-aos="fade-left">
             {
              state.isLang === 'ID' ? 'Pusat Inovasi dan Vokasi yang Memadukan Unsur Pengembangan Iptek, Kebutuhan Pasar, Industri dan Bisnis Untuk Penguatan Daya Saing Daerah.' : 'Innovation and Vocational Center that Combines Elements of Science and Technology Development,                Market, Industry and Business Needs to Strengthen Competitiveness               Area.'
            }
            </p>
            <Link href={"/layanan/pendukung"} target="_blank">
              <Button className="text-white bg-gradient-to-b from-primary-100 to-primary-200 hover:from-primary-200 hover:to-primary-100 hover:opacity-50">
                
                { state.isLang === 'ID' ? 'Layanan Kami' : 'Service us'}
              </Button>
            </Link>
          </div>
          <div className="items-center justify-end order-1 py-5 mt-20 md:flex lg:py-0 lg:col-span-7 lg:order-2 lg:mt-0">
            <ThumbProfile />
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gray-100 bg-header-2 lg:pb-24">
          <div className="container py-20 text-center lg:py-20">
            <h2 className="mx-auto text-center head-2 ">{ state.isLang === 'ID' ? '3 Cluster 9 Sektor' : '3 Clusters 9 Sectors'}</h2>
            <div className="gap-10 mb-20 lg:grid lg:grid-cols-3 lg:mb-56 mt-36">
              {clusters &&
                clusters.map((data, i) => {
                  if ( state.isLang === 'ID') {
                    return (
                      <Card
                        key={i}
                        index={i}
                        className="p-5 bg-white rounded-3xl"
                      >
                        <CardSektor
                          src={data.foto.src}
                          title={data.nama_cluster}
                          desc={JSON.parse(data.divisi)}
                        />
                      </Card>
                    );
                  } else {
                    return (
                      <Card
                        key={i}
                        index={i}
                        className="p-5 bg-white rounded-3xl"
                      >
                        <CardSektor
                          src={data.foto.src}
                          title={data.nama_cluster2}
                          desc={JSON.parse(data.divisi2)}
                        />
                      </Card>
                    );
                  }
                })}
            </div>
          </div>
        </section>

        <section className="">
          <div className="container py-20 text-center lg:py-0">
            <aside className="flex justify-center">
              <div className="absolute w-4/5 -translate-y-32 bg-primary-100 rounded-3xl lg:-translate-y-1/2">
                <div className="flex flex-col items-start justify-end px-2 lg:px-20">
                  <Image
                    className="w-5/6 pt-10"
                    src={KawasanSTP}
                    alt="kawasan STP"
                  />

                  <span className="z-0 mb-10 lg:absolute right-36">
                    <h2
                      className="italic font-normal text-center text-white transform head-3 lg:max-w-sm lg:-translate-y-10"
                      // data-aos="zoom-in"
                    >
                      Where <strong>Competence Innovation, Technology,</strong>{" "}
                      and <strong>Bussines Grow</strong>
                    </h2>
                  </span>
                </div>
              </div>
            </aside>

            {/* mitra */}
            <aside className="pt-56">
              <div className="pt-5 pb-20 lg:pt-40">
                <h2 className="max-w-xl mx-auto mb-20 text-center head-2">
                  {
                      state.isLang === 'ID' ? 'Mitra Kami Dalam Berkolaborasi & Bertumbuh Bersama' : 'Our Partners In Collaborating & Growing Together'
                  }
                </h2>

                <Mitra data={mitra} />
              </div>
            </aside>
          </div>
        </section>

        <section className="lg:mt-32">
          <div className="pb-32 bg-no-repeat bg-cover bg-body-primary-100">
            <div className="container">
              <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
                <Image
                  className="order-2 lg:-translate-y-20 lg:order-1"
                  src={ImagePeopleManufactur}
                  width={650}
                  height={456}
                  alt="manufactur people"
                />
                <h2 className="order-1 mt-20 text-white head-1 lg:order-2 md:mt-0">
                { state.isLang === 'ID' ? 'Layanan Dasar' : 'Basic Service'} <br /> Solo Technopark
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-gray-100">
            <div className="container">
              <div className="p-5 -translate-y-40 bg-white rounded-3xl lg:-translate-y-1/2">
                <div
                  className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 px-4`}
                >
                  {services &&
                    services.map((data, i) => {
                      return (
                        <CardLayanan
                          key={i}
                          id={data.uuid}
                          src={data.image}
                          title={data.nama}
                          desc={data.deskripsi}
                          index={i}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-header-gerigi-1 rounded-t-[3rem] -translate-y-8 py-20 pb-32">
          <div className="container">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
              <div>
                <h2 className="my-5 text-white head-2">{ state.isLang === 'ID' ? 'Fungsi dan Peran' : 'Functions and Roles'}</h2>
                <p className="text-white">
                { state.isLang === 'ID' ? 'Fungsi Sinergi fungsi dan peran' : 'Function Synergy of functions and roles'}<br />
                  <strong>
                  { state.isLang === 'ID' ? 'ABG + C (Akademisi + Bisnis + Goverment, dan Community)' : 'ABG + C (Academics + Business + Government, and Community)'}
                  </strong>{" "}
                  <br />
                  { state.isLang === 'ID' ? 'dalam rangka peningkatan daya saing daerah dan pertumbuhan ekonomi' : 'in order to increase regional competitiveness and economic growth'}
                </p>
              </div>
              <div className="">
                <Image
                  className="rounded-3xl"
                  src={FungsiDanPeran}
                  width={678}
                  height={450}
                  alt="fungsi dan peran"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="h-96 lg:h-[672px] bg-purple-200 rounded-t-[3rem] -translate-y-20 overflow-hidden">
            <Image
              className="object-cover w-full h-full"
              src={ImageBannerPeopleManufactur}
              width={1440}
              height={670}
              alt="manufaktur solotechnopark"
            />
          </div>
          <div className="absolute -translate-y-48">
            <div className="grid items-end grid-cols-2 lg:grid-cols-12">
              <div className="inline-block p-5 bg-secondary-gradient-200 lg:col-span-7">
                <div className="container">
                  <h2 className="italic text-white head-3">
                    &quot;Where Competence, Innovation, Technology, and Business
                    Grow&quot;
                  </h2>
                </div>
              </div>
              <div className="p-10 bg-primary-gradient-x-100 lg:col-span-3 rounded-t-3xl rounded-br-3xl">
                <h2 className="mb-5 text-white head-3">
                { state.isLang === 'ID' ? 'Daftar Diklat yang Kami Sediakan!' : 'List of Trainings We Provide!'}
                </h2>
                <Link href={"/event"}>
                  <Button className="text-white bg-secondary-gradient-200 hover:opacity-50">
                  { state.isLang === 'ID' ? 'Daftar' : 'Join Us'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* testimoni */}
        <section className="pt-10 bg-gray-100">
          <div className="container py-20">
            <div>
              <Testimonial data={testimonials} />
            </div>
          </div>
        </section>

        {/* event and news */}
        <section>
          <div className="container pt-20 pb-10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="capitalize head-4 ">{ state.isLang === 'ID' ? 'wawasan' : 'insight'}</h3>
                <h2 className="capitalize head-3">{ state.isLang === 'ID' ? 'Event Terbaru' : 'New Events'}</h2>
              </div>
              <Link href={"/event"}>
                <Button className="text-white bg-primary-gradient-100 hover:opacity-50 hover:bg-primary-gradient-200">
                { state.isLang === 'ID' ? 'Event Lainnya' : 'More'}
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center lg:items-stretch">
              {events.length > 0 ? (
                events.map((data, i) => (
                  <Event
                    key={i}
                    slug={data.slug}
                    type={"event"}
                    title={data.title}
                    date={data.startDate}
                    image={data.foto}
                  />
                ))
              ) : (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              )}
            </div>
          </div>
          <div className="container pt-10 pb-20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="capitalize head-4 ">{ state.isLang === 'ID' ? 'wawasan' : 'insight'}</h3>
                <h2 className="capitalize head-3">{ state.isLang === 'ID' ? 'Berita Terbaru' : 'New Update'}</h2>
              </div>
              <Link href={"/berita"}>
                <Button className="text-white bg-primary-gradient-100 hover:opacity-50 hover:bg-primary-gradient-200">
                { state.isLang === 'ID' ? 'Berita Lainnya' : 'More'}
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center lg:items-stretch">
              {berita.length > 0 ? (
                berita.map((data, i) => (
                  <Event
                    key={i}
                    type={"berita"}
                    slug={data.slug}
                    title={data.title}
                    date={data.createdAt}
                    image={data.image}
                  />
                ))
              ) : (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              )}
            </div>
          </div>
        </section>
        <ModalLayanan data={layanan} />
      </main>
      <Footer />
    </>
  );
}
