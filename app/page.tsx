import { Playfair_Display } from "next/font/google";
import Icon from "@/components/icon";

import { experience, projects, skills } from "@/data/information";
import Badge from "@/components/badge";
import ExperienceCard from "@/components/experience-card";
import ProjectCard from "@/components/project-card";

const playfairFont = Playfair_Display()

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-5 items-center bg-portblack font-sans dark:bg-black relative">
      <main className="text-white flex flex-col justify-center w-full max-w-250 min-w-70">
        <div className="flex md:grid grid-cols-12 w-full border border-portgray bg-portgray gap-px">
          {
              Array.from({length: 30}, (_, index) => (
                <div key={index} className="hidden md:block aspect-square bg-portblack box-content"/>
              ))
          }
          <div className="py-7 md:py-0 col-start-2 col-end-12 row-start-2 row-end-5 flex flex-col justify-center items-center bg-portblack w-full">
              <h1 className={`text-3xl lg:text-5xl font-bold tracking-tighter`}>Ryan Benin</h1>
              <h2 className={`text-xl lg:text-3xl tracking-tight ${playfairFont.className}`}>Aspiring Software Developer</h2>
              <div className="flex flex-col gap-3.5 md:gap-1 items-center mt-3 px-7">
                <p className="text-xs lg:text-sm tracking-tight w-full sm:text-center text-center">I’m a graduating BSIT student who loves to implement <span className="font-bold">business solutions</span> with modern web and mobile technologies.</p>
                <p className="text-xs lg:text-sm tracking-tight w-full sm:text-center text-center">Currently, I’m looking for a <span className="font-bold">developer internship</span> to kickstart my career in the tech industry.</p>
              </div>
              <div className="flex h-8 gap-3 mt-5">
                <a className="bg-white sm:bg-transparent rounded-lg sm:rounded-none gap-1 px-3 sm:px-0 flex items-center cursor-pointer transition-transform sm:hover:pb-1"
                  href='mailto:rdbenin@gmail.com' target="_blank">
                    <Icon icon='mail' className="text-portblack sm:text-white"/>
                    <p className="block sm:hidden text-portblack text-[10px] tracking-tight">Email</p>
                </a>
                <a className="bg-white sm:bg-transparent rounded-lg sm:rounded-none gap-1 px-3 sm:px-0 flex items-center cursor-pointer transition-transform sm:hover:pb-1"
                  href='https://www.linkedin.com/in/rbenin/' target="_blank">
                    <Icon icon='linkedin' className="text-portblack sm:text-white"/>
                    <p className="block sm:hidden text-portblack text-[10px] tracking-tight">LinkedIn</p>
                </a>
                <a className="bg-white sm:bg-transparent rounded-lg sm:rounded-none gap-1 px-3 sm:px-0 flex items-center cursor-pointer transition-transform sm:hover:pb-1"
                  href='https://github.com/r-benin' target="_blank">
                    <Icon icon='github' className="text-portblack sm:text-white"/>
                    <p className="block sm:hidden text-portblack text-[10px] tracking-tight">GitHub</p>
                </a>
              </div>
          </div>
        </div>
        <div className="w-full h-2.5 md:h-5 border-x border-portgray" />
        <div className="w-full border border-portgray flex flex-col md:flex-row">
          <div className="flex-1 md:w-7/12 p-5 pb-0 md:pb-5">
            <h2 className="font-semibold mb-3 w-full text-center md:text-left text-lg">Technical Skills</h2>
            <div className="w-full flex flex-col md:flex-row md:flex-wrap ">
              <div className="flex flex-col w-full md:w-1/2 pr-1">
                <h3 className="text-sm font-semibold mb-2">Frameworks & Technologies</h3>
                <div className="flex flex-wrap gap-1 pb-5">
                  {
                    skills['frameworks'].map((skill) => {
                      return (<Badge key={skill.toLowerCase()}>{skill}</Badge>)
                    })
                  }
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2 pr-1">
                <h3 className="text-sm font-semibold mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-1 pb-5">
                  {
                    skills['languages'].map((skill) => {
                      return (<Badge key={skill.toLowerCase()}>{skill}</Badge>)
                    })
                  }
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2 pr-1">
                <h3 className="text-sm font-semibold mb-2">Databases</h3>
                <div className="flex flex-wrap gap-1 pb-5">
                  {
                    skills['databases'].map((skill) => {
                      return (<Badge key={skill.toLowerCase()}>{skill}</Badge>)
                    })
                  }
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2 pr-1">
                <h3 className="text-sm font-semibold mb-2">Tools</h3>
                <div className="flex flex-wrap gap-1 pb-5">
                  {
                    skills['tools'].map((skill) => {
                      return (<Badge key={skill.toLowerCase()}>{skill}</Badge>)
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 md:border-l p-5 pt-1 md:pt-5 border-portgray">
            <h2 className="font-semibold mb-3 w-full text-center md:text-left text-lg">Experience</h2>
            <div className="flex flex-col gap-2">
              { experience.map((exp, index) => <ExperienceCard key={index} title={exp.title} subtitle={exp.subtitle} year={exp.year} />) }
            </div>
          </div>
        </div>
        <div className="w-full h-2.5 md:h-5 border-x border-portgray" />
        <div className="w-full border border-portgray flex flex-col items-center p-5">
          <h2 className="font-semibold mb-3 w-full text-center text-lg">Recent Projects</h2>
          <div className="w-full flex flex-col sm:flex-row flex-wrap gap-3">
            {
              projects.map((project, index) => <ProjectCard key={index} title={project.title} subtitle={project.subtitle} image={project.image} github={project.github} website={project.website} />)
            }
          </div>
        </div>
        <div className="w-full h-5 md:h-20 bg-linear-to-b from-portgray to-portgray/0 px-px mb-5">
          <div className="w-full h-full bg-portblack"></div>
        </div>
      </main>
    </div>
  );
}
