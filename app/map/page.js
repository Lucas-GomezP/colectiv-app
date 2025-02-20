"use client";

import dynamic from 'next/dynamic';
const DynamicMapView = dynamic(() => import("../components/Map"), {
  loading: () => <div className='w-full h-full flex justify-center items-center'><p>Loading...</p></div>,
  ssr: false
})

export default function MapPage () {
  return (
    <DynamicMapView />
  );
};
