import cssLogo from '../assets/css-3.png';
import ADLogo from '../assets/AD.png';
import EntraLogo from '../assets/Entra.png';
import FigmaLogo from '../assets/figma.png';
import JSLogo from '../assets/JS.png';
import HTMLogo from '../assets/HTML.png';
import ReactLogo from '../assets/React.png';
import TailwindLogo from '../assets/Tailwind CSS.png';

const logos = [
  { src: cssLogo, alt: 'CSS', name: 'CSS' },
  { src: ADLogo, alt: 'Active Directory', name: 'Active Directory' },
  { src: TailwindLogo, alt: 'Tailwind', name: 'Tailwind' },
  { src: EntraLogo, alt: 'Microsoft Entra', name: 'Entra' },
  { src: FigmaLogo, alt: 'Figma', name: 'Figma' },
  { src: JSLogo, alt: 'JavaScript', name: 'JavaScript' },
  { src: HTMLogo, alt: 'HTML', name: 'HTML' },
  { src: ReactLogo, alt: 'React', name: 'React.js' },
];

function AutoPlayCarousel() {
  return (
    <div className="overflow-hidden relative w-full mt-25 py-2.5 px-0">
      <div className="flex gap-[350px] w-max animate-[scroll_20s_linear_infinite] hover:animate-[scroll_10s_linear_infinite_paused] after:content-[''] after:flex">
        {logos.map((logo, index) => (
          <div className="flex items-center" key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-[50px] w-auto object-contain"
            />
            <span className="font-['Poppins'] font-normal text-[28px] text-[#2d2a2e] min-w-[70px] text-right">
              {logo.name}
            </span>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div className="flex items-center" key={`dup-${index}`}>
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-[50px] w-auto object-contain"
            />
            <span className="font-['Poppins'] font-normal text-[28px] text-[#2d2a2e] min-w-[70px] text-right">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutoPlayCarousel;
