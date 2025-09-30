import React from "react";
import footerLogo from "../../assets/logo.png"; 
import Banner from "../../assets/website/footer-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Important Links",
    links: ["About Us", "Careers", "Blog", "Press"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Shop",
    links: ["Men", "Women", "Kids", "Accessories"],
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mt-20">
      <div className="container">
        {/* Footer grid */}
        <div className="grid md:grid-cols-4 gap-8 px-4 py-10">
          {/* Company details */}
          <div>
            <img src={footerLogo} alt="Logo" className="h-12 mb-4" />
            <h1 className="text-2xl font-bold">Shopsy</h1>
            <p className="text-sm text-gray-300 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              mollitia.
            </p>
          </div>

          {/* Footer Links */}
          {FooterLinks.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="hover:text-primary cursor-pointer transition-colors"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Shopsy. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
