import React, { useState, useEffect } from "react";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { Link } from "react-router-dom";

const heroImages = [
  {
    id: 1,
    image: hero1,
    arrows: {
      prev: 4,
      next: 2,
    },
  },

  {
    id: 2,
    image: hero2,
    arrows: {
      prev: 1,
      next: 3,
    },
  },

  {
    id: 3,
    image: hero3,
    arrows: {
      prev: 2,
      next: 4,
    },
  },

  {
    id: 4,
    image: hero4,
    arrows: {
      prev: 3,
      next: 1,
    },
  },
];

export default function Hero() {
  return (
    <div className="relative h-[40vh]">
      <div className="absolute z-[100] flex flex-col left-0 sm:left-[100px] top-[100px] max-w-[600px] px-4 sm:px-0">
        <h1 className="text-4xl font-bold text-secondary-content">
          We’re changing the way people shop.
        </h1>
        <p className="mt-3 text-base font-semibold text-secondary-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis et
          illum commodi, nemo sunt hic non placeat eum. Est, minus?
        </p>
        <Link to="products" className="btn btn-primary max-w-max mt-3">
          Our Products
        </Link>
      </div>

      <div className="carousel w-full h-[inherit]">
        {heroImages.map((image) => (
          <div
            id={`slide${image.id}`}
            className="carousel-item relative w-full after:content[''] after:absolute after:bg-black/50 after:w-full after:h-full after:top-0 after:left-0 after:z-10"
            key={image.id}
          >
            <img src={image.image} className="w-[inherit] object-cover " />

            <div className="absolute  hidden sm:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
              <a href={`#slide${image.arrows.prev}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${image.arrows.next}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
