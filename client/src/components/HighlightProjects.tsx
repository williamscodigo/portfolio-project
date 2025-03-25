import weatherDashboardImage from '../assets/weather-dashboard.png';
import memoryGameImage from '../assets/memory-game.png';


export default function HighlightProjects() {
    return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
        <img src={weatherDashboardImage} alt="weather dashboard app screenshot" className='rounded-lg mb-4 opacity-90 shadow-sm transition duration-300 hover:opacity-100 hover:shadow-lg' />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Weather Dashboard</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Project Type: Font-End</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">Acquired: Experience working with external APIs</span>
        <div className="flex mt-4 md:mt-6">
            <a href="https://weather-dashboard-k6u9.onrender.com/" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Live Project</a>
            <a href="https://github.com/williamscodigo/weather-dashboard" target="_blank" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Github Code</a>
        </div>
    </div>
    <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
    <img src={memoryGameImage} alt="memory game app screenshot" className='rounded-lg mb-4 opacity-90 shadow-sm transition duration-300 hover:opacity-100 hover:shadow-lg' />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Memory Game</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Project Type: Font-End</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">Acquired: Team work environment experience</span>
        <div className="flex mt-4 md:mt-6">
            <a href="https://williamscodigo.github.io/memory-game/" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Live Project</a>
            <a href="https://github.com/williamscodigo/memory-game" target="_blank" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Github Code</a>
        </div>
    </div>
</div>
    );
}   