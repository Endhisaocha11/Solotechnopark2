import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";

// import required modules

export default function ProfilAlumni({ data }) {
  return (
    <>
      <Swiper
        className="profil-alumni mt-8"
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          // Konfigurasi untuk perangkat mobile
          640: {
            slidesPerView: 1,
          },
          // Konfigurasi untuk perangkat desktop
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {data &&
          data.map((item, i) => (
            <SwiperSlide key={i} className="cursor-pointer">
              {/* <div className="head-4 text-white bg-primary-100 py-4 px-5 rounded-2xl text-center">
                {item.kategori}
              </div> */}
              <div className="w-720 rounded-2xl mx-auto flex justify-center items-center my-2">
                <Image
                  src={item.image}
                  width={720}
                  // height={240}
                  alt={item.nama}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
