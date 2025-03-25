import resume from '../assets/resume/resume.pdf';

export default function Resume() {
  return (
     <section className="resume-section flex flex-col items-center p-4 space-y-4">
     <h1 className="text-3xl font-bold mb-4 text-center md:text-left">My Resume</h1>

     {/* Embedded PDF viewer */}
     <div className="w-full max-w-4xl h-[80vh] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
       <iframe
         src={resume}
         title="Resume"
         className="w-full h-full"
       ></iframe>
     </div>
   </section>
  );
}
