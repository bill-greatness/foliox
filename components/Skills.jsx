import { BsEyeglasses } from "react-icons/bs";

export const Skill = ({ project, setProject }) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="w-full md:w-[45%] border-2 border-gray-50 shadow-md flex flex-col relative overflow-hidden rounded-lg h-[40vh] bg-red-500 hover:border-y-2 border-white transition hover:delay-150 hover:scale-75"
    >
      <div style={{backgroundImage:`linear-gradient(70deg, rgba(80, 80, 140, 0.7), rgba(50, 40, 40, 0.7)), url(${project.cover})`}} className={`flex flex-1 justify-center bg-contain bg-center `}>
        <div className="text-left p-2">
          <h3 className="text-2xl text-gray-100 leading-relaxed">
            {project.name}
          </h3>
          <div className="max-h-[120px] overflow-hidden">
            <p className="text-md leading-relaxed text-white ">
              {project.desc}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 bg-blue-50 w-auto  p-2 rounded-tr-lg">
        <p className="text-xs">{project.tools}</p>
      </div>
      <button
        onClick={() => setProject({ ...project, show: true })}
        className="absolute bottom-0 right-0 bg-white p-2 rounded-l-full"
      >
        <BsEyeglasses className="text-lg" />
      </button>
    </div>
  );
};
