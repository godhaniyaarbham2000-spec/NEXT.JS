import Image from "next/image";
import style from "./service.module.css";
import thapa from "@/public/thapa.jpg"

export const metadata = {
  title:"Service Page",
  description:"this is my service page",
  authors:[{name:"Arbham Mer"}, {name:"Arbham Godhaniya"}],
  keywords:["nextjs", "reactjs", "fullstack"]
}


const Service = () => {
  return (
    <>
      <h1 className={style.comman}>welcome! Service page</h1>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Team
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {/* <!-- Team Member 1 --> */}

          <div className="bg-blue-100 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
             

<Image src="/thapa.jpg" width={500} height={500} alt="thapa" className="w-full h-full rounded-full"

/>
 

            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Arbham Godhaniya
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              MERN Stack Developer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
               Next.JS & Node.JS
            </p>
          </div>

          {/* <!-- Team Member 2 --> */}
          <div className="bg-blue-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-full h-full relative bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
             <Image 
              src={thapa}
           
              alt="thapa"
              fill={true}
              sizes="(max-width: 768px) 100vw, 33vw"
               quality={75}
               priority={false}
placeholder="blur"
blurDataURL=""

             />
            </div>
         
          </div>

          {/* <!-- Team Member 3 --> */}

          <div className="bg-blue-100 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-600">JS</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Jay Sharma
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              DevOps Engineer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              AWS & Docker
            </p>
          </div>
          {/* <!-- Team Member 4 --> */}
          <div className="bg-blue-100 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-600">VL</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Virat Kohli
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Cricketer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Bat & Ball
            </p>
          </div>

          {/* <!-- Team Member 5 --> */}
          <div className="bg-blue-100 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-600">RS</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Rohit Sharma
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Captain
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Hitman
            </p>
          </div>
          {/* <!-- Team Member 6 --> */}
          <div className="bg-blue-100 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-600">SG</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              SUbhman Gill
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Gujarat Titans
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Leader
            </p>
          </div>
        </div>
      </div>
      <br /><br /><br />
    </>
  );
};

export default Service;
