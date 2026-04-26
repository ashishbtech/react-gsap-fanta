import React from 'react';

export default function Products({ threeRef, lemon1Ref, cocacolaRef, lemon2Ref, pepsiRef }) {
  return (
    <div ref={threeRef} className="flex items-center justify-center gap-[5vw] w-full h-[100vh] bg-[linear-gradient(150deg,rgb(255,166,0),rgb(255,94,0))]">
      <div className="card flex items-center justify-center flex-col gap-[2vh] w-[25vw] h-[70vh] mt-[10vh] rounded-[20px] bg-white">
        <img ref={lemon1Ref} className="lemon" src="Assets/lemon.webp" alt="" />
        <img ref={cocacolaRef} id="cocacola" src="Assets/cocacola.png" alt="" />
        <h1 className="mt-[40vh] text-[3vw]">CocaCola</h1>
        <button className="text-[1vw] rounded-[50px] border-none text-white bg-[#ff9500] py-[1vw] px-[2vw]">Buy Now</button>
      </div>
      <div className="card flex items-center justify-center flex-col gap-[2vh] w-[25vw] h-[70vh] mt-[10vh] rounded-[20px] bg-white">
        <h1 className="mt-[40vh] text-[3vw]">Fanta</h1>
        <button className="text-[1vw] rounded-[50px] border-none text-white bg-[#ff9500] py-[1vw] px-[2vw]">Buy Now</button>
      </div>
      <div className="card flex items-center justify-center flex-col gap-[2vh] w-[25vw] h-[70vh] mt-[10vh] rounded-[20px] bg-white">
        <img ref={lemon2Ref} className="lemon" src="Assets/lemon.webp" alt="" />
        <img ref={pepsiRef} id="pepsi" src="Assets/pepsi.png" alt="" />
        <h1 className="mt-[40vh] text-[3vw]">Pepsi</h1>
        <button className="text-[1vw] rounded-[50px] border-none text-white bg-[#ff9500] py-[1vw] px-[2vw]">Buy Now</button>
      </div>
    </div>
  );
}