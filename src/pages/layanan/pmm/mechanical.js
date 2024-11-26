// import styles from "@/styles/Home.module.css"; 
import React, { useState } from 'react';
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
import Button from "@/components/Button";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scroller,
  Scroll,
} from "react-scroll";
import Link from "next/link";
import Faq from "react-faq-component";
import dataSide from "@/data/layanan/pmm/dataSide.json";
import dataMateriPMM from "@/data/layanan/pmm/dataMateriPMM.json";

import { PiToolboxFill } from "react-icons/pi";
import { MdBook } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";

// Import modul atau dependensi yang dibutuhkan
import Card from "@/components/cards/Card";
import Image from "next/image";
import axios from "../../api/axios";
import { BsCheckCircleFill } from "react-icons/bs";
import { useAppContext } from "@/context/AppContext";
import { FaArrowCircleRight } from "react-icons/fa";

export default function LayananPendukung({ mitra, berita, testimoni }) {
  const [state, dispatch] = useAppContext();
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <NextSeo
        title="Mekanik Manufaktur (Basic)"
        description="Sebagai Unit Pelaksana Teknis Daerah (UPTD) pada BALITBANGDA Kota Surakarta, berdasarkan Peraturan Walikota No. 15 Tahun 2022. Menerapkan Pola Tata Kelola Badan Layanan Umum Daerah (BLUD) berdasarkan Perwali Surakarta No. 38 Tahun 2022."
        canonical="https://solotechnopark.id/"
        openGraph={{
          url: "https://solotechnopark.id/",
          title: "Mekanik Manufaktur (Basic)",
          description: "Kawasan Inovatif dan Berdaya Saing International.",
          images: [
            {
              url: "/favicon.png",
              width: 800,
              height: 600,
              alt: "Mekanik Manufaktur (Basic)",
            },
          ],
          site_name: "Mekanik Manufaktur (Basic)",
        }}
      />

      <Head>
        <title>Mekanik Manufaktur (Basic)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://solotechnopark.id/wp-content/uploads/2021/09/Solo-Tecno.png"
        />
      </Head>
      <Navbar />

      <main className="mt-20">
        <section className="bg-cam bg-cover bg-no-repeat">
          <div className="container">
            <div className="h-[90vh] flex flex-col justify-center">
              <h1 className="head-1 mb-5 max-w-3xl font-bold text-primary-100">
                {state.isLang === 'ID' ? 'Mekanik Manufaktur (Basic)' : 'Mechanical Manufacture (Basic)'}
              </h1>
              <h3 className="mb-5 max-w-3xl text-primary">
                {state.isLang === 'ID' ? 'Sebagai penunjang Implementasi Kurikulum Merdeka agar dapat membantu guru dalam mendapatkan referensi, inspirasi, dan pemahaman tentang Kurikulum Merdeka' : 'As a support for the implementation of the Independent Curriculum, it can help teachers get references, inspiration and understanding of the Independent Curriculum'}
              </h3>
            </div>
          </div>
        </section>
        
        <section className="bg-white">
          <div className="container py-20">
            <h2 className="head-2 my-10 text-center max-w-3xl mx-auto font-bold text-primary-100">
              Materi
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-5">
              {dataMateriPMM.mechanical &&
                dataMateriPMM.mechanical.map((data, i) => (
                  <Card
                    key={i}
                    className={"bg-gray-100 p-8 gap-2 lg:mx-2"}
                  >
                    <div>
                      <h3
                        className="text-xl text-center justify-center font-bold mt-5 lg:mt-0 mb-6 hover:text-primary-100 cursor-pointer"
                        onClick={() => setShowModal(true)}
                      >
                        {data.title}
                      </h3>

                      {/* Link YouTube */}
                      <div className="text-center">
                        {data.title === "Tutorial Pembubutan Panjang" && (
                          <a
                            href="https://www.youtube.com/watch?v=jvpI6s7ONo4"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Tonton Tutorial Pembubutan Panjang
                          </a>
                        )}
                        {data.title === "Tutorial Bubut: Cara Membubut Facing" && (
                          <a
                            href="https://www.youtube.com/watch?v=YYme4HH7H_8"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Tonton Tutorial Bubut: Cara Membubut Facing
                          </a>
                        )}
                        {data.title === "Tutorial Benchwork: Cara Pengeboran" && (
                          <a
                            href="https://www.youtube.com/watch?v=AxtOZqctQbU"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Tonton Tutorial Benchwork: Cara Pengeboran
                          </a>
                        )}
                        {data.title === "Tutorial Benchwork: Cara Mengikir Rata" && (
                          <a
                            href="https://www.youtube.com/watch?v=P36dBGUQ_YY"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Tonton Tutorial Benchwork: Cara Mengikir Rata
                          </a>
                        )}
                        {data.title === "Tutorial Benchwork: Teknik Menggergaji Zig-Zag" && (
                          <a
                            href="https://www.youtube.com/watch?v=mgXQFI6r_QM"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Tonton Tutorial Benchwork: Teknik Menggergaji Zig-Zag
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*title*/}
                <div className="text-center text-primary-100 justify-between p-5">
                  <h3 className="text-3xl font-bold">
                    - Materi Kelas -
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-grey">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed text-justify">- Coming Soon -</p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export async function getServerSideProps() {
  try {
    const mitraResponse = await axios.get("mitra");
    const testimoniResponse = await axios.get("testimonial");

    const mitra = mitraResponse.data.data;
    const testimoni = testimoniResponse.data.data;

    return {
      props: {
        mitra,
        testimoni,
      },
    };
  } catch (err) {
    console.warn(err);
    return {
      props: {
        mitra: [],
        berita: [],
        testimoni: [],
      },
    };
  }
}
