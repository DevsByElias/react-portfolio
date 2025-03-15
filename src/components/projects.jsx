import React from 'react';
import moviemateImg from '../assets/moviemate.png';
import blackjackImg from '../assets/blackjack.png';
import agecalculatorImg from '../assets/agecalculator.png';
import libraryImg from '../assets/library.png';
import recipefinderImg from '../assets/recipefinder.png';
import pixelperfectionImg from '../assets/pixelperfection.png';

function Projects() {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: 'MovieMate',
      description:
        'A streamlined movie search application that allows users to find films and save their favorites for future reference.',
      image: moviemateImg,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      demoLink: 'https://moviemate.example.com',
      codeLink: 'https://github.com/yourusername/moviemate',
    },
    {
      title: 'BlackJack',
      description:
        'Interactive web-based card game implementing the classic BlackJack (21) rules with intuitive user interface.',
      image: blackjackImg,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      demoLink: 'https://blackjackbyelias.netlify.app/',
      codeLink: 'https://github.com/DevsByElias/JSblackjack',
    },
    {
      title: 'Age Calculator',
      description:
        'Simple yet powerful tool for calculating exact age in years, months, and days between any two dates with clean visualization.',
      image: agecalculatorImg,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      demoLink: 'https://vermillion-jalebi-16d144.netlify.app/',
      codeLink: 'https://github.com/DevsByElias/age-calculator',
    },
    {
      title: 'Library',
      description:
        'Digital bookshelf application for managing reading collections with features for tracking progress.',
      image: libraryImg,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      demoLink: 'https://librarybyelias.netlify.app/',
      codeLink: 'https://github.com/DevsByElias/LibraryApp',
    },
    {
      title: 'Recipe Finder',
      description:
        'Culinary discovery app that helps users find recipes based on available ingredients.',
      image: recipefinderImg,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      demoLink: 'https://mealfinder-by-elias.netlify.app/',
      codeLink: 'https://github.com/DevsByElias/RecipeFinder',
    },
    {
      title: 'Sketch Pad',
      description:
        'A pixel-based drawing application that lets users create digital art by customizing the canvas grid size and coloring individual pixels.',
      image: pixelperfectionImg,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      demoLink: 'https://pixelperfectionbyelias.netlify.app/',
      codeLink: 'https://github.com/DevsByElias/SketchPad',
    },
  ];

  return (
    <section className="pt-25">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 flex-grow text-sm text-gray-600">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-black-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex justify-between gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:text-black "
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:text-black "
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/DevsByElias"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:text-black border-1 "
          >
            View More Projects on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
