import { useState } from "react";

function WhyJoinReasons() {
    const reasons = [
      { text: 'Deepen Family Bonds', color: 'from-pink-500 to-purple-600' },
      { text: 'Preserve Intangible Heritage', color: 'from-pink-400 to-purple-500' },
      { text: 'Bridge Geographical Distances', color: 'from-orange-400 to-purple-500' },
      { text: 'Celebrate Every Life', color: 'from-pink-500 to-purple-400' },
      { text: 'Chronicle Every Voice', color: 'from-pink-400 to-purple-600' },
    ];
    const [active, setActive] = useState(0);
    return (
      <div className="flex flex-row md:flex-row gap-8 w-full justify-center md:justify-start">
        <div className="flex flex-col relative w-full max-w-xs">
          {reasons.map((reason, idx) => (
            <button
              key={reason.text}
              onClick={() => setActive(idx)}
              className="flex items-center w-full group bg-transparent focus:outline-none"
              style={{ minHeight: 44 }}
            >
              <span className="relative flex items-center w-full">
                {/* Vertical bar */}
                <span className={`absolute left-0 h-8 w-1 rounded transition-all duration-200 ${active === idx ? 'bg-yellow-400' : 'bg-transparent'}`}></span>
                {/* Reason text */}
                <span className={`pl-4 py-2 text-lg font-semibold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent transition-all duration-200 group-hover:opacity-80 ${active === idx ? '' : 'opacity-80'}`}>{reason.text}</span>
              </span>
            </button>
          ))}
          {/* Vertical line */}
          <span className="absolute left-0 top-0 h-full w-0.5 bg-gray-200" style={{ zIndex: -1 }}></span>
        </div>
      </div>
    );
  }

  export default WhyJoinReasons;