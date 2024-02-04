import { useState } from "react";

import Modals from "../components/modals";
import CongratsModalWrapper from "../components/modals/CongratsModalWrapper";

const SearchDomain = ({ handleShowDomainPageDetails }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div className="hidden sm:flex justify-around text-base font-medium text-[#7F819E]">
        <p>Name</p>
        <p>Mint A Domain</p>
        <p>Expiry Date</p>
        <p>Open Sea</p>
      </div>
      <div className=" text-center space-y-3 mt-16 ">
        <div className=" max-w-4xl mx-auto  text-transparent  bg-clip-text bg-gradient-to-r from-[#7AE8C7] to-[#3EA7E1] font-bold ">
          <h1 className="font-bold text-3xl md:text-[56px] sm:text-5xl">
            Mint a .givestation and .youbuidl web3 domain name.
          </h1>
        </div>
        <div>
          <p className="text-[#383838] text-lg sm:text-xl max-w-lg mx-auto">
            Your identity across web3, one name for all your crypto addresses,
            and your decentralised website.
          </p>
        </div>

        <form className=" bg-[#101010] rounded-3xl border-2 border-[#3EA7E1] text-white  py-1 pl-[10px] sm:pl-[20px] pr-[2px] flex justify-between max-w-2xl mx-auto">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="bg-transparent border-none outline-none w-full"
            placeholder="degennick.youbuidl"
          />
          <button className="bg-[#3EA7E1] rounded-full  px-2.5 py-1.5 sm:px-3.5 sm:py-2.5">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={17}
              fill="none"
            >
              <path
                fill="#FBFBFB"
                d="M13.984 6.093c-.14-1.561-.795-3.085-1.93-4.2-2.27-2.227-5.617-1.985-7.46.54-.92 1.263-1.295 2.857-1.153 4.43.142 1.574.796 3.095 1.93 4.209 2.269 2.211 5.617 1.97 7.459-.556.92-1.262 1.294-2.861 1.154-4.423Zm-.82.052c.118 1.317-.194 2.664-.98 3.723-1.555 2.133-4.376 2.336-6.291.471-1.917-1.882-2.21-5.141-.655-7.274C6.794.933 9.614.73 11.531 2.61c.951.933 1.514 2.218 1.633 3.535Zm-.834.06c-.1-1.108-.569-2.124-1.334-2.861-.72-.707-1.606-1.064-2.527-1.046-.237.002-.4.223-.389.497l.002.016c.023.257.222.453.446.453.711-.02 1.395.27 1.945.796a3.523 3.523 0 0 1 1.023 2.205c.025.273.224.469.46.452.237-.017.399-.239.374-.512Zm-5.487-2.4a.533.533 0 0 0-.153-.33.399.399 0 0 0-.307-.12.384.384 0 0 0-.282.162.517.517 0 0 0-.091.35.533.533 0 0 0 .152.33.399.399 0 0 0 .308.12.384.384 0 0 0 .282-.162.517.517 0 0 0 .091-.35ZM5.25 11.738a.491.491 0 0 0-.155-.322c-.184-.18-.448-.162-.583.042l-.312.427a1.08 1.08 0 0 0-.554-.106c-.334.024-.64.192-.852.482l-1.565 2.182a1.55 1.55 0 0 0-.283 1.054c.033.37.192.73.454 1.002.536.527 1.328.47 1.764-.128l1.593-2.183c.212-.29.303-.669.269-1.054-.02-.225-.081-.43-.182-.617l.312-.427a.52.52 0 0 0 .094-.352Zm-1.044 1.455a.466.466 0 0 1-.095.346l-1.58 2.167c-.15.205-.413.224-.584.042-.184-.18-.211-.485-.06-.674l1.567-2.166a.396.396 0 0 1 .292-.166.364.364 0 0 1 .305.123c.092.09.144.2.155.328Z"
              />
            </svg>
          </button>
        </form>
        <ul>
          {input.length > 0 && (
            <li
              onClick={() => {
                handleShowDomainPageDetails();
              }}
              className=" bg-[#101010] cursor-pointer rounded-2xl border-2 border-[#3EA7E1] text-white  py-1 px-[10px] sm:px-[20px] flex justify-between max-w-2xl mx-auto"
            >
              <input
                className="bg-transparent border-none outline-none "
                placeholder="degennick.youbuidl"
              />
              <button className="bg-[#F5F5F5] rounded-xl text-[#525252]   px-1 py-1.5 sm:px-3 sm:py-1 sm:my-1.5 flex justify-between sm:text-base font-semibold ">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={24}
                  fill="none"
                >
                  <path
                    fill="#12D69B"
                    d="M1.512 12.053C8.355 10.62 10.742 8.335 11.807.988c1.459 7.653 3.652 10.092 10.195 11.065-7.413 1.581-9.144 4.472-10.195 11.316-1.346-7.845-3.73-10.16-10.295-11.316Z"
                  />
                  <path
                    fill="#12D69B"
                    d="M15.736 5.418c1.393-.292 1.88-.756 2.096-2.25.297 1.556.744 2.052 2.075 2.25-1.509.321-1.861.909-2.075 2.3-.274-1.595-.759-2.065-2.096-2.3ZM-.002 19.28c2.818-.59 3.8-1.527 4.24-4.546.6 3.144 1.503 4.146 4.197 4.546-3.052.65-3.765 1.837-4.198 4.65-.554-3.224-1.535-4.175-4.239-4.65Z"
                  />
                </svg>{" "}
                <h1 className="hidden min-[380px]:block">Available</h1>
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

const DomainDetails = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <div>
        <div className="hidden sm:flex justify-around text-base font-medium text-[#7F819E]">
          <p>Name</p>
          <p>Mint A Domain</p>
          <p>Expiry Date</p>
          <p>Open Sea</p>
        </div>
        <div className=" text-center space-y-3 mt-12 ">
          <div className=" bg-[#101010] rounded-3xl border-2  text-white  py-5  sm:pl-[5px] text-center max-w-lg mx-auto">
            <p className="font-medium text-base">
              Miles14.givestation <br /> 0x1E3...530d
            </p>
          </div>
          <div className=" bg-[#101010] rounded-3xl border-2     text-white  py-5  sm:pl-[5px] text-center max-w-lg mx-auto">
            <p className="font-medium text-xl">Register miles14.givestation</p>
            <div class="flex justify-between py-6 px-6 sm:px-12">
              <div className="text-start">
                <h1 className="font-bold text-xl min-[380px]:text-3xl">
                  $25.00
                </h1>
                <p className="text-base">Balance: 70.42</p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={40}
                  height={40}
                  fill="none"
                >
                  <circle cx={20} cy={20} r={20} fill="url(#a)" />
                  <defs>
                    <pattern
                      id="a"
                      width={1}
                      height={1}
                      patternContentUnits="objectBoundingBox"
                    >
                      <use xlinkHref="#b" transform="scale(.00407)" />
                    </pattern>
                    <image
                      xlinkHref="data:image/png;base64,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"
                      id="b"
                      width={246}
                      height={246}
                    />
                  </defs>
                </svg>{" "}
                <p className="px-1">1 Year</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                >
                  <path
                    stroke="#3EA7E1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m8 10 4 4 4-4"
                  />
                </svg>
              </div>
            </div>
            <div className="px-6 sm:px-12 py-6">
              <div className="text-start ">
                <p>Fees:</p>
                <div className="flex justify-between ">
                  <h1 className="font-bold text-xl min-[380px]:text-3xl">
                    $58.00
                  </h1>
                  <h1 className="font-bold text-xl min-[380px]:text-3xl ">
                    0.0057ETH
                  </h1>
                </div>
              </div>

              <p className="text-[#A6A0BB] text-base text-start">
                1 Year registeration
              </p>
            </div>
            <div></div>
          </div>
          <button className="bg-[#3EA7E1] rounded-xl text-white px-16 sm:px-24 py-1.5 font-semibold text-lg ">
            {" "}
            Connect Wallet{" "}
          </button>
        </div>
      </div>
      <Modals
        showModal={showModal}
        setShowModal={() => {
          setShowModal(false);
        }}
      >
        <CongratsModalWrapper>
          {" "}
          <div className="space-y-2 py-6">
            <h1 className="text-Bright-Gray font-medium text-xl">
              Congratulation!
            </h1>
            <h4 className="text-Bright-Gray/90 font-normal text-sm">
              miles14.givestation is now yours!
            </h4>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="bg-Pure-White text-Pure-Black text-sm font-medium rounded-xl py-2 px-6"
            >
              Close
            </button>
            <button className="bg-Pure-White text-Pure-Black text-sm font-medium rounded-xl py-2 px-6">
              Share on Twitter
            </button>
          </div>
        </CongratsModalWrapper>
      </Modals>
    </>
  );
};

const NoDomain = () => {
  return (
    <div>
      <div className="hidden sm:flex justify-around text-base font-medium text-[#7F819E]">
        <p className="underline">Name</p>
        <p>Mint A Domain</p>
        <p>Expiry Date</p>
        <p>Open Sea</p>
      </div>
      <div className=" text-center space-y-3 mt-24 ">
        <div className=" bg-[#818283] rounded-3xl border-2  text-white  py-5  sm:pl-[5px] text-center max-w-lg mx-auto">
          <p className="font-medium text-base">
            No name found! 😔
            <br /> 0x1E3...530d
          </p>
        </div>
      </div>
    </div>
  );
};

const CurrentDomain = () => {
  return (
    <div>
      <div className="hidden sm:flex justify-around text-base font-medium text-[#7F819E]">
        <p>Name</p>
        <p>Mint A Domain</p>
        <p className="underline">Expiry Date</p>
        <p>Open Sea</p>
      </div>
      <div className=" text-center space-y-3 mt-24 ">
        <div className=" bg-[#101010] rounded-3xl border-2  text-white  py-5  sm:pl-[5px] text-center max-w-lg mx-auto">
          <p className="font-medium text-base">
            Miles14.givestation
            <br /> 0x1E3...530d
          </p>
        </div>
        <div className=" bg-[#101010] rounded-3xl border-2  text-white  py-5  sm:pl-[5px] text-center max-w-lg mx-auto">
          <p className="font-medium text-base">
            <span className="font-semibold text-[18px]">
              You current Domain expires by{" "}
            </span>
            <br /> 12-12-2027
          </p>
        </div>
      </div>
    </div>
  );
};

const MintDomain = () => {
  const [showDomainDetails, setShowDomainDetails] = useState(false);

  const handleShowDomainPageDetails = () => {
    setShowDomainDetails(true);
  };
  return (
    <div className="max-w-5xl mx-auto font-Poppins">
      {!showDomainDetails && (
        <SearchDomain
          handleShowDomainPageDetails={handleShowDomainPageDetails}
        />
      )}
      {showDomainDetails && <DomainDetails />}
      {/* <NoDomain /> */}
      {/* <CurrentDomain /> */}
    </div>
  );
};

export default MintDomain;
