function About() {
  return (
    <div className="py-16 sm:py-24">
      <p className="mx-auto max-w-lg text-center text-3xl font-semibold tracking-tight text-balance text-gray-950 sm:text-4xl md:text-5xl px-4">
        About Me
      </p>
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-6xl">
        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8">
          <div className="relative">
            <div className="absolute inset-px rounded-2xl bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="p-6 sm:p-8">
                <h2 className="text-lg font-medium tracking-tight text-gray-950 text-center sm:text-left border-l-4 sm:border-l-4 border-[#00F5A0] sm:pl-4">
                  Education
                </h2>
                <p className="mt-3 text-sm/6 text-gray-600 text-center sm:text-left">
                  I'm currently pursuing a degree in IT Automation and am on the
                  verge of graduating. My coursework has provided me with a
                  strong foundation in scripting, system administration, cloud
                  technologies, and automated deployment processes. This
                  educational journey has equipped me with both theoretical
                  knowledge and practical skills essential for modern IT
                  environments.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 shadow-sm ring-black/5"></div>
          </div>

          <div className="relative">
            <div className="absolute inset-px rounded-2xl bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="p-6 sm:p-8">
                <h2 className="text-lg font-medium tracking-tight text-gray-950 text-center sm:text-left border-l-4 sm:border-l-4 border-[#ffef62] sm:pl-4">
                  Experience
                </h2>
                <p className="mt-3 text-sm/6 text-gray-600 text-center sm:text-left">
                  Currently working full-time in a Service Desk role, where I
                  provide technical support, troubleshoot hardware and software
                  issues, manage user accounts, and resolve network connectivity
                  problems. This hands-on experience has sharpened my
                  problem-solving abilities while developing strong
                  communication skills through daily interaction with users
                  across different technical proficiency levels.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 shadow-sm ring-black/5"></div>
          </div>

          <div className="relative">
            <div className="absolute inset-px rounded-2xl bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="p-6 sm:p-8">
                <h2 className="text-lg font-medium tracking-tight text-gray-950 text-center sm:text-left border-l-4 sm:border-l-4 border-[#9e43cc] sm:pl-4">
                  Hobbies
                </h2>
                <p className="mt-3 text-sm/6 text-gray-600 text-center sm:text-left">
                  Outside of technology, I maintain an active lifestyle through
                  regular gym workouts and rock climbing, which help me build
                  both physical strength and problem-solving skills. I'm also an
                  avid reader, enjoy gaming during my downtime, and find
                  inspiration through music. These diverse interests help me
                  maintain a balanced life and often provide fresh perspectives
                  that I bring to my technical work.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 shadow-sm ring-black/5"></div>
          </div>

          <div className="relative">
            <div className="absolute inset-px rounded-2xl bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="p-6 sm:p-8">
                <h2 className="text-lg font-medium tracking-tight text-gray-950 text-center sm:text-left border-l-4 sm:border-l-4 border-[#FF0080] sm:pl-4">
                  Future Plans
                </h2>
                <p className="mt-3 text-sm/6 text-gray-600 text-center sm:text-left">
                  My career goal is to become a Full Stack Developer. I'm
                  actively building projects that strengthen both my front-end
                  and back-end skills while exploring modern frameworks and
                  development methodologies. I'm passionate about creating
                  seamless user experiences underpinned by robust, efficient
                  code, and look forward to contributing to innovative web
                  applications that solve real-world problems.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 shadow-sm ring-black/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
