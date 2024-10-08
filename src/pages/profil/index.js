// import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import ImageProfile from "@/images/Mas-Gibran.png";
import KawasanSTP from "@/images/Kawsan-STP-6.png";
import BaganWeb from "@/images/Bagan-Web-3-b.png";
import IconCheck from "@/images/check.svg";
import ImageSejarahSTP from "@/images/sejarah-stp-v2.png";
import Image from "next/image";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
import dataLeadership from "@/data/dataLeadership.json";
import dataProfilJSON from "@/data/dataProfil";
import DefaultLayout from "../layouts";

const dataDeskripsiProfil = {
  title: "Profil Solo Technopark",
  paragraph: [
    "Sebagai Unit Pelaksana Teknis Daerah (UPTD) pada BALITBANGDA Kota Surakarta, berdasarkan Peraturan Walikota No. 15 Tahun 2022",
    "Menerapkan Pola Tata Kelola Badan Layanan Umum Daerah (BLUD) berdasarkan Perwali Surakarta No. 38 Tahun 2022",
  ],
};

export default function Profile() {
  const dataProfil = JSON.parse(dataProfilJSON);

  return (
    <>
      <NextSeo
        title="Profil - Solo Technopark"
        description="Sebagai Unit Pelaksana Teknis Daerah (UPTD) pada BALITBANGDA Kota Surakarta, berdasarkan Peraturan Walikota No. 15 Tahun 2022. Menerapkan Pola Tata Kelola Badan Layanan Umum Daerah (BLUD) berdasarkan Perwali Surakarta No. 38 Tahun 2022."
        canonical="https://solotechnopark.id/"
        openGraph={{
          url: "https://solotechnopark.id/",
          title: "profil - solo technopark",
          description: "Kawasan Inovatif dan Berdaya Saing International.",
          images: [
            {
              url: "https://solotechnopark.id/wp-content/uploads/2022/11/Template-Website-3-1536x827.jpg",
              width: 800,
              height: 600,
              alt: "Profile Solo Technopark",
            },
          ],
          site_name: "profil - solotechnopark",
        }}
      />

      <Head>
        <title>Profil - Solo Technopark</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://solotechnopark.id/wp-content/uploads/2021/09/Solo-Tecno.png"
        />
      </Head>
      <Navbar />
      <header className="mt-20 pt-16 bg-flower-1">
        <div className="container lg:h-[85vh] pb-20 grid lg:grid-cols-12 gap-5 lg:gap-10 items-center">
          <div className="mx-auto flex flex-col justify-center items-start lg:col-span-5 text-white">
            <h1 className="capitalize head-1 my-5 leading-[3.5rem]">
              Profil <br /> Kelembagaan Solo Technopark
            </h1>
            <ul>
              {dataDeskripsiProfil &&
                dataDeskripsiProfil.paragraph.map((data, i) => (
                  <li key={i} className="paragraph text-white">
                    {data}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex justify-end items-center lg:col-span-7 ">
            <Image className="w-full mt-10" src={KawasanSTP} alt="flow" />
          </div>
        </div>
      </header>
      <main>
        <section className="bg-gray-100">
          <div className="container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="">
                <h2 className="capitalize head-2 mt-5">Visi</h2>
                <p className="paragraph mt-10">
                  Menjadi kawasan terpadu dunia industri, perguruan tinggi,
                  riset dan teknologi serta kewirausahaan berbasis teknologi dan
                  inovasi bagi industri kecil menengah dalam rangka peningkatan
                  daya saing dan pertumbuhan ekonomi daerah. Peran media
                  mensupport semua aktivitas di Solo Technopark tersebut.
                </p>
              </div>
              <div className="mx-auto flex flex-col justify-start items-start">
                <h2 className="capitalize head-2 mt-5">Misi</h2>
                <ul className="my-5 text-gray-600">
                  <li className="flex items-start gap-5 my-5">
                    <Image src={IconCheck} alt="check" />
                    <span>
                      Melaksanakan upaya peningkatan kesejahteraan masyarakat
                      melalui peningkatan kompetensi sumber daya manusia dan
                      penguasaan iptek.
                    </span>
                  </li>
                  <li className="flex items-start gap-5 my-5">
                    <Image src={IconCheck} alt="check" />
                    <span>
                      Menumbuhkembangkan perusahaan pemula berbasis teknologi
                      khususnya yang mendukung potensi lokal.
                    </span>
                  </li>
                  <li className="flex items-start gap-5 my-5">
                    <Image src={IconCheck} alt="check" />
                    <span>
                      Membangun budaya inovatif, transfer teknologi, semangat
                      kewirausahaan dan standar mutu untuk meningkatkan daya
                      saing.
                    </span>
                  </li>
                  <li className="flex items-start gap-5 my-5">
                    <Image src={IconCheck} alt="check" />
                    <span>
                      Mengembangkan potensi ekonomi dan meningkatkan daya tarik
                      investasi.
                    </span>
                  </li>
                </ul>
              </div>
              <Image className="w-full" src={BaganWeb} alt="flow" />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 bg-rounded-1">
          <div className="container text-center py-20 lg:py-20">
            <h2 className="head-1 capitalize text-center mx-auto mt-5 lg:mt-20 text-white">
              Sejarah Berdirinya Solo Technopark
            </h2>

            <Image
              className="mx-auto mt-20 mb-10"
              src={ImageSejarahSTP}
              width={1245}
              height={671}
              alt="sejarah stp"
            />
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-10">
              <div className="col-span-2 mx-auto flex flex-col justify-center lg:items-start ">
                <h4 className="uppercase text-2xl">Leadership</h4>
                <h2 className="capitalize head-1 my-5 text-primary-100 mb-20">
                  Kawasan Sains dan Teknologi Solo Technopark
                </h2>

                {dataLeadership &&
                  dataLeadership.map((data, i) => (
                    <div key={i} className="mb-5">
                      <h3 className="head-4 my-5">{data.title}</h3>
                      <p className="text-gray-600">{data.desc}</p>
                    </div>
                  ))}
              </div>
              <div className="flex flex-col justify-center items-end mx-auto md:ml-auto md:mr-0 mt-20 lg:mt-0">
                <div className="bg-primary-100 w-72 rounded-lg overflow-hidden flex justify-center items-center">
                  <Image src={ImageProfile} alt="image profile" />
                </div>
                <div className="text-center my-5  mx-auto">
                  <h4 className="head-4">Gibran Rakabuming Raka</h4>
                  <span>Walikota Surakarta</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container pt-20 pb-10">
            <div className="flex flex-wrap gap-5 justify-evenly items-center mb-10">
              {console.log(dataProfil)}
              {dataProfil &&
                dataProfil[0].map((data, i) => (
                  <div key={i} className="my-5">
                    <div className="w-72 rounded-3xl overflow-hidden pt-5 px-5 flex bg-gray-100 justify-center items-center mx-auto">
                      <Image className="mx-auto" src={data.image} alt="check" />
                    </div>
                    <div className="text-center my-5">
                      <h4 className="head-4">{data.nama}</h4>
                      <span>{data.jabatan}</span>
                    </div>
                  </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-evenly items-start">
              {dataProfil &&
                dataProfil[1].map((data, i) => (
                  <div key={i} className="my-5 mx-5">
                    <div className="rounded-3xl overflow-hidden pt-5 px-5 flex bg-gray-100 justify-center items-center mx-auto">
                      <Image
                        className="mx-auto"
                        src={data.image}
                        width={288}
                        height={320}
                        alt="check"
                      />
                    </div>
                    <div className="text-center my-5">
                      <h4 className="head-4">{data.nama}</h4>
                      <span>{data.jabatan}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
