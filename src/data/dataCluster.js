import ImageManufaktur from "../images/cluster-manufaktur.svg";
import ImageTechno from "../images/cluster--technopreneurship.svg";
import ImageKreatif from "../images/cluster-industri-kreatif.svg";

const dataCluster = [
  {
    id_cluster: 416252,
    foto: ImageManufaktur,
    nama_cluster:  "Cluster Manufaktur",
    nama_cluster2:  "Manufacture Cluster",
    divisi:
      '["Sektor Mekanik dan Desain Manufaktur" ,"Sektor Pengelasan (General dan Underwater)","Sektor Otomasi"]',
    divisi2:
      '["Mechanical and Manufacturing Design Sector","Welding Sector (General dan Underwater)","Automation Sector"]'
  },
  {
    id_cluster: 553975,
    foto: ImageTechno,
    nama_cluster: "Cluster Technopreneurship",
    nama_cluster2:  "Technopreneurship Cluster",
    divisi:
      '["Sektor Teknologi Informasi (ICT)","Sektor Kewirausahaan (UMKM dan StartUp)","Sektor Gaming dan e-Sport"]',
    divisi2:
      '["Information Technology Sector (ICT)","Entrepreneurship Sector (UMKM and StartUp)","Gaming and e-Sport Sector"]'
  },
  {
    id_cluster: 645611,
    foto: ImageKreatif,
    nama_cluster: "Cluster Industri Kreatif",
    nama_cluster2:  "Creative Industry Cluster",
    divisi:
      '["Sektor Seni Pertunjukan–Penyiaran","Sektor Batik – Handicraft","Sektor Kuliner"]',
    divisi2:
      '["Performing Arts–Broadcasting Sector","Batik Sector – Handicrafts","Culinary Sector"]'
  },
];

const dataClusterJSON = JSON.stringify(dataCluster);

export default dataClusterJSON;
