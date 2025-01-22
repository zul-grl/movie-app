const Footer = () => {
  return (
    <div className="w-[100vw] h-[280px] bg-[#4338CA]">
      <div className="max-w-[1280px] py-10 m-auto flex justify-between">
        <div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={21}
              fill="none"
            >
              <path
                stroke="#4338CA"
                d="M5.834 2.167v16.666m8.333-16.666v16.666M1.667 10.5h16.667M1.667 6.333h4.167m-4.167 8.334h4.167m8.333 0h4.167m-4.167-8.334h4.167M3.484 2.166h13.033c1.003 0 1.817.814 1.817 1.817v13.034a1.817 1.817 0 0 1-1.817 1.816H3.484a1.817 1.817 0 0 1-1.817-1.816V3.982c0-1.003.813-1.817 1.817-1.817Z"
              />
            </svg>
            <h4 className="italic font-bold text-white">Movie Z</h4>
          </div>
          <div className="text-[#FAFAFA]">
            © 2024 Movie Z. All Rights Reserved.
          </div>
        </div>
        <div className="flex gap-[96px]">
          <div className="flex flex-col gap-3">
            <div className="text-[#FAFAFA] font-[14px]">
              Contact Information
            </div>
            <div className="flex gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="none"
                >
                  <path
                    stroke="#FAFAFA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.667 4.667-5.98 3.8a1.293 1.293 0 0 1-1.373 0l-5.98-3.8m1.333-2h10.667c.736 0 1.333.596 1.333 1.333v8c0 .736-.597 1.333-1.333 1.333H2.667A1.333 1.333 0 0 1 1.334 12V4c0-.737.597-1.333 1.333-1.333Z"
                  />
                </svg>
              </div>
              <div className="text-[#FAFAFA] font-[14px]">
                Email:
                <br /> support@movieZ.com
              </div>
            </div>
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
              >
                <g clipPath="url(#a)">
                  <path
                    stroke="#FAFAFA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.667 11.28v2a1.332 1.332 0 0 1-1.453 1.334 13.193 13.193 0 0 1-5.754-2.047 13 13 0 0 1-4-4 13.193 13.193 0 0 1-2.046-5.78A1.333 1.333 0 0 1 2.74 1.334h2A1.333 1.333 0 0 1 6.074 2.48a8.56 8.56 0 0 0 .466 1.874 1.333 1.333 0 0 1-.3 1.406l-.846.847a10.667 10.667 0 0 0 4 4l.846-.847a1.333 1.333 0 0 1 1.407-.3 8.56 8.56 0 0 0 1.873.467 1.333 1.333 0 0 1 1.147 1.353Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
              <div className="text-[#FAFAFA] font-[14px]">
                Phone:
                <br /> +976 (11) 123-4567
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-[#FAFAFA] font-[14px]">
            <p>Follow us </p>
            <div className="flex gap-3">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
