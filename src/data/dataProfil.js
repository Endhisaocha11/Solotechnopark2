import ImageYudit from "../images/profil/Pak-Yudit.png";
import ImageRoni from "../images/profil/Pak-Rony.png";
import ImageUntung from "../images/profil/Pak-Untung-1-240x300.png";
import ImageWahyu from "../images/profil/Pak-Wahyu.png";
import ImageCristian from "../images/profil/Pak-Kris-1-1-240x300.png";
import ImageSusilo from "../images/profil/Pak-Susilo-8x10-1.png";

const dataProfil = [
  [
    {
      id_cluster: 416252,
      image: ImageYudit,
      nama: "Yudit Cahyantoro, NS, S.T., M.T.",
      jabatan: "Pemimpin BLUD Kawasan Sains dan Teknologi Solo Technopark",
    },
    {
      id_cluster: 416252,
      image: ImageRoni,
      nama: "Rony Widjanarko, S.H., M.H. ",
      jabatan: "Kepala UPTD Kawasan Sains dan Teknologi",
    },
  ],
  [
    {
      id_cluster: 416252,
      image: ImageWahyu,
      nama: "Wahyu Hermawan, S.Si, M.T.",
      jabatan: "Kepala Sub Bagian Tata Usaha UPTD  Kawasan Sains dan Teknologi",
    },
    {
      id_cluster: 416252,
      image: ImageSusilo,
      nama: "Susilo Budi Arianto, S.T.",
      jabatan: "Pejabat Teknis Pelayanan & Pengembangan",
    },
    // {
    //   id_cluster: 416252,
    //   image: ImageSusilo,
    //   nama: "Susilo Budi Arianto, S.T.",
    //   jabatan: "Manager Kerjasama dan Akselerasi Bisnis",
    // },
    {
      id_cluster: 416252,
      image: ImageUntung,
      nama: "Untung Priyohananto, S.E.",
      jabatan: "Pejabat Teknis Umum",
    },
  ],
];

const dataProfilJSON = JSON.stringify(dataProfil);

export default dataProfilJSON;
