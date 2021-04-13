import { useState } from "react"

const AboutCard = () => {

    const [counter, setCounter] = useState(0)

    return <div className=" flex flex-col items-center px-5 py-20 space-y-2">
        <div style={{ width: '45%' }} className="p-10 border-4 shadow rounded-md border-green-800">
            <div className="font-bold text-green-700 text-6xl">I am Prasann Choudhari.</div>
            <div className="text-3xl font-mono font-semibold text-green-500"> I am a software engineer</div>
            <div className="font-bold text-xl text-green-900">I like building apps
                with dotnet, and javascript and have been professionally developing apps for the past 6 years.
            </div>
            <div className={counter % 2 == 0 ? "hidden" : "show"}>
                <p className="my-2 text-green-800 text-xl">
                    I love chai, music, tech, meditaion, understanding the nature of reality and consciounsess.
                </p>
            </div>

            <button onClick={() => setCounter(old => old + 1)} className=" shadow-sm duration-500 mt-5 space-x-10 justify-left bg-gray-100 hover:bg-green-500 hover:text-white p-2 font-mono focus:outline-none">
                {counter % 2 == 0 ? "(more)" : "(less)"}
            </button>
        </div>
    </div >
}

export default AboutCard