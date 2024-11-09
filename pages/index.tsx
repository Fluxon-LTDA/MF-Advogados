import Image from "next/image";

import Logo from "../public/logo.webp";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="flex flex-col items-center sm:justify-center gap-4 py-8 md:py-10 sm:bg-top md:bg-center lg:bg-center xl:bg-center"
        style={{
          backgroundImage: 'url("/fundo.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <Image
          priority
          alt="Logo"
          className="block sm:hidden"
          src={Logo}
          width={100}
        />
      </section>

      <section className="py-72 bg-white text-black">
        <div>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            omnis possimus esse veniam. Minus illum, reiciendis quia quis esse
            vero est rerum magni itaque ipsum, ipsam voluptatem eius illo
            voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est quo cumque natus, voluptates vel commodi doloremque, quasi fugit
            perspiciatis atque sit minus, doloribus mollitia magni id dolore
            reprehenderit veritatis tenetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Architecto totam quod, quidem adipisci
            commodi sit at excepturi facilis tempore, quis atque, accusantium
            quos numquam nulla hic suscipit aliquid quo corporis! Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Delectus ipsa ullam
            accusantium, non fugiat, quisquam laboriosam ipsam reprehenderit
            quia animi doloremque eos sint? Minima, veniam perferendis
            reiciendis ad expedita doloribus? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sequi, laudantium delectus! Aliquid
            placeat nulla doloribus suscipit deserunt nisi voluptatem. Fugit
            delectus nobis asperiores labore minima hic dignissimos, corporis
            accusantium ad? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem aliquid reprehenderit atque dicta ad temporibus
            minus odit praesentium laborum? Harum quas modi dolores quod saepe
            tenetur non explicabo deserunt aliquid. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Iste obcaecati blanditiis amet rerum
            dolores numquam animi, unde magnam illum laudantium expedita
            sapiente ad eaque aliquid itaque ipsam laborum dignissimos dolorum!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, molestias nam. Itaque ea tenetur, odit neque dolores,
            voluptas amet culpa est suscipit explicabo accusamus officia
            excepturi? Accusamus ea doloremque corrupti! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Impedit sunt iusto, nulla
            dolorum facere est. Numquam qui non voluptatum nulla alias.
            Doloremque incidunt expedita quia vel corrupti. Beatae, dolorem quo!
          </h1>
        </div>
      </section>

      <section className="py-72">
        <div>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            omnis possimus esse veniam. Minus illum, reiciendis quia quis esse
            vero est rerum magni itaque ipsum, ipsam voluptatem eius illo
            voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est quo cumque natus, voluptates vel commodi doloremque, quasi fugit
            perspiciatis atque sit minus, doloribus mollitia magni id dolore
            reprehenderit veritatis tenetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Architecto totam quod, quidem adipisci
            commodi sit at excepturi facilis tempore, quis atque, accusantium
            quos numquam nulla hic suscipit aliquid quo corporis! Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Delectus ipsa ullam
            accusantium, non fugiat, quisquam laboriosam ipsam reprehenderit
            quia animi doloremque eos sint? Minima, veniam perferendis
            reiciendis ad expedita doloribus? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sequi, laudantium delectus! Aliquid
            placeat nulla doloribus suscipit deserunt nisi voluptatem. Fugit
            delectus nobis asperiores labore minima hic dignissimos, corporis
            accusantium ad? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem aliquid reprehenderit atque dicta ad temporibus
            minus odit praesentium laborum? Harum quas modi dolores quod saepe
            tenetur non explicabo deserunt aliquid. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Iste obcaecati blanditiis amet rerum
            dolores numquam animi, unde magnam illum laudantium expedita
            sapiente ad eaque aliquid itaque ipsam laborum dignissimos dolorum!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, molestias nam. Itaque ea tenetur, odit neque dolores,
            voluptas amet culpa est suscipit explicabo accusamus officia
            excepturi? Accusamus ea doloremque corrupti! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Impedit sunt iusto, nulla
            dolorum facere est. Numquam qui non voluptatum nulla alias.
            Doloremque incidunt expedita quia vel corrupti. Beatae, dolorem quo!
          </h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
