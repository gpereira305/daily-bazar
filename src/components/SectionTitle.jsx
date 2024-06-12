import React from "react";

export default function SectionTitle({ text }) {
  return (
    <section className="main-container border-b border-base-300">
      <h2 className="text-3xl font-medium tracking-wider uppercase  pb-5">
        {text}
      </h2>
    </section>
  );
}
