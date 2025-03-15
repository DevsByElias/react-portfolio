import { Link } from 'react-router-dom';
import twitterImg from '../assets/github.png';

function Home() {
  return (
    <div className="w-3/4 max-w-[1200px] mx-auto my-auto p-24 flex justify-center">
      <div>
        <h1 className="font-inter text-[10vw] sm:text-[85px] leading-none mt-12 font-bold text-[#221f22] text-left whitespace-nowrap">
          Hi! I'm{' '}
          <span className="bg-gradient-to-r from-[#00F5A0] via-[#9e43cc] to-[#FF0080] bg-[length:200%_auto] animate-[gradientAnimation_3s_ease-in-out_infinite] bg-clip-text text-transparent">
            Elias
          </span>
        </h1>

        <h2 className="font-['Inter'] font-normal text-xl sm:text-2xl md:text-[30px] mt-4 sm:mt-6 md:mt-8 text-[#101828] text-center sm:text-left border-l-0 sm:border-l-3 border-[#ffef62] sm:pl-4 ">
          IT Automation Student & Support Specialist
        </h2>
      </div>
    </div>
  );
}

export default Home;
