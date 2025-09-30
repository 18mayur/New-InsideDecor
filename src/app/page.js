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
import ImageSlide from "@/components/ImageSlide";
import ImgSlider from "@/components/ImgSlider";

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
            <h1 className="text-xl font-[Sentient-Regular] text-center md:text-2xl lg:text-[2.5rem] font-bold leading-tight mb-2 font-sentient">
              Discover the magic <br /> of Australia
            </h1>
            <p className="text-xl font-sentient md:text-2xl mb-8">
              Where adventure meets wonder in the land down under.
            </p>
            <a
              href="#"
              className="inline-block bg-white hover:bg-white text-black font-medium px-4 py-2.5 rounded-[.5rem] transition text-[1rem] font-sentient"
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
      <Cards />
      {/* <section className="container mx-auto">
        <h2 className="text-[1.3rem]">Testimonials</h2>
        <ImgSlider/>
      </section> */}
      <section className="container mx-auto py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center md:mb-4">
            <div className="sm:max-w-lg text-center">
              <h2 className="text-2xl leading-none md:text-[2.35rem] font-bold mb-2">
                Testimonial
              </h2>
            </div>
          </div>

          <ImgSlider/>
        </div>
      </section>

      {/* <ImageSlide/> */}
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente
        aperiam alias ratione cum reprehenderit voluptates expedita commodi
        nulla officia magnam nisi illo in at, pariatur accusantium ad tenetur
        harum eos corrupti neque quaerat, nobis cumque? Culpa delectus,
        blanditiis odit esse rerum labore. Iure ea vel perspiciatis harum esse
        eius commodi quisquam amet laboriosam incidunt! Illum assumenda
        expedita, accusantium delectus laboriosam molestias sunt velit eum
        inventore voluptas harum blanditiis asperiores aliquam enim fugit
        dolorem doloribus nostrum eos perferendis quos architecto, obcaecati
        eveniet facilis praesentium. Corporis officiis dolorem suscipit delectus
        cum eos dolore quae placeat illum, possimus recusandae facere illo
        architecto nostrum cupiditate dolores quo ab fugit, minus debitis unde
        accusamus? Non placeat, omnis ipsam expedita distinctio illum, eaque
        laudantium iste reprehenderit assumenda ullam nisi, deserunt sapiente
        repudiandae. Facilis velit eveniet sed dolorum corporis ab, voluptas
        excepturi iusto itaque nemo eum amet neque fugit laborum distinctio
        accusamus adipisci reiciendis sint maiores veniam saepe. Quaerat ipsum
        facilis, quia veniam numquam veritatis exercitationem soluta sit,
        explicabo corporis, odit harum quas! Dicta voluptatem veritatis quaerat
        vitae, exercitationem rerum excepturi? Fuga rem velit laudantium, ipsa
        sed, illo provident nobis aperiam reiciendis dolorum doloribus corrupti
        enim totam voluptate vero non eos ipsum temporibus minima vel
        perferendis mollitia porro eligendi. Ex tempore architecto deleniti.
        Voluptas praesentium autem minus neque optio quia, laborum quis,
        provident maxime accusantium aliquid ab quibusdam odio magnam placeat
        odit recusandae illum a, alias officia dignissimos labore temporibus
        voluptatem! Provident ipsa aliquid illo iure aspernatur voluptatum
        doloremque dolore fugit! Mollitia magnam alias a quasi ab totam, facere
        iste unde vero quod culpa in et suscipit quis illum voluptas, nulla quia
        accusamus architecto quidem! Maxime dolores sint corrupti accusamus
        dolor, debitis laboriosam mollitia ad repellat doloribus maiores atque
        provident laborum harum beatae laudantium iste! Deleniti nesciunt, odio
        minima voluptatibus assumenda quisquam est facilis eos hic harum? Quasi
        a eaque, necessitatibus, molestiae iure magni vero dolorem error,
        facilis nesciunt numquam debitis doloremque corrupti praesentium
        provident sed ipsum nam! Eius tempore voluptatum eos fuga dolor magni
        labore velit nobis facere? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nulla accusamus similique animi aliquid architecto
        aspernatur, voluptates vel saepe beatae nihil mollitia a deserunt,
        laudantium accusantium reprehenderit itaque facere iste molestias
        repudiandae delectus dolore sit natus. Ducimus magni dolorem, quasi
        accusantium obcaecati molestiae maxime rerum natus harum neque cum
        facere sint dolor deserunt laudantium recusandae ratione unde aperiam
        odio? Molestiae molestias autem consectetur recusandae vitae magni.
        Dolores repellendus doloribus, natus voluptate non impedit inventore,
        necessitatibus unde blanditiis iste sapiente assumenda laborum eos
        tempora, incidunt excepturi perferendis quibusdam quas! Libero placeat
        iusto molestias voluptate, perspiciatis dolore vel repellendus repellat
        facere velit illo, sequi odio odit voluptas neque ex debitis obcaecati
        dolores dicta nesciunt beatae temporibus atque soluta facilis. Nisi vel
        obcaecati in fugiat eligendi repudiandae dolorem beatae omnis!
        Perferendis, molestias? Earum, voluptas voluptates ex autem aliquid enim
        dolorem laborum deleniti qui inventore tempora aut laboriosam, eos iste
        libero accusamus ullam id quidem cupiditate asperiores veritatis,
        adipisci porro? Corporis placeat laudantium eos iusto magni aspernatur
        ab fugit esse, labore debitis quas officia amet vitae! Saepe voluptates
        ad eius deserunt, vero ducimus repellat asperiores hic mollitia minus,
        autem, commodi assumenda! Earum corporis quas at tenetur explicabo
        doloribus minus magnam in quod natus enim fugiat eos nisi voluptate
        assumenda facilis animi a, inventore nostrum? Nesciunt rerum beatae
        eligendi ipsum quos laudantium eum est? Reiciendis doloremque, ullam
        consequuntur quo quibusdam tempore hic blanditiis laborum! Saepe
        voluptatem rerum atque repellendus impedit enim et. Quae velit
        perferendis voluptatem sed excepturi accusamus, blanditiis qui
        voluptatum officiis maiores quas? Et nostrum, facere natus debitis
        labore qui omnis illum modi distinctio mollitia voluptatibus rem,
        blanditiis odio totam quam vel dolore culpa doloribus odit corporis!
        Deleniti quasi dicta odit iusto vel aut autem delectus molestias dolores
        totam ut debitis repellendus suscipit tenetur doloribus vero magnam iure
        consectetur itaque, sequi dolor corrupti! Rerum delectus inventore
        deserunt optio nemo laudantium consectetur aspernatur ea nostrum iure
        earum sapiente, nihil recusandae assumenda quidem voluptatibus! Est
        soluta illum, debitis laudantium vel eum dolore unde nihil iusto
        accusamus corporis commodi tempore eos? Impedit labore, amet aut vel nam
        sapiente distinctio, quasi nulla, deserunt provident facere quidem?
        Explicabo nesciunt rem quam assumenda corrupti provident voluptatem fuga
        necessitatibus consequuntur quae tenetur beatae optio quia omnis autem,
        iusto quasi et! Ducimus aut corrupti suscipit ratione eveniet neque,
        quidem incidunt repudiandae ut impedit pariatur commodi hic voluptatum
        repellat ullam praesentium non unde ad illo eius delectus. Tempora
        ratione minus libero, a atque temporibus dolor sequi sed vel cumque,
        necessitatibus delectus dolore eligendi animi possimus cupiditate.
        Dolorum tenetur quia fugiat! Dolore sunt perspiciatis quam ab nobis eum
        incidunt obcaecati odit dolorem, eaque ratione ad consequatur doloribus
        deleniti ipsa vitae voluptates facilis nulla aut dolores labore amet!
        Laborum facilis sed perferendis odit rerum suscipit nesciunt nemo
        molestiae quae eius!
      </section>

      {/* Recent Articles  */}
      <section>
        
      </section>
    </>
  );
}
