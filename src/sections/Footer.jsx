import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <section className="py-16 flex items-end">
      <p className="text-[15px] font-bold">
        Developed by <br />
        Brittany Chiang 2018{" "}
      </p>
      <div className="flex flex-1 justify-end gap-12">
        {socialLinks.map((link) => (
          <a
            href={link.href}
            className="uppercase text-[15px] font-bold text-sky-600"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;
