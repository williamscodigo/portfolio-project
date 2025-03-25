import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

export default function Contact() {

  return (
    <>
    <section className='mb-4 p-4 md:p-8 rounded-sm shadow-2xl max-w-3xl mx-auto'>
    <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Contact Me</h1>
    <ContactInfo />
    </section>
    <section className="p-4 md:p-8 rounded-sm shadow-2xl max-w-3xl mx-auto">
    <div className="mb-24">
        <ContactForm />
    </div>     
    </section>
    </>
  );
}
