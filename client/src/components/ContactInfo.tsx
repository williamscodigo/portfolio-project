import { HiHome } from 'react-icons/hi';
import { HiMail } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';


export default function ContactInfo() {
    return (
        <div className="p-4 md:p-8 rounded-sm shadow-2xl max-w-3xl mx-auto">
            
            <address>
                <div className="mb-4">
                    <p className="trackiing-wide leading-relaxed inline-flex items-center"><HiHome className="mr-2" color="green" size={20}
                    /> <span className="mr-1">Location:</span>NC, USA</p>
                </div>
            </address>
            <div className="mb-4">
                    <p className="inline-flex items-center"><HiMail className="mr-2" color="green" size={20} /> <span className="mr-1">Email:</span><a className='hover:text-blue-500' href="mailto:info@ramirezcontruction.com">williamscodigo@gmail.com
                        </a></p>
                </div>
            
                <div className="mb-4">
                    <p className="inline-flex items-center"><FaGithub className="mr-2" color="green" size={20} /> <span className="mr-1">Github: </span><a className='hover:text-blue-500' href="https://github.com/williamscodigo/" target="_black">https://github.com/williamscodigo</a></p>
                </div>
        </div>
    );
}