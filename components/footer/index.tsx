import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#181619] flex justify-center py-8">
      <div className="grid grid-cols-3 gap-4 bg-[#181619] max-w-6xl w-full">
        <div className="flex flex-col justify-center items-start">
          <p className="text-sm font-light text-white">48 99999.9999 &nbsp;</p>
          <p className="text-sm font-light text-white">
            R. Henrique Lage, 420 - Centro • Criciúma - SC • 88801-010
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://static.wixstatic.com/media/d17ec4_bfc1d18db96842de88e13dd5cc46feda~mv2.png/v1/fill/w_272,h_186,al_c,lg_1,q_85,enc_auto/logo-ipb.png"
            alt="logo-ipb.png"
            className="w-[136px] h-[93px] object-cover"
          />
        </div>
        <div className="flex justify-center items-center">
          <ul aria-label="Redes sociais" className="list-none p-0 flex gap-4">
            <li>
              <a
                href="https://www.instagram.com/igrejapresbiterianadecriciuma/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram - White Circle"
              >
                <img
                  src="https://static.wixstatic.com/media/17f992598001435083075924d7b6ae80.png/v1/fill/w_62,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/17f992598001435083075924d7b6ae80.png"
                  alt="Instagram - White Circle"
                  className="w-8 h-8 object-cover"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/IPBCriciuma/?locale=pt_BR"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook - Círculo Branco"
              >
                <img
                  src="https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_62,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0678ef25486466ba65ef6ad47b559e1.png"
                  alt="Facebook - Círculo Branco"
                  className="w-8 h-8 object-cover"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
