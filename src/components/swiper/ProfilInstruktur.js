import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";

// import required modules

export default function ProfilInstruktur({ data }) {
  return (
    <>
      <Swiper
        className="profil-instruktur mt-8"
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          // Konfigurasi untuk perangkat mobile
          640: {
            slidesPerView: 2,
          },
          // Konfigurasi untuk perangkat desktop
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {data &&
          data.map((item, i) => (
            <SwiperSlide key={i} className="cursor-pointer">
              {/* <div className="head-4 text-white bg-primary-100 py-4 px-5 rounded-2xl text-center">
                {item.kategori}
              </div> */}
              <div className="w-60 rounded-2xl mx-auto flex justify-center items-center my-2">
                <Image
                  src={item.image}
                  width={280}
                  // height={240}
                  alt={item.nama}
                />
              </div>
              <div className="bg-white px-2 rounded-2xl text-center py-2 w-60 mx-auto justify-center items-center">
                <h3 className="font-bold text-primary-100 my-2">{item.nama}</h3>
                <p className="text-gray-600 my-2">{item.peran}</p>
                {/* <p className="text-gray-600 my-2">{item.pengalaman}</p> */}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
