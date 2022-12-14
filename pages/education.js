import Image from "next/image";
import Link from "next/link";
import CoursesCard from "../components/coursescard";

function Education() {
  // const careerdata = [
  //   {
  //     id: 1,
  //     title: "Testing",
  //     mode: "Hybrid (Online + Offline)",
  //     Levels: "Beginner, Advanced",
  //     point: [
  //       { name: "Introduction to software testing" },
  //       { name: "Verification and validation." },
  //       { name: "Define functional and non-functional testing" },
  //       { name: "Overview of software development life cycle" },
  //       { name: "UI vs API testing" },
  //       { name: "Manual vs Automated testing" },
  //       { name: "Overview of writing test cases for UI and API" },
  //       { name: "Will get clear picture on security testing" },
  //     ],
  //     dur: " 1-3 months",
  //   },
  //   {
  //     id: 2,
  //     title: "DotNet",
  //     mode: "Hybrid (Online + Offline)",
  //     Levels: "Beginner, Advanced",
  //     point: [
  //       { name: "Introduction to .Net Framework" },
  //       { name: "Introduction to c# and oops using c#.Net" },
  //       { name: " Window forms using c#.Net " },
  //       { name: "ADO.NET-Data access from SQL" },

  //       { name: "Collections and Assemblies" },
  //       { name: "ASP.NET" },
  //       { name: "Web server controls" },

  //       { name: "LINQ, Web Architecture" },
  //     ],
  //     dur: " 1-3 months",
  //   },
  //   {
  //     id: 3,
  //     title: "Java",
  //     mode: "Hybrid (Online + Offline)",
  //     Levels: "Beginner, Advanced",
  //     point: [
  //       { name: "Introduction to java" },
  //       { name: "Variables and type" },
  //       { name: "Control flow" },
  //       { name: "Classes and interfaces" },
  //       { name: "Object-oriented programming" },
  //       { name: "Exception Handling" },
  //       { name: "Lambda expressions" },
  //       { name: "Asynchronous programming" },
  //     ],
  //     dur: " 1-3 months",
  //   },
  //   {
  //     id: 4,
  //     title: "SAP",
  //     mode: "Hybrid (Online + Offline)",
  //     Levels: "Beginner, Advanced",
  //     point: [
  //       { name: "SAP financial accounting (FI)" },
  //       { name: "SAP financial supply chain management (FSCM)" },
  //       { name: "ERP and Finance" },
  //       { name: "Digital Supply Chain" },
  //       { name: "CRM and Customer Experience" },
  //       { name: "HR and People Engagement" },
  //       { name: "Network and Spend Management" },
  //       { name: "Business Technology Platform (data and analytics)" },
  //     ],

  //     dur: " 1-3 months",
  //   },
  //   {
  //     id: 5,
  //     title: "VUE.JS",
  //     mode: "Hybrid (Online+ Offline))",
  //     Levels: "Advance",
  //     point: [
  //       { name: "Overview Javascript / ES6I)" },
  //       { name: "Class and style bindings" },
  //       { name: "Components" },
  //       { name: "Vue Reactivity" },
  //       { name: "Vue Router" },
  //     ],

  //     dur: " 3 to 5 Days",
  //   },
  //   {
  //     id: 6,
  //     title: "PMP",
  //     mode: "Hybrid (Online+ Offline))",
  //     Levels: "Beginner",
  //     point: [
  //       { name: "Creating A High Performing Team" },
  //       { name: "Starting the Project" },
  //       { name: "Doing the Work" },
  //       { name: "Keeping the Team On Track" },
  //       { name: "Keeping the Business In Mind" },
  //     ],

  //     dur: " 3 to 5 Days",
  //   },
  //   {
  //     id: 7,
  //     title: "SCRUM Master",
  //     mode: "Hybrid (Online+ Offline))",
  //     Levels: "Beginner",
  //     point: [
  //       { name: "Introduction" },
  //       { name: "The scrum flow" },
  //       { name: "The scrum flow" },
  //       { name: "The Scrum team" },
  //       { name: "Projects Simulations description" },
  //     ],

  //     dur: " 3 to 5 Days",
  //   },
  //   {
  //     id: 8,
  //     title: "Block Chain",
  //     mode: "Hybrid (Online+ Offline))",
  //     Levels: "Beginner",
  //     point: [
  //       { name: "Introduction to blockchain" },
  //       { name: "Building block of blockchain" },
  //       {
  //         name: "Type of Blockchain Public, Private, Permissioned, Permission less, etc. Comparison of below blockchain platforms.",
  //       },
  //       { name: "Type of decentralized storage" },
  //       {
  //         name: "Build a Blockchain from grounds up with Ethereum Smart Contracts",
  //       },
  //       {
  //         name: "Digital currency, Tokens market cap in fiat, bitcoin and how valuation done- Cyber security, Fraud detection",
  //       },
  //       { name: "Bootstrapping a Hyper ledger Network" },
  //     ],

  //     dur: " 4 Days",
  //   },
  //   {
  //     id: 9,
  //     title: "Machine Learning /Artificial Intelligence",
  //     mode: "Hybrid (Online+ Offline))",
  //     Levels: "Beginner",
  //     point: [
  //       { name: "Introduction to artificial intelligence" },
  //       { name: "Types of machine learning and Applications" },
  //       { name: "Deep Learning, Frameworks and Use cases" },
  //       { name: "Use cases of AI & ML in Auditing" },
  //     ],

  //     dur: " 40 hours (5 Days)",
  //   },
  //   {
  //     id: 10,
  //     title: "Meta",
  //     mode: "Hybrid (Online+ Offline))",
  //     Levels: "Beginner",
  //     point: [
  //       { name: "What is Meta" },
  //       { name: "Who is creating the Meta" },
  //       { name: "Meta Verticals" },
  //     ],

  //     dur: " 8 Hours/ 1 Day",
  //   },
  //   {
  //     id: 11,
  //     title: "Python",
  //     mode: "Hybrid (Online+ Offline))",
  //     Levels: "Beginner",
  //     point: [
  //       { name: "Python Environment Setup and Essentials" },
  //       { name: "Python language Basic Constructsa" },
  //       { name: "OOP concepts in Python" },
  //       { name: "Database connection" },
  //       { name: "Num Py for mathematical computing" },
  //       { name: "Sci Py for scientific computing" },

  //       { name: "Matplotlib for data visualization" },

  //       { name: "Pandas for data analysis and machine learning" },
  //       { name: "Multi Threading & Race Condition" },
  //       { name: "Packages and Functions" },
  //       { name: "Web scraping with Python" },
  //     ],

  //     dur: " 42 Hours training and 50 Hours projects and exercises",
  //   },
  // ];
  const careerdata = [
    {
      id: 1,
      title: "Azure Security",
      mode: "Virtual",
      Levels: "Beginner",
      dur: " 3 to 5 Days",
      point: [],
      img: "/eduimg/azure.png",
      link: "/education/azure",
    },
    {
      id: 2,
      title: "Block Chain",
      mode: "Virtual",

      point: [],
      Levels: "Beginner",
      dur: " 40 Hours",
      img: "/eduimg/block.jpg",
      link: "/education/blockchain",
    },
    {
      id: 3,
      title: "Data Science",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: " 40 Hours",
      img: "/eduimg/data.jpg",
      link: "/education/DataScience",
    },
    {
      id: 4,
      title: "Power BI",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: "40 Hours",
      img: "/eduimg/power.png",
      link: "/education/PowerBI",
    },
    {
      id: 5,
      title: "WEB 3.0",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: "8 Hours",
      img: "/eduimg/web.png",
      link: "/education/WebThree",
    },
    {
      id: 6,
      title: "Artificial Intelligence/ Machine Learning",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: "40 Hours",
      img: "/eduimg/ai.jpeg",
      link: "/education/aiAndMl",
    },
    {
      id: 7,
      title: "META",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: " 8 Hours",
      img: "/eduimg/meta.png",
      link: "/education/meta",
    },
    {
      id: 8,
      title: "Python Certification",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: " 32 Hours",
      img: "/eduimg/python.png",
      link: "/education/python",
    },
    {
      id: 9,
      title: "CompTia CySA+",
      mode: "Virtual",
      point: [],
      Levels: "Intermediate",
      dur: "40 Hours",
      img: "/eduimg/compi.png",
      link: "/education/CompTia1",
    },
    {
      id: 10,
      title: "CompTIA Network+",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: " 40 Hours",
      img: "/eduimg/compi2.png",
      link: "/education/CompTia",
    },
    {
      id: 11,
      title: "CompTIA Security+",
      mode: "Virtual",
      point: [],
      Levels: "Intermediates",
      dur: " 40 Hours",
      img: "/eduimg/compi2.png",
      link: "/education/compiSecurity",
    },
    {
      id: 12,
      title: "Scrum Master",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: " 16 Hours",
      img: "/eduimg/scrum.png",
      link: "/education/Scrum",
    },
    // {
    //   id: 9,
    //   title: "Web 3.0",
    //   mode: "Hybrid (Online + Offline)",
    //   point: [
    //     { name: "Introduction to Web 3.0" },
    //     { name: "How to Move from Web 2.0 to Web 3.0" },
    //     { name: "The Characteristic of Web 3.0" },
    //     { name: "What Is Mechanics of Web 3.0" },
    //     { name: "What Is Semantic Web – The Concept Behind Web 3.0" },
    //     { name: "What Comes After Web" },
    //   ],
    //   Levels: "Beginner",
    //   dur: "8 Hours/ 1 Day",
    // },
    // {
    //   id: 10,
    //   title: "Devops",
    //   mode: "Hybrid (Online + Offline)",
    //   point: [
    //     { name: "Software Engineering & SDL" },
    //     { name: "What is DevOps?0" },
    //     { name: "Linux & windows Administration" },
    //     { name: "Shell Scripting" },
    //     { name: "Docker" },
    //   ],
    //   Levels: "Beginner",
    //   dur: "3 to 5 Days",
    // },
  ];

  return (
    <div className="bg-coustom1">
      <div className="w-full h-80 relative ">
        <Image
          layout="fill"
          alt="ser"
          src="/edu&car/education.png"
          objectFit="cover "
        />
        <div className="w-full    h-full  flex  justify-center">
          <div className="text-white relative   max-auto  h-full flex justify-center items-center">
            <h1 className=" text-4xl   text-bold  w-full     text-white   ">
              Education
            </h1>
          </div>
        </div>
      </div>
      <section className="text-black py-10 ">
        <div className="container px-5 py-11 mx-auto">
          <p>
            Learning as a process is in the middle of a rapid evolution. From a
            faculty-driven model in closed classrooms to an open-to-all
            self-learning model powered by the internet, professionals in the
            modern workforce have access to resources like never before. We at
            SFJ are strongly committed to professional development and
            upskilling, and have been the chosen trainer for thousands of IT
            professionals for over a decade. Sign-up with our learning programs
            today and take your career to the next level.
          </p>
        </div>
        <div className="flex container px-5  mx-auto flex-col md:flex-row gap-12">
          <p>Certified Learning Partner :</p>
          <div className="flex flex-row gap-5">
            <img className="w-[200px] h-[]" src="/edu&car/micro.png" alt="" />{" "}
            <img
              className="w-[200px] mt-1 h-[42px]"
              src="/edu&car/company.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="text-black ">
        {/* <div className=" container px-5 py-4 mx-auto">
          <div className="text-center mb-14">
            <h1 className="sm:text-3xl text-2xl  text-center title-font text-black mb-4">
              Featured Courses
            </h1>
          </div>
          <div className="flex  lg:flex-row flex-col  w-full mb-8  gap-7 flex-wrap ">
            <div className=" flex flex-col gap-4  flex-1">
              {careerdata.map(({ id, dur, title, mode, Levels, point }) => {
                return (
                  <CoursesCard
                    key={`${id}-${title}`}
                    dur={dur}
                    title={title}
                    mode={mode}
                    levels={Levels}
                    point={point}
                  />
                );
              })}
            </div>
            <div className=" flex gap-4 flex-col flex-1">
              {careerdata1.map(
                ({ id, description, title, mode, Levels, point, dur }) => {
                  return (
                    <CoursesCard
                      key={`${id}-${title}`}
                      dur={dur}
                      title={title}
                      mode={mode}
                      levels={Levels}
                      point={point}
                    />
                  );
                }
              )}
            </div>
          </div>

         
        </div> */}
      </section>

      <section className="text-black bg-coustom1 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col flex-wrap text-center w-full mb-20 "></div>
          <div className="flex lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5 ">
            {careerdata.map(({ link, id, img, Levels, dur, mode, title }) => {
              return (
                <div
                  key={id}
                  className="w-fit hover:shadow-md bg-white hover:scale-110 ease-in duration-300  flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative"
                >
                  <div>
                    <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                      <Image
                        className=" flex-shrink-0 object-contain xl:w-[100%] xl:h-[34rem]"
                        src={img}
                        width={400}
                        height={300}
                        alt=""
                      ></Image>
                    </div>

                    <h1 className="title-font sm:text-2xl text-xl text-center  text-gray-900 mb-3">
                      {title}
                    </h1>
                    <p className="text-center font-bold">
                      Level : <span className="font-semibold">{Levels}</span>
                    </p>
                    <p className="text-center font-bold">
                      Mode : <span className="font-semibold">{mode}</span>{" "}
                    </p>
                    <p className="text-center font-bold">
                      Duration : <span className="font-semibold">{dur}</span>{" "}
                    </p>
                    <p className="leading-relaxed mt-5 text-left ">{""}</p>
                  </div>
                  <div className="flex justify-center mt-2 ">
                    <Link href={link}>
                      <p className="text-black  border-2 hover:border-0 border-green  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-green hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                        Read More
                      </p>
                    </Link>
                  </div>
                  <div className="w-full md:hidden block h-[1px] mt-5 bg-black"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Education;
