import React from 'react';

export default function Hero({ fantaRef, orangeCutRef, orangeRef, leafRef, leaf2Ref, leaf3Ref }) {
  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-[linear-gradient(150deg,rgb(255,166,0),rgb(255,94,0))]">
      <h1 className="text-[25vw] text-white" style={{ fontFamily: 'Product Sans B' }}>FANTA</h1>
      <img ref={orangeCutRef} id="orange-cut" src="Assets/orange2.png" alt="" />
      <img ref={fantaRef} id="fanta" src="Assets/fanta.png" alt="" />
      <img ref={orangeRef} id="orange" src="Assets/orange.webp" alt="" />
      <img ref={leafRef} id="leaf" src="Assets/leaf.webp" alt="" />
      <img ref={leaf2Ref} id="leaf2" src="Assets/leaf2.png" alt="" />
      <img ref={leaf3Ref} id="leaf3" src="Assets/coconoutleaf.png" alt="" />
    </div>
  );
}