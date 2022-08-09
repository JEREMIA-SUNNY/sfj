import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Contract Manufacturing");
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState(false);
  const [visible, setVisible] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("working");

    console.log("name", name);
    console.log("email", email);
    console.log("phone", phone);
    console.log("interest", interest);
    console.log("info", info);

    if (!name || !email || !phone || !info) {
      return;
    }

    const response = await fetch(
      "https://prejyihun6edtdi4tyfymegotm0sbtxi.lambda-url.ap-south-1.on.aws/",
      {
        method: "POST",
        headers: {},
        body: JSON.stringify({ name, email, phone, info, interest }),
      }
    );

    console.log("response", response);

    if (response.status === 200) {
      setName("");
      setEmail("");
      setPhone("");
      setInterest("");
      setInfo("");
      setMessage(
        "Your message is sent. We'll get back to you at the earliest!"
      );
    } else {
      console.log(JSON.stringify(response));
    }
  };

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeInfo = (e) => {
    setInfo(e.target.value);
  };
  const changeInterest = (e) => {
    setInterest(e.target.value);
  };
  if (name && email && phone && info && interest) {
    console.log("iam visible");
  }

  return (
    <>
      <section className="pt-12 pb-12 text-zinc-900 bg-coustom1">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide text-green-900 md:ml-4 text-center">
            Contact
          </h1>

          <div className="flex flex-col-reverse md:flex-row justify-between items-start rounded pt-8 ">
            <d  iv className="md:w-2/5 md:mt-0 mt-10 w-full">
              <p className="text-2xl font-semibold  md:ml-4">
                SFJ BUSINESS SOLUTIONS
              </p>
              <div className="grid gap-5 grid-cols-2 ">
                <div className="text-base pt-8 text-black md:ml-4">
                  <p className="font-semibold">
                    SFJ Business Solutions Pvt. Ltd.
                  </p>
                  <p> Uma Sree Dream World, Unit -2,</p>
                  <p>B-Block, 4th Floor, Kudlu Gate,</p>
                  <p>Hosur Main Road,</p>
                  <p>Bangalore – 560068. Karnataka, INDIA</p>
                  <p>Tel : +91 80 4158333</p>
                  <p></p>
                </div>
                <div className="text-base pt-8 text-black md:ml-4">
                  <p className="font-semibold">
                    SFJ Business Solutions Sdn. Bhd.
                  </p>
                  <p>Suite 23, 1B-15, Block 18, </p>
                  <p>Level 15, Plaza Sentral,</p>
                  <p>Jalan Stesen Sentral 5,</p>
                  <p>50470 Kuala Lumpur, Malaysia</p>
                  <p>Tel : +603-9236 1125</p>
                  <p>Fax : +603-9236 1122</p>
                </div>
                <div className="text-base pt-8 text-black md:ml-4">
                  <p className="font-semibold">SFJ Computers Consulting</p>
                  <p>
                    214, Blue Tower, Sheikh Zayed Road, (Next To Crown Plaza
                    Hotel)
                  </p>
                  <p>P.O. Box : 58575, Dubai, UAE</p>
                  <p></p>
                  <p>Tel : +971 43 425125</p>
                  <p>Fax : +971 43 425126</p>
                </div>

                <div className="text-base pt-8 text-black md:ml-4">
                  <p className="font-semibold">
                    SFJ Business Solutions Pte. Ltd.
                  </p>
                  <p>35 Selegie Road, #09-02,</p>
                  <p>Parklane Shopping Mall,</p>
                  <p>Singapore – 188367</p>
                </div>
              </div>
            </d>
            <div className="md:w-1/2 w-full">
              <div className="md:pl-12 md:pt-0 pt-12">
                <h2 className="text-2xl text-black ">Write to us</h2>
                <form className="mt-8" onSubmit={sendMessage}>
                  <div className="lg:grid flex flex-col justify-center lg:grid-cols-2 gap-6">
                    <label className="block">
                      <span className="text-black">Name</span>
                      <input
                        type="text"
                        className="block  w-full lg:h-[47px] rounded-sm   focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                        placeholder=""
                        value={name}
                        onChange={changeName}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black">Email</span>
                      <input
                        type="email"
                        className=" block w-full rounded-sm border-black   lg:h-[47px]  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                        placeholder=""
                        value={email}
                        onChange={changeEmail}
                      />
                    </label>
                    <label className="block">
                      <span className="text-black">Phone</span>
                      <input
                        type="tel"
                        className=" block  rounded-sm w-full lg:h-[47px]  border-black focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                        placeholder=""
                        value={phone}
                        onChange={changePhone}
                      />
                    </label>

                    <label className="block">
                      <span className="text-black">
                        What are you looking for?
                      </span>
                      <select
                        onChange={changeInterest}
                        className=" block w-full    lg:h-[47px] rounded-sm border-black focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                      >
                        <option>Knowledge As A Service</option>
                        <option>Talent As A Service </option>
                        <option>Consulting/IT Services.</option>

                        <option>Others</option>
                      </select>
                    </label>
                  </div>
                  <label className="block mt-6">
                    <span className="text-black">Additional details</span>
                    <textarea
                      className="mt-1 block w-full   lg:h-28 rounded-sm border-black focus:border-green-700 focus:ring focus:ring-green-100 focus:ring-opacity-50"
                      rows="3"
                      value={info}
                      onChange={changeInfo}
                    ></textarea>
                  </label>
                  <div className="w-full flex justify-center items-center">
                    {message ? (
                      <p className="text-green text-md font-semibold pt-6 ">
                        {message}
                      </p>
                    ) : (
                      <button
                        className={`w-32 mt-6 bg-orange text-black font-bold text-xs   p-3 rounded-sm transition-all ${
                          name && email && phone && info && interest
                            ? "opacity-100"
                            : "opacity-25"
                        }`}
                      >
                        SEND
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2856438459257!2d77.63598241536467!3d12.889345220163921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b089698d85%3A0x9b02d066823e0b2d!2sSFJ%20Business%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1657910713116!5m2!1sen!2sin"
          width="100%"
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
{
  /* <button className={`w-32 mt-6 bg-orange text-black font-bold text-xs   p-3 rounded-sm transition-all ${name && email && phone && info && interest?"opacity-100":"opacity-25"}`}>
SEND
</button> */
}
