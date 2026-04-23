"use client";

import { useEffect, useRef, useState } from "react";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

const PHOTOS: Photo[] = [
  { src: "/photos/skyler.png", alt: "Skyler Rasmussen", caption: "Saratoga Springs, UT" },
  { src: "/photos/byu.jpeg", alt: "BYU game day", caption: "Cougar stripes — game day" },
  { src: "/photos/cow_image.jpg", alt: "Family in cow costumes at trunk-or-treat", caption: "Trunk-or-treat, full herd" },
  { src: "/photos/dani.jpg", alt: "Skyler holding his daughter outdoors", caption: "Walks with the littles" },
  { src: "/photos/dogs.jpg", alt: "Skyler with two dogs on the couch", caption: "Two dogs, zero personal space" },
  { src: "/photos/goblin.jpg", alt: "Skyler and wife hiking in red rock", caption: "Red rock weekends" },
  { src: "/photos/mexico.jpg", alt: "Skyler and wife at the marina", caption: "Sunsets on the water" },
];

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 40;

export function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHOTOS.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + PHOTOS.length) % PHOTOS.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      go(dx < 0 ? 1 : -1);
    }
    setPaused(false);
  };

  return (
    <div
      className="about-photo carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {PHOTOS.map((p, i) => (
        <img
          key={p.src}
          src={p.src}
          alt={p.alt}
          className={`carousel-img ${i === index ? "active" : ""}`}
          aria-hidden={i !== index}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}

      <div className="about-photo-frame"></div>
      <div className="about-photo-tag">
        <span className="c"></span>
        <span>{PHOTOS[index].caption}</span>
      </div>

      <button
        type="button"
        className="carousel-arrow prev"
        aria-label="Previous photo"
        onClick={() => go(-1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="carousel-arrow next"
        aria-label="Next photo"
        onClick={() => go(1)}
      >
        ›
      </button>

      <div className="carousel-dots" role="tablist">
        {PHOTOS.map((p, i) => (
          <button
            key={p.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to photo ${i + 1}`}
            className={`carousel-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
