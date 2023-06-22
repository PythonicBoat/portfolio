"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-base-100 overflow-x-clip">
      <div className="flex justify-center py-5 bg-base-100" data-aos="zoom-in">
          <div
            className="absolute bg-neutral pb-5 text-neutral-content rounded-box text-xl w-11/12 mx-2 lg:w-1/2 border-primary/50 border"
            id="window"
          >
            <handle>
              <div className="w-full bg-primary/50 rounded-t-box cursor-move flex justify-end px-2 py-1" id="windowheader">
              <div className="avatar placeholder mx-1">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-3">
                  <span className="text-xs"></span>
                </div>
              </div>
              <div className="avatar placeholder mx-1">
                <div className="bg-warning text-neutral-content rounded-full w-3">
                  <span className="text-xs"></span>
                </div>
              </div>
              <div className="avatar placeholder mx-1">
                <div className="bg-error text-neutral-content rounded-full w-3">
                  <span className="text-xs"></span>
                </div>
              </div>
              </div>
            </handle>
            <pre data-prefix="$" className="text-success ml-3">
              <code>$ sh about_me</code>
            </pre>
            <div className="lg:flex lg:px-8">
              <div className="flex justify-center lg:py-5" data-aos="zoom-in">
                <div className="avatar hover:scale-110 transition-all ease-in-out">
                  <div className="w-24 lg:w-48 rounded-full hover:rounded-xl border-primary hover:border-none ring-primary ring-offset-base-100 ring-offset-4 transition-all ease-in-out">
                    <Image
                      src="/profile.jpg"
                      alt=""
                      width={150}
                      height={150}
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full m-auto">
                <div className="flex w-full justify-center" data-aos="zoom-in">
                  <h1 className="text-2xl lg:text-6xl font-bold mx-12">
                    Yashvardhan Singh
                  </h1>
                </div>
                <div className="flex w-full justify-center" data-aos="zoom-in">
                  <p id="element" className="text-xl lg:text-2xl italic"></p>
                </div>
              </div>
            </div>
            <p className="ml-5 text-base lg:text-lg leading-tight">
              a.k.a Pythonicboat
              <br />
              I&apos;m a passionate Backend and Cloud Developer from India 🇮🇳
              <br />
              Sophomore | B.Tech IT @{" "}
              <a
                href="https://kiit.ac.in/"
                target="_blank"
                className="underline"
              >
                KIIT University
              </a>
              <br />
              Core Tech Team Member @{" "}
              <a
                href="https://dsckiit.in/"
                target="_blank"
                className="underline"
              >
                GDSC
              </a>
              <a className="mx-1">and</a>
              @{" "}
              <a
                href="https://mlsa.kiitians.com/"
                target="_blank"
                className="underline"
              >
                MLSA
              </a>
            </p>
            <pre data-prefix="$" className="text-success ml-3 mt-5">
              <code>$ sh contributions</code>
            </pre>           
             {/* <Github_Graph/> */}
             <div className="text-base text-center">
              Feeling Techy enough? Check out the <Link href="/cli" className="italic underline">CLI version</Link> of my portfolio.
             </div>

          </div>
      </div>
    </main>
  );
}