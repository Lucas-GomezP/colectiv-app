"use client";

import PublicTransportSection from "./PublicTransport/PublicTransportSection";

export default function Aside() {
  return (
    <div className="w-1/4 h-full flex flex-col">
      <h1 className="text-2xl text-center">Menu</h1>
      <PublicTransportSection />
    </div>
  );
}