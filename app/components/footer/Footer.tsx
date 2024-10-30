'use client';

import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="max-md:px-4 dark:bg-gray-800">
      {/* =======FOOTER TOP===========*/}
      <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100 overflow-hidden">
        <div className="container flex flex-col justify-center py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-2">
            
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <span className="self-center text-2xl font-semibold">
                <Image src="/logo-pics/saic_logo-modified.png" alt="NIT Dark Logo" height={130} width={130} />
              </span>
            </div>
            
            {/* Contact Us Section */}
            <div className="space-y-3">
              <h3 className="uppercase text-orange-600">Contact Us</h3>
              <div className="space-y-1">
                {/* Email */}
                <div className="mb-4">
                  <h3 className="text-orange-600">Mail</h3>
                  <Link href="mailto:saicell.nitdgp@gmail.com">saicell.nitdgp@gmail.com</Link>
                </div>
                <hr />
                
                {/* Location */}
                <div className="mt-4">
                  <h3 className="text-orange-600">Location</h3>
                  <p className="text-justify">
                    National Institute of Technology, Durgapur.
                    <br />
                    Durgapur-713209, West Bengal, INDIA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* ======COPYWRITE PART========= */}
      <div className="bg-slate-800 text-center text-white py-4">
      © {new Date().getFullYear()} NIT DURGAPUR. All rights reserved | Developed By SAI Cell developers
    </div>
    </div>
  );
}

export default Footer;
