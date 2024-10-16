import { experience, skills } from "../constants";

const About = () => {
  return (
    <section className="px-24">
      <div className="flex gap-16 items-start py-20">
        <h2 className="w-2/6 text-end uppercase font-bold text-sky-600 tracking-widest">
          Latar Belakang
        </h2>
        <div className="flex flex-1 flex-col gap-8">
          <p className="text-slate-700 font-light tracking-wide">
            Saya adalah seorang mahasiswa yang memiliki ketertarikan besar dalam
            bidang teknologi, khususnya pengembangan web di sisi frontend.
            Selama perjalanan akademik, saya telah mengembangkan kemampuan dalam
            pemrograman dan desain antarmuka pengguna (UI) untuk membangun
            aplikasi yang interaktif dan responsif.
          </p>
          <p className="text-slate-700 font-light tracking-wide">
            Sebagai seorang frontend developer, saya menguasai berbagai
            teknologi inti seperti HTML, CSS, dan JavaScript, serta beberapa
            kerangka kerja (framework) dan pustaka modern seperti React dan
            Tailwind CSS. Saya selalu berusaha memperdalam keterampilan teknis
            dan mengikuti tren terbaru di industri pengembangan web.
          </p>
        </div>
      </div>

      <div className="flex gap-16 py-20">
        <h2 className="w-2/6 text-end uppercase font-bold text-sky-600 tracking-widest">
          Skills
        </h2>
        <div className="flex flex-1 justify-between">
          {skills.map((skill) => (
            <div key={skill.label}>
              <p className="uppercase font-bold text-[15px]">{skill.label}</p>
              {skill.items.map((item) => (
                <p
                  key={item}
                  className="text-slate-700 text-[15px] font-light leading-6"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-16 py-20">
        <h2 className="w-2/6 text-end uppercase font-bold text-sky-600 tracking-widest">
          Experience
        </h2>
        <div className="flex flex-1 flex-col-reverse">
          {experience.map((item) => (
            <div key={item.label} className="flex justify-between mb-6">
              <div className="leading-[26px]">
                <p className="text-[15px] font-bold">{item.label}</p>
                <p className="text-[15px] font-thin">{item.desc}</p>
              </div>
              <p className="font-mono text-xs font-thin text-slate-700">
                {item.arround}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
