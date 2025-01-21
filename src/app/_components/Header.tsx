import { ChevronDown, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="flex w-[100vw] justify-center h-[59px] sticky top-0 bg-[#fff] z-10">
      <div className="max-w-[1280px] w-[100%] flex items-center justify-between">
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
          <h4 className="italic font-bold text-[#4338CA]">Movie Z</h4>
        </div>
        <div className="flex gap-3">
          <button className="text-14 py-2 px-4 flex gap-2 rounded-md border border-[#E4E4E7]">
            <ChevronDown />
            Genre
          </button>
          <div className="flex items-center rounded-md border border-[#E4E4E7]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M13.711 14.2105L13.3575 13.8568C13.3444 13.8699 13.3232 13.8699 13.3101 13.8568L10.2834 10.83L9.96699 10.5136L9.61753 10.7932C8.88184 11.3817 7.94958 11.7333 6.93379 11.7333C4.55897 11.7333 2.63379 9.80812 2.63379 7.4333C2.63379 5.05848 4.55897 3.1333 6.93379 3.1333C9.30861 3.1333 11.2338 5.05848 11.2338 7.4333C11.2338 8.44909 10.8822 9.38136 10.2937 10.117L10.0141 10.4665L10.3305 10.783L13.3573 13.8096C13.3704 13.8227 13.3704 13.8439 13.3573 13.857L13.711 14.2105ZM13.711 14.2105C13.9192 14.0022 13.9192 13.6644 13.711 13.4561L12.9566 14.2105C13.1649 14.4187 13.5026 14.4187 13.711 14.2105ZM6.93379 11.6666C9.2718 11.6666 11.1671 9.77131 11.1671 7.4333C11.1671 5.09529 9.2718 3.19997 6.93379 3.19997C4.59578 3.19997 2.70046 5.09529 2.70046 7.4333C2.70046 9.77131 4.59578 11.6666 6.93379 11.6666Z"
                  fill="#09090B"
                  stroke="#09090B"
                />
              </g>
            </svg>{" "}
            <input type="text" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Header;
