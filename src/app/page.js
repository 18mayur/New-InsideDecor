"use client";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/Images/logo.jpg";
import sample1 from "../../public/Images/kitchen-4043098_1280.jpg";
import icon1 from "../../public/icons/calculator.png";
import icon2 from "../../public/icons/certificate.png";
import "./style.css";
import Cards from "@/components/Cards";
import { ImageSlider } from "@/components/ImageSlider";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="relative flex justify-center min-h-72 md:min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gray-500 overflow-hidden">
          <img
            src="/Images/test.avif"
            alt="Australia beach sunset"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        {/* Navigation */}
        <Navbar scroll={scrolled} />
        {/* Hero Content */}
        <div className="relative container mx-auto px-4 flex items-center justify-center h-full min-h-72 md:min-h-screen z-10">
          <div className="max-w-2xl flex flex-col items-center text-white mt-16 md:mt-0 md:pt-20 lg:pt-0">
            <span className="text-[0.875rem] md:text-2xl mb-1">welcome</span>
            <h1 className="text-xl font-[Sentient-Regular] text-center md:text-2xl lg:text-3xl font-bold leading-tight mb-2">
              Discover the magic <br /> of Australia
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Where adventure meets wonder in the land down under.
            </p>
            <a
              href="#"
              className="inline-block bg-white hover:bg-white text-black font-medium px-4 py-2.5 rounded-[.5rem] transition text-[1rem]"
            >
              Our Projects
            </a>
          </div>
        </div>
      </header>
      <section className=" bg-[#f2f1ed]">
        <div className="main container mx-auto grid grid-cols-1 md:grid-cols-2 px-8 py-6">
          <div className="flex flex-col gap-[3rem] py-3">
            <div className="flex flex-col gap-[1rem]">
              <h4 className="text-[1rem] md:text-[1.125rem]">
                Interior design team
              </h4>
              <h3 className="text-[1rem] md:text-[1.5rem]">
                Design dreams come alive!
              </h3>
            </div>
            <div className="flex flex-col  ">
              <div className="icons flex items-center gap-5">
                <Image src={icon1} alt="" width={32} height={32} />
                <span>Flexible Design Packages</span>
              </div>
              <div className="icons flex items-center gap-5">
                <Image src={icon2} alt="" width={32} height={32} />
                <span>Flexible Design Packages</span>
              </div>
              <div className="icons flex items-center gap-5">
                <Image src={icon1} alt="" width={32} height={32} />
                <span>Flexible Design Packages</span>
              </div>
              <div className="icons flex items-center gap-5">
                <Image src={icon2} alt="" width={32} height={32} />
                <span>Flexible Design Packages</span>
              </div>
            </div>
          </div>
          <div className="col">
            <Image
              className="rounded-2xl h-fit"
              src={sample1}
              alt="sample image"
            />
          </div>
        </div>
      </section>
      <Cards/>
      {/* <section className="container mx-auto py-8 flex gap-[3rem] flex-col">
        <div className="flex flex-col justify-center gap-2 items-center">
          <h2 className="md:text-[2.4rem]">Our design philosophy</h2>
          <h4 className="md:text-[1rem]">
            Innovative solutions for every home and budget
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div class="col-span-6 flex-col bg-[url('/Images/inside-2600919_1280.jpg')] px-4 py-5 bg-cover bg-no-repeat rounded-xl bg-center gap-3 bg-black/40 ">
            <div className="mb-3">
              <Image
                src={logo}
                className="rounded-full"
                width={42}
                height={42}
              />
            </div>
            <div className="flex flex-col gap-2.5 ">
              <h3 className="text-[2rem] leading-[2.6rem] font-bold text-[#fff]">
                Budget-friendly design solutions
              </h3>
              <p className="text-[1.125rem]  text-[#fff] leading-[1.25rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                nihil excepturi temporibus.
              </p>
            </div>
            <div className="mt-2">
              <button>btn</button>
            </div>
          </div>
          <div class="col-span-3 flex-col bg-[url('/Images/furniture-1840463_1920.jpg')] px-4 py-5 bg-cover bg-no-repeat rounded-xl bg-center gap-3 bg-black/40">
            <div className="mb-3">
              <Image
                src={logo}
                className="rounded-full"
                width={42}
                height={42}
              />
            </div>
            <div className="flex flex-col gap-2.5 ">
              <h3 className="text-[1.82rem] leading-[2.2rem] font-bold text-[#fff]">
                Budget-friendly design solutions
              </h3>
              <p className="text-[1.125rem]  text-[#fff] leading-[1.25rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                nihil excepturi temporibus.
              </p>
            </div>
            <div className="mt-2">
              <button>btn</button>
            </div>
          </div>
          <div class="col-span-3 flex-col bg-[url('/Images/kitchen-g1bea9c716_1920.jpg')] px-4 py-5 bg-cover bg-no-repeat rounded-xl bg-center gap-3 bg-black/40">
            <div className="mb-3">
              <Image
                src={logo}
                className="rounded-full"
                width={42}
                height={42}
              />
            </div>
            <div className="flex flex-col gap-2.5 ">
              <h3 className="text-[1.82rem] leading-[2.2rem] font-bold text-[#fff]">
                Budget-friendly design solutions
              </h3>
              <p className="text-[1.125rem]  text-[#fff] leading-[1.25rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                nihil excepturi temporibus.
              </p>
            </div>
            <div className="mt-2">
              <button>btn</button>
            </div>
          </div>
        </div>
      </section> */}
      <ImageSlider/>
      <section>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          harum labore quas libero eaque est quos quasi! Vel, excepturi nulla
          sit sed laborum rerum minus nobis magnam possimus? Autem fugit illo
          voluptatem nostrum repudiandae sequi possimus aliquid ipsam nam
          laborum iusto consequatur porro fuga eaque minima quas ipsum facere
          distinctio voluptates tempora, vel beatae exercitationem. Dicta sed
          dolor veritatis explicabo! Praesentium corrupti reprehenderit
          provident exercitationem facere aspernatur sit, libero maxime
          voluptatem repudiandae expedita quasi numquam? Voluptatibus
          consequatur eligendi asperiores earum repellat temporibus fugit,
          laboriosam facere in distinctio ipsum beatae et? Nihil, quibusdam.
          Veritatis expedita ad praesentium sed, vel nam rerum porro ex possimus
          quam voluptatem nostrum amet incidunt, ut nulla eos laborum similique
          error dicta quis? Corrupti officiis commodi porro saepe voluptatum
          veritatis id. Aut, illo nesciunt non similique qui fuga molestiae
          voluptatum impedit error quam rem ea possimus adipisci delectus
          consequuntur! Maiores error nesciunt veniam possimus temporibus
          consequuntur deleniti molestiae, facilis vel laudantium ex vitae?
          Laborum consequatur qui accusamus fugiat quisquam corrupti! Veritatis
          eos, debitis similique velit nisi consequatur nulla neque. Natus quam
          ab velit maxime mollitia blanditiis ducimus deserunt dolorem iusto
          dignissimos labore, molestias, atque eius, placeat quos non sed
          praesentium animi sapiente sit! Quaerat, nam in. Suscipit voluptatibus
          modi adipisci, quod quam nihil ea, est recusandae cumque maiores
          nostrum tempore delectus assumenda dolore nisi voluptatum consequuntur
          officia error? Natus voluptas assumenda doloremque voluptatibus
          nostrum est ad totam facere deleniti consequatur excepturi, omnis
          ducimus tenetur aliquam? Omnis, laborum eius quod accusamus voluptatem
          nisi. Corrupti pariatur placeat atque fugit tempore, tempora aliquam
          ducimus corporis odio, deleniti quis suscipit natus ipsa. Accusamus
          corrupti id eveniet laudantium, odit provident! Illo, fugiat doloribus
          ipsam, nam quidem neque, provident dolorum ut saepe illum ullam
          assumenda quo voluptatibus molestias eius minus distinctio consectetur
          vero nostrum architecto soluta! Magnam aspernatur quam sint
          reprehenderit. Nostrum consequatur labore corrupti minima nam odio
          sapiente facere perferendis quae. Facilis ducimus cupiditate nihil
          consequuntur voluptatem hic! Ut possimus quidem deserunt animi
          perferendis vel, aspernatur consequatur modi, itaque iusto voluptas
          sit magni, nemo quos placeat excepturi dolorem doloribus ullam
          tempora. Nulla possimus sint impedit unde obcaecati explicabo ut
          corrupti accusamus sequi veniam maxime eum deleniti ipsa cupiditate
          magnam illo quis sed, repellat quo dolor ex. Vitae assumenda, in qui
          natus ipsa, ipsum ducimus illo quod similique eius voluptatibus, est
          quo quasi adipisci. Ea itaque animi obcaecati deserunt quis rerum
          accusantium odit nemo, omnis id, voluptatum molestiae blanditiis
          laborum saepe, dolores atque provident repellat numquam sit velit
          nulla! Exercitationem veritatis voluptas beatae amet ad, tempora omnis
          deleniti vel fugit architecto consectetur voluptatem nemo quam
          temporibus illum minima, at reprehenderit autem. Illum velit magnam
          non placeat delectus dicta quos unde veritatis hic maiores temporibus,
          saepe voluptatum error at facere libero magni doloremque suscipit
          quasi doloribus quae, odit vel cupiditate soluta? Aliquam corrupti id
          cum, a voluptates itaque laborum. Mollitia saepe vitae doloribus
          soluta voluptatibus voluptate natus pariatur, repudiandae ab.
          Possimus, libero! Nisi officiis dolorem deserunt tenetur earum cum
          laboriosam amet harum impedit neque, suscipit doloribus maxime est
          ducimus necessitatibus dignissimos blanditiis, perferendis eos! Error
          ratione sunt iusto, voluptatem aliquam autem aperiam impedit
          temporibus tempore laboriosam, officia, corrupti voluptatum natus non
          laudantium fuga soluta dolorem animi ipsa id optio? Aperiam, soluta
          numquam quibusdam vitae eveniet quos natus fugit veniam quasi labore
          dolorem ratione quas voluptatibus, officia dolores velit accusamus
          aspernatur et exercitationem? Architecto repudiandae, non atque
          recusandae ea minus repellendus rem aut ipsum odio quasi asperiores.
          Nam quia deserunt aliquam?
        </p>
      </section>
    </>
  );
}
