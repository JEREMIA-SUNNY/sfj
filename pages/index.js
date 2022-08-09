import Image from "next/image";
import Slider from "../components/slider";
import Link from "next/link";
import Clients from "../components/client";
import Testimonials from "../components/testimonial";
import KnowledgeCard from "../components/knowledgecard";

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
import Itservicescard from "../components/itservicescard";

export default function Home() {
  const Itservice = [
    {
      name: "Java Stack",
      icon: <FaAccessibleIcon size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 1,
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
    },
    {
      name: "Hadoop",
      icon: <FaAddressBook size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 2,
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
    },
    {
      name: "React JS ",
      icon: <FaAdjust size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 3,
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
    },
    {
      name: "Snowflake",
      icon: <FaBeer size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 4,
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
    },
    {
      name: "Teradata",
      icon: <FaDownload size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 5,
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
    },
    {
      name: "Azure Data Bricks/ADF ",
      icon: <FaVideo size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 6,
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
    },
    {
      name: "SAP BODS ",
      icon: <FaVideo size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 7,
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
    },
    {
      name: "SAP SuccessFactors ",
      icon: <FaVideo size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 8,
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
    },
    {
      name: " Salesforce",
      icon: <FaVideo size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 9,
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
    },
    {
      name: "Oracle/OIS/Finance",
      icon: <FaVideo size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 10,
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
    },
  ];
  const Knowledge = [
    {
      name: "Testing",
      icon: "/know/.png",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 1,
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      dur: "1 year",
    },
    {
      name: "Dot net",
      icon: "/know/net.png",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 2,
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      dur: "1 year",
    },
    {
      name: "Java",
      icon: "/know/java.png",

      id: 3,

      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      dur: "1 year",
    },
    {
      name: "SAP",
      icon: "/know/sap.png",

      id: 4,
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      dur: "1 year",
    },
    {
      name: "AZURE",
      icon: "/know/azure.png",

      id: 5,
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      dur: "1 year",
    },
    {
      name: "Mainframe",
      icon: "/know/mainframe.png",

      id: 6,
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      dur: "1 year",
    },
    {
      name: "Service Now",
      icon: "/know/Service.png",

      id: 7,
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      dur: "1 year",
    },
    {
      name: "Siebel",
      icon: "/know/siebel.png",

      id: 8,
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      dur: "1 year",
    },
  ];

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
      logo: "/aiml2.jpg",
      desc: "  Building solutions using artificial intelligence, machine learning and blockchain technologies. Artificial intelligence and machine learning ....",
    },
    {
      id: 3,
      name: "   how is ml related to block chain",
      logo: "/aiandml.jpg",
      desc: "  Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis of data ........... ",
    },
    {
      id: 4,
      name: "   how is ml related to block chain",
      logo: "/aiandml.jpg",
      desc: "  Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis ...........",
    },
  ];
  const whyworkwithus = [
    {
      id: 1,
      text: "Cost-effective and just-in-time staffing through a strong network of technology professionals.",
    },
    {
      id: 2,
      text: "  Right-sized partner for all your talent transformation needs. Build your future-ready workforce.",
    },
    {
      id: 3,
      text: " Deep expertise in digital transformations that can add disproportionate value for your business.",
    },
    {
      id: 4,
      text: "  Specialists in Enterprise IT Strategy, Consulting, and Managed services via SAP and Oracle.",
    },
    {
      id: 5,
      text: "   A strong portfolio of capabilities and a proven track record across 8 industries across the globe.",
    },
    {
      id: 6,
      text: "   An organization driven by empathy, integrity, expertise and focused on delivering consistent value.",
    },
  ];
  const offerings = [
    {
      id: 1,
      name1: " Knowledge  ",
      name2: "As A Service",
      images: "/ouroffering/knowledge1.png",
      links: "/solutions/knowledge",
    },
    {
      id: 2,
      name1: "Talent ",
      name2: "As A Service",
      images: "/ouroffering/talent1.png",
      links: "/solutions/staffing",
    },
    {
      id: 1,
      name1: "IT  ",
      name2: "Services",
      images: "/ouroffering/it1.png",
      links: "/solutions/itservices",
    },
  ];

  return (
    <>
      <section>
        <Slider />
      </section>
      <section className="md:pt-14 md:pb-10 text-zinc-90 bg-white">
        <div className="lg:container p-4 mx-auto">
          <div className="flex gap-4 justify-center mb-10">
            <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
            <h1 className="text-3xl  capitalize lg:text-4xl text-black  text-center">
              Our Offerings
            </h1>
            <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-4 pt-4 lg:pt-8">
            {offerings.map(({ name1, name2, images, id, links }) => (
              <Link key={id} href={links}>
                <div className="w-auto relative">
                  <div className="relative w-full lg:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-150 hover:scale-[1.02] transition-all cursor-pointer">
                    <Image
                      layout="fill"
                      alt=""
                      objectFit="cover"
                      src={images}
                    />
                    <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                    <div className="flex items-center justify-between z-40 w-full p-4 ">
                      <h1 className="text-4xl tracking-wide drop-shadow-md   text-white z-10 w-full">
                        {name1} <br /> {name2}
                      </h1>
                      {rightIcon}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* clints data////////////////////////////////////////////////////////// */}
      <section>
        <Clients />
      </section>
      {/* whyworkwithus/////////////////////////////////////////////////// */}
      <section
        className="text-black bg-green body-font  overflow-hidden lg:py-12"
        style={{
          backgroundImage: `url(${"whywork.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" container mx-auto  lg:rounded-lg text-left">
          <div className="lg:w-full mx-auto flex flex-col lg:flex-col ">
            <div className="lg:w-full w-full lg:mr-9  mt-6 lg:mt-0 ">
              <div className="w-full flex gap-4 lg:justify-center ">
                <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-white"></span>
                <h1 className=" capitalize text-3xl lg:text-4xl  text-white text-center ">
                  Why Work With Us
                </h1>
                <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-white"></span>
              </div>
            </div>
            <div className="p-10">
              <ul className="grid lg:grid-cols-3 grid-cols-1 lg:p-5 lg:gap-14 ">
                {whyworkwithus.map(({ text, id }) => {
                  return (
                    <li
                      key={id}
                      className="mt-4 text-lg text-center lg:p-0 p-5 leading-relaxed text-white "
                    >
                      {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* achievements */}
      <section>
        <Footprint />
      </section>

      <section className="text-black md:pt-14 md:pb-10 pt-7 pb-5 body-font bg-coustom1">
        <div className="container px-5  mx-auto">
          <div className="flex gap-6 justify-center mb-10">
            <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
            <h1 className="text-3xl capitalize lg:text-4xl text-black text-center">
              Knowledge As A service
            </h1>
            <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
          </div>
          <div className="md:grid md:grid-cols-4   flex flex-col -m-4">
            {Knowledge.map(
              ({ name, icon, description, id, mode, Levels, dur }) => {
                return (
                  <KnowledgeCard
                    key={id}
                    name={name}
                    icon={icon}
                    description={description}
                    id={id}
                    mode={mode}
                    Levels={Levels}
                    dur={dur}
                  />
                );
              }
            )}
          </div>
          {/* <button className="flex mx-auto mt-16 text-black bg-orange border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Read more
          </button> */}
        </div>
      </section>

      <section className="text-white md:pt-14 pt-7 pb-5 md:pb-10 body-font bg-blue">
        <div className="container px-5  mx-auto">
          <div className="flex gap-6 justify-center mb-10">
            <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-white"></span>
            <h1 className="text-3xl capitalize lg:text-4xl text-white text-center">
              Talent as a service
            </h1>
            <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-white"></span>
          </div>
          <div className="md:grid md:grid-cols-5  flex flex-col -m-4">
            {Itservice.map(({ name, icon, description, id, type, role }) => {
              return (
                <Itservicescard
                  key={id}
                  name={name}
                  icon={icon}
                  description={description}
                  id={id}
                  type={type}
                  role={role}
                />
              );
            })}
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

      <section className="text-black bg-coustom1 body-font md:pt-14 md:pb-10 pt-7 pb-5">
        <div className="container px-5  mx-auto">
          <div className="flex gap-4 justify-center mb-10">
            <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
            <h1 className="text-3xl  capitalize lg:text-4xl text-black  text-center">
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
                    <p className="leading-relaxed mt-10 text-left ">{desc}</p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Link href={"/blog/blogs"}>
                      <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange  flex justify-center items-center text-left hover:cursor-pointer">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
