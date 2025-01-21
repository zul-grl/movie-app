const Footer = () => {
  return (
    <div className="w-[100vw] h-[200px] bg-[#4338CA]">
      <div className="max-w-[1280px] py-10 m-auto">
        <div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M5.83366 2.1665V18.8332M14.167 2.1665V18.8332M1.66699 10.4998H18.3337M1.66699 6.33317H5.83366M1.66699 14.6665H5.83366M14.167 14.6665H18.3337M14.167 6.33317H18.3337M3.48366 2.1665H16.517C17.5203 2.1665 18.3337 2.97985 18.3337 3.98317V17.0165C18.3337 18.0198 17.5203 18.8332 16.517 18.8332H3.48366C2.48034 18.8332 1.66699 18.0198 1.66699 17.0165V3.98317C1.66699 2.97985 2.48034 2.1665 3.48366 2.1665Z"
                stroke="#4338CA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4 className="italic font-bold text-white">Movie Z</h4>
          </div>
          <div className="text-[#FAFAFA]">© 2024 Movie Z. All Rights Reserved.</div>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
