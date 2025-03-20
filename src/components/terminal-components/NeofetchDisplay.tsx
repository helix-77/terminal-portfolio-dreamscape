import React from 'react';

const NeofetchDisplay: React.FC = () => {
  const asciiArt = `
  ................
  ..............
  ..........       .....
  .......            .......
  .....                 ......
  ....                    .....
  ...                       ....
  ...                        ....
  ...                         ....
  ...                         ....
  ...                        ....
  ....                      ....
  .....                    ....
  ......                  ....
  ........               ...
  ............        ....
  `;

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:items-center px-4 mb-4">
        {/* asci art */}
        <pre className="text-[#F1FA8C] mb-4 md:mr-4 md:mb-0">{asciiArt}</pre>

        {/* system info */}
        <div className="text-gray-300 pr-0 md:pr-10">
          <div><span className="text-[#BD93F9] font-bold">Name:</span> Portfolio | helix_77 </div>
          <div><span className="text-[#BD93F9] font-bold">Host:</span> Atik Mouhtasim Rahi</div>
          <div><span className="text-[#BD93F9] font-bold">Uptime:</span> 24/7</div>
          <div><span className="text-[#BD93F9] font-bold">Kernel:</span> mdatikmouhtasim@gmail.com </div>
          <div><span className="text-[#BD93F9] font-bold">IP address:</span> +8801719345888 </div>
          <div><span className="text-[#BD93F9] font-bold">Resolution:</span> Be the best you</div>
          <div><span className="text-[#BD93F9] font-bold">Shell:</span> RN, React, Supabase, C++ , Python, PHP, Laravel, Next </div>
          <div><span className="text-[#BD93F9] font-bold">Packages:</span> Tailwind, Expo, Firebase, Tkinter, Numpy,... </div>
          <div><span className="text-[#BD93F9] font-bold">Terminal:</span> helix-portfolio</div>
          <div><span className="text-[#BD93F9] font-bold">WM:</span> React, Vite, Github pages</div>
          <div><span className="text-[#BD93F9] font-bold">OS:</span> Win11, WSL v2</div>
          <div><span className="text-[#BD93F9] font-bold">CPU:</span> Ryzen 5 5600G</div>
          <div><span className="text-[#BD93F9] font-bold">GPU:</span> RTX 3050Ti</div>
          <div><span className="text-[#BD93F9] font-bold">Extra:</span> 3rd year B.Sc.(CSE) student</div>
          <div><span className="text-[#BD93F9] font-bold">Provider:</span> RUET, Bangladesh</div>
          <div><span className="text-[#BD93F9] font-bold">Languages:</span> Bangla, English</div>
          <div>
            <span className="text-[#BD93F9] font-bold">Today: </span>
            {new Date().toLocaleString()}
          </div>
        </div>
      </div>

      {/* Color palette display */}
      <div className="flex mb-4 mt-2 ml-4">
        <div className="w-6 h-6 bg-[#FF5555]"></div>
        <div className="w-6 h-6 bg-[#50FA7B]"></div>
        <div className="w-6 h-6 bg-[#F1FA8C]"></div>
        <div className="w-6 h-6 bg-[#BD93F9]"></div>
        <div className="w-6 h-6 bg-[#FF79C6]"></div>
        <div className="w-6 h-6 bg-[#8BE9FD]"></div>
      </div>
    </>
  );
};

export default NeofetchDisplay;