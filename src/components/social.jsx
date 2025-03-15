import githubImg from '../assets/github.png';
import linkedinImg from '../assets/linkedin.png';
import instagramImg from '../assets/instagram.png';
import twitterImg from '../assets/twitter.png';

export default function Social() {
  return (
    <div className="social-container pl-5">
      <h2 className="mx-auto mt-50 max-w-lg  text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl text-left border-l-3 border-[#00F5A0] pl-5">
        Get In Touch
      </h2>
      <div className="flex flex-row-reverse mb-5 mr-50 gap-1">
        {' '}
        <a href="" className="duration-300  hover:-translate-y-1">
          <img src={githubImg} alt="" />
        </a>{' '}
        <a href="" className="duration-300  hover:-translate-y-1">
          <img src={linkedinImg} alt="" />
        </a>{' '}
        <a href="" className="duration-300  hover:-translate-y-1">
          <img src={instagramImg} alt="" />
        </a>{' '}
        <a href="" className="duration-300  hover:-translate-y-1">
          <img src={twitterImg} alt="" />
        </a>
      </div>
    </div>
  );
}
