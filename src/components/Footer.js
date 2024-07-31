import Image from "next/image";
import React from "react";
import LogoSTP from "@/images/Logo-Technopark-Remake-Solo-1.webp";
import Link from "next/link";
import KawasanSTP from "@/images/site-room.png";
import Barcode from "@/images/barcode-150x150.png";
import { BsBuildingFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logoWhite from "../images/Logo-Technopark-Remake-Solo-1.webp";

const dataSocialMedia = [
  {
    title: "instagram",
    url: "https://www.instagram.com/solotechnopark_official",
    icon: faInstagram,
  },
  {
    title: "facebook",
    url: "https://www.facebook.com/solotechnopark.id",
    icon: faFacebook,
  },
  {
    title: "tiktok",
    url: "https://www.tiktok.com/@solotechnopark?lang=id-ID",
    icon: faTiktok,
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/company/solo-technopark/",
    icon: faLinkedin,
  },
  {
    title: "youtube",
    url: "https://www.youtube.com/channel/UCqtTWpV2tExmQ1pQQLILd2Q",
    icon: faYoutube,
  },
  {
    title: "twitter",
    url: "https://twitter.com/solotechnopark_",
    icon: faTwitter,
  },
];

function Footer() {
  return (
    <footer>
      <div className="bg-primary-100 bg-gradient-patern py-24">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full lg:w-1/3 px-4">
            <Image src={logoWhite} alt="Logo" width={200} height={85} />
            <p className="text-white text-base my-5 mb-5">Menuju kawasan Solo Technopark yang inovatif dan berdaya saing internasional.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex mb-2 items-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="mr-2 text-white"
                  width="20px"
                />
                <Link
                  href="https://www.facebook.com/solotechnopark.id?mibextid=ZbWKwL"
                  className="text-white hover:text-gray-300"
                >
                  Facebook
                </Link>
              </div>
              <div className="flex mb-2 items-center">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="mr-2 text-white"
                  width="20px"
                />
                <Link
                  href="https://twitter.com/solo_technopark"
                  className="text-white hover:text-gray-300"
                >
                  Twitter
                </Link>
              </div>
              <div className="flex mb-2 items-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="mr-2 text-white"
                  width="20px"
                />
                <Link
                  href="https://instagram.com/solotechnopark_official?igshid=MmU2YjMzNjRlOQ=="
                  className="text-white hover:text-gray-300"
                >
                  Instagram
                </Link>
              </div>
              <div className="flex mb-2 items-center">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="mr-2 text-white"
                  width="20px"
                />
                <Link
                  href="https://www.tiktok.com/@solotechnopark"
                  className="text-white hover:text-gray-300"
                >
                  Tiktok
                </Link>
              </div>
              <div className="flex mb-2 items-center">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="mr-2 text-white"
                  width="20px"
                />
                <Link
                  href="https://www.youtube.com/channel/UCqtTWpV2tExmQ1pQQLILd2Q"
                  className="text-white hover:text-gray-300"
                >
                  Youtube
                </Link>
              </div>
              <div className="flex mb-2 items-center">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="mr-2 text-white"
                  width="20px"
                />
                <Link
                  href="https://www.linkedin.com/company/solo-technopark/"
                  className="text-white hover:text-gray-300"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 px-4 mt-10 lg:mt-0">
            <h2 className="font-bold text-white mb-5">Contact Us</h2>
            <div className="flex items-center mb-2">
              <BsBuildingFill className="mr-3 text-white " />
              <p className="text-white">Gedung Solo Trade Center</p>
            </div>
            <div className="flex mb-2 items-center">
              <FaMapMarkerAlt className="mr-3 text-white" />
              <p className="text-white">
                Jl. Ki Hajar Dewantara No. 19 Jebres, Kec. Jebres, Kota Surakarta
              </p>
            </div>
            <div className="flex mb-2 items-center">
              <FaPhoneAlt className="mr-3 text-white" />
              {/* <p className="text-white">0857-4151-5573</p> */}
              <p className="text-white">(+62)271666628</p>
            </div>
            <Link href="https://wa.me/6281225924175" className="flex mb-2 items-center">
              <RiWhatsappFill className="mr-3 text-white" />
              {/* <p className="text-white">0857-4151-5573</p> */}
              <p className="text-white">(+62)81225924175</p>
            </Link>
            <Link href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=info.solotechnopark@gmail.com" className="flex mb-2 items-center">
              <MdMail className="mr-3 text-white" />
              <p className="text-white">info.solotechnopark@gmail.com</p>
            </Link>
          </div>
          <div className="w-full lg:w-1/3 px-4 mt-10 lg:mt-0">
            <h2 className="font-bold text-white mb-5">Find Us</h2>
            <div className="mt-2 overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.173350482129!2d110.8516778147767!3d-7.556069194550727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16e2b5ffa643%3A0xa0bf36ec85b94dfb!2sSolo%20Techno%20Park!5e0!3m2!1sid!2sid!4v1680755929146!5m2!1sid!2sid"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="bg-white text-black text-center py-5">
      Copyright © 2023 Solo Technopark, All rights reserved.
        <br /> Designed and Developed by 
        <Link href={"/msib"} className="secondary-200 hover:text-primary-100">
         MSIB Batch 4.
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
