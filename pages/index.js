import Image from "next/image";
import Slider from "../components/slider";
import Link from "next/link";
import Clients from "../components/client";
import Testimonials from "../components/testimonial";

import {
  FaAccessibleIcon,
  FaAddressBook,
  FaAdjust,
  FaBeer,
  FaDownload,
  FaSalesforce,
  FaVideo,
} from "react-icons/fa";
import Footprint from "../components/footprint";

export default function Home() {
  const rightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const blog = [
    {
      id: 1,
      name: "   how is ml related to block chain",
      logo: "/aiml2.jpg",
      desc: "  using AI and Big Data in Blockchain Technology: A step closer to the futureThere has been a number of changes in the IT world recently......",
    },
    {
      id: 2,
      name: "   how is ml related to block chain",
      logo: "/aiml.jpg",
      desc: "  Building solutions using artificial intelligence, machine learning and blockchain technologies. Artificial intelligence and machine learning can automate important, but manual and time-consuming tasks, allowing employees to focus on higher-value work.....",
    },
    {
      id: 3,
      name: "   how is ml related to block chain",
      logo: "/aiandml.jpg",
      desc: "  Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis of data purposes......................... ",
    },
    {
      id: 4,
      name: "   how is ml related to block chain",
      logo: "/aiandml.jpg",
      desc: "  Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis of data purposes...................",
    },
  ];

  return (
    <>
      <section>
        <Slider />
      </section>
      <section className="md:pt-24 md:pb-32 text-zinc-90 bg-coustom1">
        <div className="lg:container p-4 mx-auto">
          <div className="flex gap-4 justify-center mb-4">
            <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
            <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-black  text-center">
              Our Offerings
            </h1>
            <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-4 pt-4 lg:pt-8">
            <Link href="/services#turnkey-projects">
              <div className="w-auto relative">
                <div className="relative w-full lg:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-150 hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    objectFit="cover"
                    src="/services1.jpg"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-40 w-full p-4 ">
                    <h1 className="text-4xl tracking-wide drop-shadow-md   text-white z-10 w-full">
                      Knowledge <br /> Services
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services#product-development">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-300 hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/knowledgeserv.jpg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-40 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md  text-white z-10 w-full">
                      Staffing <br /> Services
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services#contract-manufacturing">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm ease-linear duration-300 hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/itserv.jpg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-40 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md   text-white z-10 w-full">
                      IT <br /> Services
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* clints data */}
      <section>
        <Clients />
      </section>

      <section
        className="text-black bg-green body-font  overflow-hidden lg:py-12"
        style={{
          backgroundImage: `url(${"/whyworkwithus.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container  px-5  py-10 mx-auto  lg:rounded-lg">
          <div className="lg:w-full mx-auto flex flex-col lg:flex-row lg:gap-80 ">
            <div className="lg:w-1/2 w-full lg:mr-9 lg:py-6 mt-6 lg:mt-0 ">
              <h1 className="text-white text-3xl title-font text-center lg:mr-16  font-medium mb-1 ">
                Why work with us
              </h1>

              <p className="mt-4 lg:mr-16 text-justify leading-relaxed text-white ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                adipisci beatae expedita iusto alias nostrum ipsam asperiores
                labore commodi delectus aut, vitae maxime similique accusantium
                voluptate. Rem reprehenderit, veritatis vel vitae delectus
                ullam. Odio veritatis, voluptatum natus cumque doloribus
                eligendi neque dolorum ea reiciendis sequi, nobis, inventore
                alias iste nam optio excepturi? Voluptas cumque obcaecati magnam
                cupiditate. Unde laboriosam distinctio eaque adipisci ut
                exercitationem amet tempora, cupiditate aspernatur hic
                doloremque non, dolorem debitis autem impedit explicabo optio
                neque itaque? Tempore numquam in, quidem tempora dignissimos
                assumenda blanditiis a repellat fuga voluptas mollitia labore
                quisquam est sit maiores fugit reprehenderit ipsa?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* achievements */}
      <section>
        <Footprint />
      </section>

      <section className="text-white body-font bg-blue">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex gap-6 justify-center mb-20">
            <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-white"></span>
            <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white  text-center">
              Knowledge Services
            </h1>
            <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-white"></span>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaBeer size={40} color="white" />
                </div>
                <h2 className="text-lg text-white text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-white text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-black  font-bold hover:text-base p-1 underline decoration-red-white rounded-sm text-white">
                    Read more..
                  </button>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaBeer size={40} color="white" />
                </div>
                <h2 className="text-lg text-white text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-white text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-black  font-bold hover:text-base p-1 underline decoration-red-white rounded-sm text-white">
                    Read more..
                  </button>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaAdjust size={40} color="white" />
                </div>
                <h2 className="text-lg text-white text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-white text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-black  font-bold hover:text-base p-1 underline decoration-white rounded-sm text-white">
                    Read more..
                  </button>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaAddressBook size={40} color="white" />
                </div>
                <h2 className="text-lg text-white text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-white text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-black  font-bold hover:text-base p-1 underline decoration-white rounded-sm text-white">
                    Read more..
                  </button>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaAccessibleIcon size={40} color="white" />
                </div>
                <h2 className="text-lg text-white text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-white text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-black  font-bold hover:text-base p-1 underline decoration-white rounded-sm text-white">
                    Read more..
                  </button>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaBeer size={40} color="white" />
                </div>
                <h2 className="text-lg text-white text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-white text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-black  font-bold hover:text-base p-1 underline decoration-white rounded-sm text-white">
                    Read more..
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="flex mx-auto mt-16 text-black bg-orange border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Read more
          </button> */}
        </div>
      </section>

      <section className="text-white body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex gap-6 justify-center mb-20">
            <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
            <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-black text-center">
              Talent as a service
            </h1>
            <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaBeer size={40} color="red" />
                </div>
                <h2 className="text-lg text-black text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-black text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-red-700 font-bold  hover:text-base p-1 underline decoration-red-700 rounded-sm text-black">
                    Read more..
                  </button>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaBeer size={40} color="red" />
                </div>
                <h2 className="text-lg text-black text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-black text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-red-700 font-bold  hover:text-base p-1 underline decoration-red-700 rounded-sm text-black">
                    Read more..
                  </button>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaAdjust size={40} color="red" />
                </div>
                <h2 className="text-lg text-black text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-black text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-red-700 font-bold  hover:text-base p-1 underline decoration-red-700 rounded-sm text-black">
                    Read more..
                  </button>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaAddressBook size={40} color="red" />
                </div>
                <h2 className="text-lg text-black text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-black text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-red-700 font-bold  hover:text-base p-1 hover:underline decoration-red-700 rounded-sm text-black">
                    Read more..
                  </button>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaAccessibleIcon size={40} color="red" />
                </div>
                <h2 className="text-lg text-black text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-black text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-red-700 font-bold  hover:text-base p-1 hover:underline decoration-red-700 rounded-sm text-black">
                    Read more..
                  </button>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" border-gray-200 p-6 rounded-lg">
                <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                  <FaBeer size={40} color="red" />
                </div>
                <h2 className="text-lg text-white text-center  mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-black text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  facilis, fugit aperiam minima voluptatum sunt nostrum,
                  delectus libero reiciendis commodi sed quibusdam obcaecati
                  praesentium quidem dolorum autem sapiente quod laudantium.
                </p>
                <div className="flex justify-center">
                  <button className="hover:text-red-700 font-bold  hover:text-base p-1 hover:underline decoration-red-700 rounded-sm text-black">
                    Read more..
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="flex mx-auto mt-16 text-black bg-orange border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Read more
          </button> */}
        </div>
      </section>

      <section>
        <Testimonials />
      </section>

      {/* blogs */}

      <section className="text-black bg-white body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex gap-4 justify-center mb-4">
            <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
            <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-black  text-center">
              Blogs
            </h1>
            <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
          </div>

          <div className="flex  flex-wrap gap-1 ">
            {blog.map(({ name, logo, id, desc }) => {
              return (
                <div
                  key={id}
                  className="w-fit flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative"
                >
                  <div>
                    <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                      <Image
                        className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[34rem]"
                        src={logo}
                        width={400}
                        height={300}
                        alt=""
                      ></Image>
                    </div>

                    <h1 className="title-font sm:text-2xl text-xl text-left font-medium text-gray-900 mb-3">
                      {name}
                    </h1>
                    <p className="leading-relaxed mt-10 text-left ">
                      {desc}
                    </p>
                  </div>
                  <Link href={"/blog/blogs"}>
                    <p className="text-black font-bold ease-in duration-300  hover:text-orange  flex justify-center items-center text-left hover:cursor-pointer">
                      Read More
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
