import { Playfair_Display } from "next/font/google";
import Icon from "@/components/icon";
import Button from "@/components/button";

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
              <div className="flex gap-3 mt-5">
                <Button className="bg-white sm:bg-transparent rounded-full sm:rounded-none gap-1 px-3 sm:px-0 flex items-center">
                    <Icon icon='mail' className="text-portblack sm:text-white"/>
                    <p className="block sm:hidden text-portblack text-[10px] tracking-tight">Email</p>
                </Button>
                <Button className="bg-white sm:bg-transparent rounded-full sm:rounded-none gap-1 px-3 sm:px-0 flex items-center">
                    <Icon icon='linkedin' className="text-portblack sm:text-white"/>
                    <p className="block sm:hidden text-portblack text-[10px] tracking-tight">Linkedin</p>
                </Button>
                <Button className="bg-white sm:bg-transparent rounded-full sm:rounded-none gap-1 px-3 sm:px-0 flex items-center">
                    <Icon icon='github' className="text-portblack sm:text-white"/>
                    <p className="block sm:hidden text-portblack text-[10px] tracking-tight">Github</p>
                </Button>
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
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
      </main>
    </div>
  );
}
