import { IoLogoTwitter } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-4 text-white bg-gray-900 dark:bg-gray-800 text-center">
      <div className="lg:max-w-6xl mx-auto">
      <div className="flex gap-x-4 items-center justify-center py-4">
            <div>
            <a target="_blank" href="https://github.com/williamscodigo/" rel="noreferrer">
              <FaGithub
                color="#fbbf24"
                size={32}
                className="transition-all ease-in-out hover:scale-125 duration-300"
              />
            </a>
            </div>
            <div>
            <a target="_blank" href="https://www.linkedin.com/" rel="noreferrer">
              <FaLinkedin 
                color="#fbbf24"
                size={32}
                className="transition-all ease-in-out hover:scale-125 duration-300"
              />
            </a>
            </div>
            <div>
            <a target="_blank" href="https://twitter.com/williamscodigo" rel="noreferrer">
              <IoLogoTwitter
                color="#fbbf24"
                size={32}
                className="transition-all ease-in-out hover:scale-125 duration-300"
              />
            </a>
            </div>
          </div>
        <div className="border-t-2 border-t-white pt-4">
        <p>&copy; {new Date().getFullYear()} williamscodigo</p>
        </div>
      </div>
    </footer>
  );
}
