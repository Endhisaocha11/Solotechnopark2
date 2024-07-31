// import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
import Button from "@/components/Button";
import Link from "next/link";
import MitraSingle from "@/components/swiper/MitraSingle";
import Faq from "react-faq-component";
import ImageHead1 from "@/images/layanan/teknis/slider/solo-technopark-diklat-head-1.jpg";
import ImageHead2 from "@/images/layanan/teknis/slider/solo-technopark-diklat-head-2.jpg";
import ImageBody1 from "@/images/layanan/teknis/slider/solo-technopark-diklat-16-posjw1f9qad38gdx5sevc0k68aqrfgswfcijl0qrp4.jpg";
import ImageBody2 from "@/images/layanan/teknis/slider/pelatihan-stp-2-posjvylr5s989mi0m96zmj9sg54nsdhpeyk356uy7s.jpg";
import ImageBody3 from "@/images/layanan/teknis/slider/pelatihan-petrotekno-4-posjvylr5s989mi0m96zmj9sg54nsdhpeyk356uy7s.jpg";
import ImageBody4 from "@/images/layanan/teknis/slider/basic-aircraft-structure-1-posjvylr5s989mi0m96zmj9sg54nsdhpeyk356uy7s.jpg";
import dataProgram from "@/data/layanan/dataProgram";
import dataBenefitProgram from "@/data/layanan/dataBenefitProgram.json";
import dataProfilInstruktur from "@/data/layanan/dataProfilInstruktur";
import IconPendukung from "@/images/layanan/layanan-pendukung-icon.png";


// Import modul atau dependensi yang dibutuhkan
import Card from "@/components/cards/Card";
import Image from "next/image";
import axios from "../api/axios";
import { BsCheckCircleFill } from "react-icons/bs";
import ProfilInstruktur from "@/components/swiper/ProfilInstruktur";
import { useAppContext } from "@/context/AppContext";

export default function LayananPendukung({ mitra, berita, testimoni }) {
  const [state, dispatch] = useAppContext();
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
              url: "/favicon.png",
              width: 800,
              height: 600,
              alt: "Profile Solo Technopark",
            },
          ],
          site_name: "profil - solotechnopark",
        }}
      />

      <Head>
        <title>Layanan - solotechnopark.go.id</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://solotechnopark.id/wp-content/uploads/2021/09/Solo-Tecno.png"
        />
      </Head>
      <Navbar />

      <main className="mt-20">
        <section className="">
          <div className="container py-20">
            <h2 className="head-2 my-10 text-center max-w-3xl mx-auto">
              Program Pelatihan Kami
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0">
              {dataProgram &&
                dataProgram.map((data, i) => (
                  <Card
                    key={i}
                    className={
                      "bg-gray-100 p-8 flex items-start gap-10 lg:mx-5 bg-rounded-2"
                    }
                  >
                    <div>
                      <h3
                        className="text-2xl font-bold text-primary-100 mt-5 lg:mt-0 mb-6"
                        style={{ maxWidth: "14rem" }}
                      >
                        {data.title}
                      </h3>
                      <p className="text-gray-600 max-w-md">{data.content}</p>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="container py-20">
            <h2 className="head-2 my-10 text-center max-w-3xl mx-auto">
              Profil Instruktur
            </h2>

            <ProfilInstruktur data={JSON.parse(dataProfilInstruktur)} />
          </div>
        </section>

        <section className="bg-primary-gradient-100">
          <div className="container py-20">
            <Card className="bg-white mx-10 lg:mx-24 p-20 flex flex-col justify-center items-center">
              <h2 className="head-2 text-primary-100 mx-auto text-center max-w-lg mb-10">
                Tidak menemukan jawaban yang anda inginkan ?{" "}
              </h2>
              <Link href={"/kontak"}>
                <Button className="bg-blue-600 text-white hover:opacity-50 hover:bg-primary-gradient-200">
                  Hubungi Kami
                </Button>
              </Link>
            </Card>
          </div>
        </section>

        {/* faq */}
        <section className="">
          <div className="container py-20">
            <span className="py-2 px-5 head-4 bg-primary-gradient-x-100 text-white rounded-md">
              FAQs
            </span>
            <h2 className="head-2 max-w-xl mt-5 mb-10">
              Pertanyaan yang sering ditanyakan
            </h2>

            <Faq data={data} />
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

const data = {
  rows: [
    {
      title: "Jenis Diklat yang Bisa Diikuti",
      content:
        '<ul><li><b>Diklat APBN:</b><span style="font-weight: 400"> Dibuka pada periode tertentu dan bebas biaya untuk seluruh warga indonesia</span></li><li><b>Diklat APBD:</b><span style="font-weight: 400"> Dibuka pada periode tertentu dan bebas biaya untuk yang memiliki KTP Surakarta</span></li><li><b>Diklat Mandiri:</b><span style="font-weight: 400"> Dibuka sepanjang tahun dan besaran biaya ditentukan sesuai dengan program yang diikuti </span></li></ul>',
    },
    {
      title: "Yang Dipelajari dalam Diklat",
      content:
        '<ul><li><span style="font-weight: 400">Pelatihan hardskill sesuai dengan jurusan yang diambil</span></li><li><span style="font-weight: 400">Belajar menggunakan berbagai jenis mesin manufaktur</span></li><li><span style="font-weight: 400">Pelatihan softskill</span></li></ul>',
    },
    {
      title: "Penyaluran Kerja setelah Lulus Diklat",
      content:
        "Belum tentu. Penyaluran kerja menimbang aspek nilai akhir peserta diklat, usia peserta diklat, dan kebutuhan perusahaan mitra.",
    },
    {
      title: "Tahapan saat Mengikuti Diklat",
      content:
        '<ul><li><span style="font-weight: 400">Tahap 1 merupakan pendidikan dasar teknik (Basic). Dalam tahapan basic ini,para siswa diajarkan ilmu dasar yang meliputi Lathe Work,Bench Work,Grinding Work,Milling Work, dan Gambar Teknik.</span></li><li><span style="font-weight: 400">Tahap 2 merupakan tahap lanjutan (Applied). Dalam tahapan lanjutan ( </span><i><span style="font-weight: 400">Applied </span></i><span style="font-weight: 400">), para siswa diajarkan ke tahap selanjutnya yakni seperti Otomasi Manufaktur, Desain Manufaktur, dan Mekanik Manufaktur.&nbsp;</span></li><li><span style="font-weight: 400">Tahap 3 merupakan tahap akhir (Advance).&nbsp; Peserta yang berhasil lulus berhak mendapatkan Sertifikat Keahlian yang dikeluarkan oleh Solotechnopark.</span></li></ul>',
    },
    {
      title: "Durasi Pelaksanaan Diklat",
      content:
        '<ul><li><span style="font-weight: 400">Secara umum diklat dilaksanakan minimal 6 bulan hingga tahap applied dan maksimal 9 bulan hingga tahap advanced</span></li><li><span style="font-weight: 400">Apabila peserta mengikuti melalui program pemerintah maka durasi diklat didasarkan sesuai dengan kebijakan pemerintah</span></li></ul>',
    },
    {
      title: "Batas Usia untuk Mengikuti Diklat",
      content:
        '<ul><li><span style="font-weight: 400">Tidak ada batasan usia</span></li><li><span style="font-weight: 400">Apabila ingin langsung mendapat rekomendasi penyaluran kerja minimal berusia 22 tahun</span></li></ul>',
    },
    {
      title: "Persyaratan untuk Mengikuti Diklat",
      content: "Minimal memiliki ijazah SLTA dan sederajat",
    },
    {
      title: "Persyaratan Fisik untuk Mengikuti Diklat",
      content:
        '<ul><li><span style="font-weight: 400">Tidak buta warna</span></li><li><span style="font-weight: 400">Bukan penderita ayan/epilepsi</span></li></ul>',
    },
    {
      title: "Dokumen yang Harus Dipersiapkan",
      content:
        '<ul><li><span style="font-weight: 400">Fotocopy KTP Calon Peserta</span></li><li><span style="font-weight: 400">Fotocopy KTP Orangtua</span></li><li><span style="font-weight: 400">Fotocopy KK</span></li><li><span style="font-weight: 400">Fotocopy Ijasah</span></li><li><span style="font-weight: 400">Fotocopy Transkrip Nilai</span></li><li><span style="font-weight: 400">Surat Keterangan Sehat</span></li><li><span style="font-weight: 400">Surat Pernyataan (Bermaterai) * Didapat saat registrasi offline</span></li><li><span style="font-weight: 400">SKCK</span></li><li><span style="font-weight: 400">Pas Foto 4X6</span></li></ul>',
    },
    {
      title: "Minimal Nilai Ijazah untuk Mendaftar Diklat",
      content: "Tidak ada",
    },
    {
      title: "Penggunaan Materai pada Dokumen Diklat",
      content:
        "Ya, pada dokumen Surat Penyataan *Didapat saat registrasi offline",
    },
    {
      title: "Alur Pendaftaran Diklat",
      content:
        '<ul><li><span style="font-weight: 400">Datang ke Pendaftaran STP</span></li><li><span style="font-weight: 400">Scan QR Code di Ruang Pendaftaran</span></li><li><span style="font-weight: 400">Mengisi Formulir Biodata Offline</span></li><li><span style="font-weight: 400">Melengkapi Berkas Persyaratan</span></li><li><span style="font-weight: 400">Tes Tulis</span></li><li><span style="font-weight: 400">Tes Wawancara</span></li></ul>',
    },
    {
      title: "Mendaftar untuk Banyak Jurusan Diklat",
      content: "Tidak bisa",
    },
    {
      title: "Warga di Luar Kota Surakarta Mengikuti Diklat",
      content: "Bisa",
    },
    {
      title: "Kuota Peserta Diklat",
      content:
        "Ada. Jumlahnya ditentukan tergantung program dan kebijakan Solo Technopark",
    },
    {
      title: "Biaya Pendaftaran Diklat",
      content:
        '<ul><li><span style="font-weight: 400">Bervariasi tergantung program</span></li><li><span style="font-weight: 400">Untuk lebih detail harap hubungi CP</span></li></ul>',
    },
  ],
};
