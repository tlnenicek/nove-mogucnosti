'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';


import 'swiper/css';
import 'swiper/css/navigation';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
    ssr: false,  // Swiper does not support server-side rendering
});
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), {
    ssr: false,
});


const testimonialsData = [
    {
        quote: "Vrlo smo zadovoljni sa dosadašnjom suradnjom s tvrtkom Nove mogućnosti, jer nam je njihovo znanje i iskustvo pomoglo u našim projektnim aktivnostima da postanemo konkurentniji na tržištu.",
        name: "Boris Budinjaš",
        position: "CEO at SAB d.o.o.",
        image: "https://media.licdn.com/dms/image/C4D03AQGXW3NyzoipTA/profile-displayphoto-shrink_200_200/0/1661971906932?e=2147483647&v=beta&t=uQps59ApkkZ8xgj9eGHLjck8E81fmJ8ymLbkhwy0Xy0"
    },
    {
        quote: "Their strategic insights have revolutionized our approach to marketing and have resulted in significant revenue growth.",
        name: "Ana Marić",
        position: "Marketing Director at Inova IT",
        image: "https://example.com/path-to-image.jpg"
    },
    {
        quote: "Thanks to their expert advice, we have seen a marked improvement in our operational efficiency.",
        name: "Ivan Horvat",
        position: "Operations Manager",
        image: "https://example.com/path-to-another-image.jpg"
    },
    {
        quote: "Their innovative solutions have not only enhanced our product portfolio but also opened new market avenues.",
        name: "Lana Ilić",
        position: "Product Manager at Techno Solutions",
        image: "https://example.com/path-to-new-image.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="bg-gray-100 p-4 md:p-8 h-auto w-full md:w-screen mb-16 md:px-28">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                >
                    {testimonialsData.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <figure className="max-w-screen-md mx-auto">
                                <blockquote>
                                    <p className="text-2xl font-medium text-gray-900">"{testimonial.quote}"</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    <Image className="w-6 h-6 rounded-full" src={testimonial.image} alt="profile picture" width={24} height={24} />
                                    <div className="flex items-center divide-x-2 divide-gray-500">
                                        <div className="pr-3 font-medium text-gray-900">{testimonial.name}</div>
                                        <div className="pl-3 text-sm font-light text-gray-500">{testimonial.position}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
