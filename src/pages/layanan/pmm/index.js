	// import styles from "@/styles/Home.module.css";
  import Head from "next/head";
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  import { NextSeo } from "next-seo";
  import {
    Link as ScrollLink,
  } from "react-scroll";
  import Link from "next/link";
  import dataSide from "@/data/layanan/pmm/dataSide.json";
   
  // Import modul atau dependensi yang dibutuhkan
  import Card from "@/components/cards/Card";
  import Image from "next/image";
  import axios from "../../api/axios";
  import { useAppContext } from "@/context/AppContext";
  import { FaArrowCircleRight } from "react-icons/fa";
  import Benefit1 from "@/images/layanan/pmm/benefit/benefit1.png";
  import Benefit2 from "@/images/layanan/pmm/benefit/benefit2.png";
  import Benefit3 from "@/images/layanan/pmm/benefit/benefit3.png";
   
  export default function LayananPendukung() {
    const [state, dispatch] = useAppContext();
    return (
      <>
        <NextSeo
          title="Platform Merdeka Mengajar - Solo Technopark"
          description="Sebagai Unit Pelaksana Teknis Daerah (UPTD) pada BALITBANGDA Kota Surakarta, berdasarkan Peraturan Walikota No. 15 Tahun 2022. Menerapkan Pola Tata Kelola Badan Layanan Umum Daerah (BLUD) berdasarkan Perwali Surakarta No. 38 Tahun 2022."
          canonical="https://solotechnopark.id/"
          openGraph={{
            url: "https://solotechnopark.id/",
            title: "Platform Merdeka Mengajar - solo technopark",
            description: "Kawasan Inovatif dan Berdaya Saing International.",
            images: [
              {
                url: "/favicon.png",
                width: 800,
                height: 600,
                alt: "Platform Merdeka Mengajar Solo Technopark",
              },
            ],
            site_name: "Platform Merdeka Mengajar - solotechnopark",
          }}
        />
   
        <Head>
          <title>Platform Merdeka Mengajar - Solotechnopark.id</title>
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
                {
                  state.isLang === 'ID' ? ' Platform Merdeka Mengajar ' : ' Independent Teaching Platform'
              }{" "}
                </h1>
                <h1 className="head-1 mb-5 max-w-3xl font-bold text-primary-100">
                {
                  state.isLang === 'ID' ? ' Solo Technopark ' : ' Solo Technopark '
              }{" "}
                </h1>
                
                <h3 className="mb-5 max-w-3xl text-primary">
                {
                  state.isLang === 'ID' ? ' Sebagai penunjang Implementasi Kurikulum Merdeka agar dapat membantu guru dalam mendapatkan referensi, inspirasi, dan pemahaman tentang Kurikulum Merdeka ' : ' As a support for the implementation of the Independent Curriculum, it can help teachers get references, inspiration and understanding of the Independent Curriculum'
              }{" "}
                </h3>
              </div>
            </div>
          </section>
          
          <section className="bg-white">
              <div className="container">
                  <div className="flex gap-10">
                      <div className="py-10">
                          <div className="py-24">
                              <ul className="list-none" style={{ maxWidth: "40rem" }}>
                                  {dataSide.pmm.map((data, i) => (
                                      <li key={i} className="head-3 mb-10 bg-primary-100 text-white">
                                          <ScrollLink className="cursor-pointer" to={data.path} smooth={true} duration={100} spy={true}>
                                              <p className="ml-5 my-2">{data.menu}</p>
                                              {data.submenu.map((item, i) => (
                                                  <li key={i} className="head-4 px-5 py-1 bg-white text-primary-100">
                                                      {item}
                                                  </li>
                                              ))}
                                          </ScrollLink>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                    <div className="flex-1 py-10">
                      <div id="benefit" className="container pt-24">
                        <h2 className="head-2 mb-5 font-bold text-primary-100">Benefit</h2>
                        <div className="pb-10 pt-10">
                          <div className="flex flex-row space-x-10 text-justify">
                            <div className="bg-no-repeat bg-cover bg-origin-border bg-custom-1">
                              <div className="relative w-64 h-80 p-6 rounded-lg">
                                <div className="absolute -mt-20 left-1/3 -right-2 transform -translate-x-1/2">
                                  <Image src={Benefit1} alt="Icon" className="w-44 h-44" />
                                </div>
                                <div className="text-white mt-28">
                                  <h1 className="text-2xl font-bold">Training Kit</h1>
                                  <p className="text-xs mt-2">Sejumlah Paket komperhensif yang disesuaikan dengan
                                    kebutuhan individu atau kelompok, menjadikannya solusi yang sempurna untuk pelatihan,
                                    pengembangan diri, dan pengajaran yang efektif.</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-no-repeat bg-cover bg-origin-border bg-custom-2">
                              <div className="relative w-64 h-80 p-6 rounded-lg">
                                <div className="absolute -mt-20 left-1/3 -right-2 transform -translate-x-1/2">
                                  <Image src={Benefit2} alt="Icon" className="w-44 h-44" />
                                </div>
                                <div className="text-white mt-28">
                                  <h1 className="text-2xl font-bold">Modul Pelatihan</h1>
                                  <p className="text-xs mt-2">Modul dari pembimbing yang kompeten dan relevan dengan dunia
                                    industri, sehingga mudah difahami dan dapat di implementasikan antara teori dan
                                    praktiknya, mulai dari pemahaman dasar hingga bagaimana menguasai teknik untuk menjadi
                                    mekanik manufaktur yang profesional.</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-no-repeat bg-cover bg-origin-border bg-custom-3">
                              <div className="relative w-64 h-80 p-6 rounded-lg">
                                <div className="absolute -mt-20 left-1/3 -right-2 transform -translate-x-1/2">
                                  <Image src={Benefit3} alt="Icon" className="w-44 h-44" />
                                </div>
                                <div className="text-white mt-28">
                                  <h1 className="text-2xl font-bold">Sertifikat Kompetensi</h1>
                                  <p className="text-xs mt-2">Sertifikat kompetensi yang dapat digunakan untuk bekerja di
                                    industri Manufaktur.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
   
                      <div id="basic" className="container pt-24">
                      <h2 className="head-2 mb-5 font-bold text-primary-100">Kelas Basic</h2>
                      <div className="pb-10 pt-10">
                        <div className="flex flex-wrap -mx-2 text-justify">
                          {[
                            "Mechanical Manufacture",
                            "Design Manufacture",
                            "Welding Manufacture",
                            "Automation Manufacture",
                          ].map((title, i) => (
                            <div key={i} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4 flex">
                              <div className="max-w-sm w-full rounded-xl shadow-lg overflow-hidden flex flex-col justify-between">
                                {/* Header Card */}
                                <div className="gradient-bg p-6 text-white rounded-t-xl">
                                  <h2 className="text-2xl font-bold">{title}</h2>
                                </div>
                                {/* Deskripsi Card */}
                                <div className="p-5 bg-white flex-grow">
                                  <p className="text-red-500 font-semibold">Durasi : 9 Bulan</p>
                                  <p className="mt-4 text-gray-600">
                                    {i === 0 &&
                                      "Pelatihan keterampilan bidang permesinan manufacturing untuk mengolah bahan baku menjadi produk jadi maupun setengah jadi (part) dengan output SDM yang kompeten yang mudah terserap di dunia industri."}
                                    {i === 1 &&
                                      "Pelatihan keterampilan menggambar rancang bangun suatu produk yang memiliki presisi tinggi yang dikerjakan secara komputerisasi, dengan output SDM yang kompeten yang mudah terserap di dunia industri."}
                                    {i === 2 &&
                                      "Pelatihan keterampilan pengelasan yang mencakup pengetahuan dasar bahan logam, proses metalurgi, teknik serta teknologi pengelasan dengan output SDM yang kompeten yang mudah terserap di dunia industri."}
                                    {i === 3 &&
                                      "Pelatihan keterampilan rancang bangun perangkat dan sistem kontrol mencakup materi dasar dengan tujuan operasional otomatis melalui komputerisasi, dengan output SDM yang kompeten yang mudah terserap di dunia industri."}
                                  </p>
                                </div>
                                {/* Ikon Panah */}
                                <div className="flex justify-end p-7 relative">
                                  {i === 0 && (
                                    <Link
                                      className="inline-block"
                                      href="https://solotechnopark.id/layanan/pmm/mechanical"
                                      target="_blank"
                                    >
                                      <button>
                                        <FaArrowCircleRight className="text-primary-100 w-10 h-10 hover:text-blue-600" />
                                      </button>
                                    </Link>
                                  )}
                                  {i === 1 && (
                                    <Link
                                      className="inline-block"
                                      href="https://solotechnopark.id/layanan/pmm/design"
                                      target="_blank"
                                    >
                                      <button>
                                        <FaArrowCircleRight className="text-primary-100 w-10 h-10 hover:text-blue-600" />
                                      </button>
                                    </Link>
                                  )}
                                  {i === 2 && (
                                    <Link
                                      className="inline-block"
                                      href="https://solotechnopark.id/layanan/pmm/welding1"
                                      target="_blank"
                                    >
                                      <button>
                                        <FaArrowCircleRight className="text-primary-100 w-10 h-10 hover:text-blue-600" />
                                      </button>
                                    </Link>
                                  )}
                                  {i === 3 && (
                                    <Link
                                      className="inline-block"
                                      href="https://solotechnopark.id/layanan/pmm/auto1"
                                      target="_blank"
                                    >
                                      <button>
                                        <FaArrowCircleRight className="text-primary-100 w-10 h-10 hover:text-blue-600" />
                                      </button>
                                    </Link>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div id="specialist" className="container pt-24">
                      <h2 className="head-2 mb-5 font-bold text-primary-100">Kelas Specialist</h2>
                      <div className="pb-10 pt-10">
                        <div className="flex flex-wrap -mx-2">
                          {[
                            {
                              title: "Design and CNC Specialist",
                              duration: "Durasi: 3,5 Bulan",
                              desc: "Program ini dirancang untuk menghasilkan tenaga ahli dalam bidang desain dan pengoperasian mesin CNC (Computer Numerical Control). Peserta akan mempelajari konsep perancangan, pemrograman, hingga pengoperasian mesin berbasis CNC menggunakan perangkat lunak terkini yang sesuai dengan standar kebutuhan industri.",
                            },
                            {
                              title: "General Welding",
                              duration: "Durasi: 2,5 Bulan",
                              desc: "Program ini menyediakan pengetahuan mendalam tentang teknik pengelasan umum, termasuk metode SMAW (Shielded Metal Arc Welding), MIG, dan TIG. Peserta akan dilatih untuk menguasai keterampilan dari tingkat dasar hingga tingkat lanjut yang relevan dengan aplikasi industri modern.",
                            },
                            {
                              title: "Underwater Welding",
                              duration: "Durasi: 2 Bulan & 2 Minggu",
                              desc: "Program ini berfokus pada teknik pengelasan di lingkungan bawah air yang dirancang untuk mendukung kebutuhan proyek-proyek di sektor kelautan dan industri migas. Pelatihan ini dilengkapi dengan sertifikasi profesional yang diakui secara internasional.",
                            },
                            {
                              title: "Automation",
                              duration: "Durasi: 1 Bulan",
                              desc: "Program ini memberikan kompetensi di bidang otomasi industri, meliputi pemrograman sistem kontrol otomatis dan integrasi teknologi dalam proses manufaktur. Peserta akan dipersiapkan untuk mengoptimalkan efisiensi produksi dengan kemampuan otomasi yang sesuai dengan perkembangan teknologi terkini.",
                            },
                          ].map((data, i) => (
                            <Card key={i} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
                              <div className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
                                {/* Header Card */}
                                <div>
                                  <h3 className="text-2xl font-bold text-primary-100 text-center mb-4">
                                    {data.title}
                                  </h3>
                                  {/* Deskripsi Card */}
                                  <h4 className="text-primary-100 text-center font-semibold mb-4">
                                    {data.duration}
                                  </h4>
                                  <p className="text-justify leading-relaxed text-sm">
                                    {data.desc}
                                  </p>
                                </div>
                                {/* Ikon Panah */}
                                <div className="text-right">
                                  <Link
                                    className="inline-block"
                                    href={
                                      i === 0
                                        ? "https://solotechnopark.id/layanan/pmm/cnc"
                                        : i === 1
                                        ? "https://solotechnopark.id/layanan/pmm/welding2"
                                        : i === 2
                                        ? "https://solotechnopark.id/layanan/pmm/uwelding"
                                        : "https://solotechnopark.id/layanan/pmm/auto2"
                                    }
                                    target="_blank"
                                  >
                                    <button>
                                      <FaArrowCircleRight className="text-primary-100 w-10 h-10 mt-5 hover:text-blue-600" />
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>

                    </div>
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
      const testimoniResponse = await axios.get("testimonial");
   
      const mitra = mitraResponse.data.data;
      const testimoni = testimoniResponse.data.data;
   
      return {
        props: {
          mitra,
          testimoni
        }
      };
    } catch (err) {
      console.warn(err);
      return {
        props: {
          mitra: [],
          berita: [],
          testimoni: []
        }
      };
    }
  }
   
