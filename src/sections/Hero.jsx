const Hero = () => {
  return (
    <div className="relative min-h-full">
      <p className="text-4xl mb-10 text-slate-700">Hai! </p>
      <h1 className="xl:w-[700px] text-4xl leading-relaxed mb-16 text-slate-700">
        ✨ Saya
        <strong> Fauzan Asrori</strong>, seorang frontend developer yang suka
        membuat antarmuka web yang menarik, responsif, dan mudah digunakan.
      </h1>
      <p className="text-2xl text-slate-700">
        Hubungi 👉,{" "}
        <a href="mailto:m45120121@gmail.com" className="text-base ">
          m45120121@gmail.com
        </a>{" "}
      </p>
    </div>
  );
};

export default Hero;
