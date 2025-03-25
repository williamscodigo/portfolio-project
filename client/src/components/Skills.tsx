import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { DiGit } from "react-icons/di";



export default function Skills() {
    return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 justify-center w-full">

          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-orange-600 hover:cursor-pointer">
                <DiHtml5 size={120} />
                <p className="font-bold text-center p-2">HTML5</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-blue-600 hover:cursor-pointer">
                <DiCss3 size={120} />
                <p className="font-bold text-center p-2">CSS3</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-yellow-500 hover:cursor-pointer">
                <DiJsBadge size={120} />
                <p className="font-bold text-center p-2">JavaScript</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-cyan-500 hover:cursor-pointer">
                <DiReact size={120} />
                <p className="font-bold text-center p-2">React</p>
          </div>

          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-green-600 hover:cursor-pointer">
                <DiNodejsSmall size={120} />
                <p className="font-bold text-center p-2">NodeJS</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-blue-600 hover:cursor-pointer">
                <BiLogoTypescript size={120} />
                <p className="font-bold text-center p-2">TypeScript</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-blue-700 hover:cursor-pointer">
                <BiLogoPostgresql size={120} />
                <p className="font-bold text-center p-2">PostgreSQL</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-red-500 hover:cursor-pointer">
                <DiGit size={120} />
                <p className="font-bold text-center p-2">Git</p>
          </div>
      </div>
    );
}