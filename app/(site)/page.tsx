import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-5xl font-extrabold sm:text-7xl">
        Hello I&apos;m
        <span className="bg-gradient-to-r from-blue-400 via-gray-400 to-purple-300 bg-clip-text text-transparent">
          {" "}
          Nada!
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Hello everyone! I am Nada Al-Sharqawy, I am a Frontend developer..{" "}
        <br />
        Check out my projects!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className=" p-1 hover:scale-105 hover:border-blue-200 transition">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={300}
                className="object-cover rounded-lg border border-blue-200"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-blue-400 via-gray-400 to-purple-300 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
