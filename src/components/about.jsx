export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
        About Me
      </p>
      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
        <div className="relative">
          <div className="absolute inset-px rounded-lg bg-white"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
            <div className="p-6 sm:p-8">
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center border-l-4 border-[#00F5A0] pl-4">
                Education
              </p>
              <p className="mt-3 text-sm/6 text-gray-600 max-lg:text-center">
                I'm currently pursuing a degree in IT Automation and am on the
                verge of graduating. My coursework has provided me with a strong
                foundation in scripting, system administration, cloud
                technologies, and automated deployment processes. This
                educational journey has equipped me with both theoretical
                knowledge and practical skills essential for modern IT
                environments.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
        </div>

        <div className="relative">
          <div className="absolute inset-px rounded-lg bg-white"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
            <div className="p-6 sm:p-8">
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center border-l-4 border-[#ffef62] pl-4">
                Experience
              </p>
              <p className="mt-3 text-sm/6 text-gray-600 max-lg:text-center">
                Currently working full-time in a Service Desk role, where I
                provide technical support, troubleshoot hardware and software
                issues, manage user accounts, and resolve network connectivity
                problems. This hands-on experience has sharpened my
                problem-solving abilities while developing strong communication
                skills through daily interaction with users across different
                technical proficiency levels.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
        </div>

        <div className="relative">
          <div className="absolute inset-px rounded-lg bg-white"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
            <div className="p-6 sm:p-8">
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center border-l-4 border-[#9e43cc] pl-4">
                Hobbies
              </p>
              <p className="mt-3 text-sm/6 text-gray-600 max-lg:text-center">
                Outside of technology, I maintain an active lifestyle through
                regular gym workouts and bouldering, which help me build both
                physical strength and problem-solving skills. I'm also an avid
                reader, enjoy gaming during my downtime, and find inspiration
                through music. These diverse interests help me maintain a
                balanced life and often provide fresh perspectives that I bring
                to my technical work.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
        </div>

        <div className="relative">
          <div className="absolute inset-px rounded-lg bg-white"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
            <div className="p-6 sm:p-8">
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center border-l-4 border-[#FF0080] pl-4">
                Future Plans
              </p>
              <p className="mt-3 text-sm/6 text-gray-600 max-lg:text-center">
                My career goal is to become a Full Stack Developer. I'm actively
                building projects that strengthen both my front-end and back-end
                skills while exploring modern frameworks and development
                methodologies. I'm passionate about creating seamless user
                experiences underpinned by robust, efficient code, and look
                forward to contributing to innovative web applications that
                solve real-world problems.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
        </div>
      </div>
    </div>
  );
}
