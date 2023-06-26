import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const poppins = Poppins({ subsets: ["latin"],display: 'swap', weight: '500', style: 'normal' });

export const metadata = {
  title: "Yashvardhan Singh",
  description: "Full Stack Developer",
  image: "/profile.jpg",
  type: "website",
  siteName: "Yashvardhan Singh"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="night">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" href="/profile.jpg" sizes="any" />
        <link rel="favicon" href="/profile.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content=""
        />
      </head>
      <body
        className={
          poppins.className +
          " overflow-x-hidden mb-24 lg:mb-12 text-base-content"
        }
      >
        <div className="p-2 sticky z-50 bg-base-100 top-0">
          <div className="bg-primary text-primary-content rounded-xl md:flex w-[99.5%] mx-[1%]">
            <div className="flex-cols md:flex-1 justify-center text-center md:text-left">
              <Link className="btn btn-ghost normal-case text-xl" href="/">
                Yashvardhan Singh
              </Link>
            </div>
            <div className="flex md:flex-none">
              <ul className="menu menu-horizontal px-1 justify-center">
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/skills">Skills</Link>
                </li>
                <li>
                  <Link href="/education">Education</Link>
                </li>
                <li>
                  <Link href="/blogs">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}
        <div className="bg-base-100 fixed bottom-0 mb-3 w-full">
          <div className="w-full bg-primary flex justify-center rounded-xl text-primary-content">
            <div className="">
              <ul className="flex flex-wrap">
                <div className="lg:flex">
                  <li className="mx-2 my-1">
                    <p className="flex">
                      <a
                        href="https://github.com/pythonicboat"
                        target="_blank"
                        className="flex hover:scale-110 transition-all ease-in-out"
                      >
                        GitHub <FaGithub size={"1.5rem"} className="mx-2" />
                      </a>
                      |
                    </p>
                  </li>
                  <hr className="border-neutral border-t-[0.5px] lg:hidden" />
                  <li className="mx-2 my-1">
                    <p className="flex">
                      <a
                        href="https://twitter.com/pythonicboat"
                        target="_blank"
                        className="flex hover:scale-110 transition-all ease-in-out"
                      >
                        Twitter <FaTwitter size={"1.5rem"} className="mx-2" />
                      </a>
                      |
                    </p>
                  </li>
                </div>
                <div className="lg:flex">
                  <hr className="border-neutral border-t-[0.5px] lg:hidden" />
                  <li className="mx-2 my-1">
                    <p className="flex">
                      <a
                        href="https://www.linkedin.com/in/yashvardhan04/"
                        target="_blank"
                        className="flex hover:scale-110 transition-all ease-in-out"
                      >
                        LinkedIn <FaLinkedin size={"1.5rem"} className="mx-2" />
                      </a>
                    </p>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}