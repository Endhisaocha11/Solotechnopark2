// import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
import Button from "@/components/Button";
import Link from "next/link";
import MitraSingle from "@/components/swiper/MitraSingle";
import dataTeknologi from "../../data/layanan/dataTeknologi.json";
import IconManufacture from "@/images/layanan/Manufacture.png";
import IconScience from "@/images/layanan/Science.png";
import IconCyber from "@/images/layanan/Cyber.png";
import IconGame from "@/images/layanan/Game.png";
import Faq from "react-faq-component";
import ImageHead1 from "@/images/layanan/teknologi/pendukung-image-1.jpg";
import ImageHead2 from "@/images/layanan/teknologi/pendukung-image-2.jpg";
import ImageBody1 from "@/images/layanan/teknologi/pendukung-2-image-1.webp";
import ImageBody2 from "@/images/layanan/teknologi/solo-technopark-layanan-pendukung-6-700x450.jpg.webp";
import ImageBody3 from "@/images/layanan/teknologi/solo-technopark-layanan-pendukung-7-700x450.jpg.webp";
import ImageBody4 from "@/images/layanan/teknologi/solo-technopark-layanan-pendukung-9-700x450.jpg.webp";

// Import modul atau dependensi yang dibutuhkan
import Card from "@/components/cards/Card";
import Image from "next/image";
import CardSkeleton from "@/components/cards/CardSkeleton";
import Event from "@/components/Event";
import axios from "../api/axios";
import { useAppContext } from "@/context/AppContext";

const data = {
  rows: [
    {
      title: "Apa Syarat Untuk Dapat Mengikuti Diklat?",
      content:
        "Usia Maksimal 24 tahun. Tidak buta warna. Bukan penderita ayan/epilepsi.",
    },
    {
      title: "Bagaimana Sistem Pendidikan Diklat Solotechnopark?",
      content:
        "<p>Pendidikan pelatihan menggunakan sistem evaluasi dalam setiap tahap. Ada 3 tahapan yang harus di lalui peserta.</p>    <p>Tahap 1 merupakan pendidikan dasar teknik (Basic Mechanic).  Tahap 2 merupakan tahap lanjutan (Application Mechanic).  Tahap 3 merupakan tahap akhir. Peserta yang berhasil lulus berhak mendapatkan  Sertifikat Keahlian yang dikeluarkan oleh Solotechnopark.</p>",
    },
    {
      title: "Apakah Diklat ini hanya untuk warga Surakarta saja?",
      content:
        "Pada prinsipnya Diklat terbuka untuk umum baik dari wilayan Surakarta maupun dari seluruh wilayah di Indonesia. Namun untuk perserta di luar wilayah Surakarta harus ada surat rekomendasi/kerjasama dari Department atau Instansi terkait dari daerahnya (Contoh : Bappeda, dsb)",
    },
    {
      title: "Berapa biaya untuk mengikuti Diklat ?",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
    },
  ],
};

export default function LayananTeknologi({ mitra, berita }) {
  const [state, dispatch] = useAppContext();
  console.log(mitra, berita);
  return (
    <>
      <NextSeo
        title="Pengembangan Teknologi - Solo Technopark"
        description="Sebagai Unit Pelaksana Teknis Daerah (UPTD) pada BALITBANGDA Kota Surakarta, berdasarkan Peraturan Walikota No. 15 Tahun 2022. Menerapkan Pola Tata Kelola Badan Layanan Umum Daerah (BLUD) berdasarkan Perwali Surakarta No. 38 Tahun 2022."
        canonical="https://solotechnopark.id/"
        openGraph={{
          url: "https://solotechnopark.id/",
          title: "profil - solo technopark",
          description: "Kawasan Inovatif dan Berdaya Saing International.",
          images: [
            {
              url: "/favicon.png",
              width: 800,
              height: 600,
              alt: "Pengembangan Teknologi Solo Technopark",
            },
          ],
          site_name: "Pengembangan Teknologi - solotechnopark",
        }}
      />

      <Head>
        <title>Pengembangan Teknologi - solotechnopark.go.id</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://solotechnopark.id/wp-content/uploads/2021/09/Solo-Tecno.png"
        />
      </Head>
      <Navbar />

      <main className="mt-20">
        <section className="bg-flower-1">
          <div className="container">
            <div className="h-[90vh] flex flex-col justify-center">
              <h1 className="head-1 mb-5 max-w-3xl text-white">
              {
                state.isLang === 'ID' ? 'Layanan Pengembangan Teknologi di Kawasan Sains dan Teknologi Solo Technopark' : 'Technology Development Services in the Solo Technopark Science and Technology Area'
              }
              </h1>
              <Link href={"/kontak"}>
                <Button className="bg-blue-600 text-white hover:opacity-50 hover:bg-primary-gradient-200">
                { state.isLang === 'ID' ? 'Hubungi Kami' : 'Contact Us'}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="container py-5">
            <MitraSingle data={mitra} index={1} />
          </div>
        </section>

        <section className="">
          <div className="container py-20">
            <h2 className="head-2 my-10 text-center max-w-3xl mx-auto">
            { state.isLang === 'ID' ? 'Layanan Pengembangan Teknologi Kami' : 'Our Technology Development Services'}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0">
              {dataTeknologi &&
                dataTeknologi.map((data, i) => (
                  <Card
                    key={i}
                    className={
                      "bg-gray-100 p-8 flex items-start gap-10 lg:mx-5"
                    }
                  >
                    {i === 0 && (
                      <Image
                        src={IconManufacture}
                        width={140}
                        height={140}
                        alt="icon"
                      />
                    )}
                    {i === 1 && (
                      <Image
                        src={IconScience}
                        width={140}
                        height={140}
                        alt="icon"
                      />
                    )}
                    {i === 2 && (
                      <Image
                        src={IconCyber}
                        width={140}
                        height={140}
                        alt="icon"
                      />
                    )}
                    {i === 3 && (
                      <Image
                        src={IconGame}
                        width={140}
                        height={140}
                        alt="icon"
                      />
                    )}


                    <div>
                      <h3 className="head-4 text-primary-100 mt-5 lg:mt-0 mb-5">
                        {data.title}
                      </h3>
                      <p className="text-gray-600 ">{data.desc}</p>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        <section className="">
          <div className="container py-20">
            <span className="py-2 px-5 head-4 bg-primary-gradient-x-100 text-white rounded-md">
              FAQs
            </span>
            <h2 className="head-2 max-w-xl mt-5 mb-10">
            { state.isLang === 'ID' ? 'Pertanyaan yang sering ditanyakan' : 'Frequently asked questions'}
            </h2>

            <Faq data={data} />
          </div>
        </section>

        <section className="bg-primary-gradient-100">
          <div className="container py-20">
            <Card className="bg-white mx-10 lg:mx-24 p-20 flex flex-col justify-center items-center">
              <h2 className="head-2 text-primary-100 mx-auto text-center max-w-lg mb-10">
              { state.isLang === 'ID' ? 'Tidak menemukan jawaban yang anda inginkan ?' : 'Did not find the answer you want?'}
              </h2>
              <Link href={"/kontak"}>
                <Button className="bg-blue-600 text-white hover:opacity-50 hover:bg-primary-gradient-200">
                { state.isLang === 'ID' ? 'Hubungi Kami' : 'Contact Us'}
                </Button>
              </Link>
            </Card>
          </div>
        </section>

        {/* image galery */}
        <section className="">
          <div className="container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mb-10">
              <div className="flex justify-center items-center bg-primary-gradient-x-100 rounded-3xl h-96 overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  src={ImageHead1}
                  width={540}
                  height={400}
                  alt="image head"
                />
              </div>
              <div className="flex justify-center items-center bg-primary-gradient-x-100 rounded-3xl h-96 overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  src={ImageHead2}
                  width={540}
                  height={400}
                  alt="image head"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
              <div className="flex justify-center items-center bg-primary-gradient-x-100 rounded-3xl h-44 overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  src={ImageBody1}
                  width={540}
                  height={400}
                  alt="image head"
                />
              </div>
              <div className="flex justify-center items-center bg-primary-gradient-x-100 rounded-3xl h-44 overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  src={ImageBody2}
                  width={540}
                  height={400}
                  alt="image head"
                />
              </div>
              <div className="flex justify-center items-center bg-primary-gradient-x-100 rounded-3xl h-44 overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  src={ImageBody3}
                  width={540}
                  height={400}
                  alt="image head"
                />
              </div>
              <div className="flex justify-center items-center bg-primary-gradient-x-100 rounded-3xl h-44 overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  src={ImageBody4}
                  width={540}
                  height={400}
                  alt="image head"
                />
              </div>
            </div>
          </div>
        </section>

        {/* event and news */}
        <section>
          <div className="container pt-10 pb-20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="capitalize head-4 ">wawasan</h3>
                <h2 className="capitalize head-3">{ state.isLang === 'ID' ? 'Berita Terbaru' : 'New Update'}</h2>
              </div>
              <Link href={"/berita"}>
                <Button className="bg-primary-gradient-100 text-white hover:opacity-50 hover:bg-primary-gradient-200">
                { state.isLang === 'ID' ? 'Berita Lainnya' : 'More'}
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 lg:place-items-center lg:items-stretch">
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
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const mitraResponse = await axios.get("mitra");
    const beritaResponse = await axios.get("berita/all?limit=4");

    const mitra = mitraResponse.data.data;
    const berita = beritaResponse.data.data;

    return {
      props: {
        mitra,
        berita,
      },
    };
  } catch (err) {
    console.warn(err);
    return {
      props: {
        mitra: [],
        berita: [],
      },
    };
  }
}
