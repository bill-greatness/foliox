import { BiCheckDouble } from "react-icons/bi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { HiMiniArrowUturnDown } from "react-icons/hi2";
import { motion } from "framer-motion";
import Link from "next/link";
import { TbIdBadge, TbLockSquareRounded } from "react-icons/tb";

const Heading = ({ desc }) => (
  <div className="relative">
    <h3 className="text-lg py-3">{desc}</h3>
    <div className="w-10 h-1 rounded-r-full bg-teal-500 absolute bottom-2"></div>
  </div>
);
export const Details = ({ data, close }) => {
  return (
    <motion.div
      initial={{ y: 100}}
      animate={{ y: 0}}
      exit={{ y: 100}}
      transition={{ duration: 0.7 }}
      className="flex fixed bottom-0 w-full items-center justify-center"
    >
      <div className="flex flex-col  h-[80vh] rounded-t-lg overflow-y-auto w-[98vw] md:w-[90%] items-center bg-gray-400">
        <div className="sticky top-0 w-full">
          <button
            onClick={close}
            className="absolute right-5 top-3 bg-red-500 p-1"
          >
            <HiMiniArrowUturnDown className="text-white text-xl" />
          </button>
        </div>

        <div className="mt-10 md:p-5  w-full bg-white">
          <div className="flex w-full flex-col md:justify-start md:flex-row gap-2">
            <div
              style={{ backgroundImage: `url(${data.cover})` }}
              className="bg-cover bg-center bg-no-repeat w-full h-48 md:w-40 md:h-40 shrink-0"
            ></div>
            <div className="flex flex-col p-2">
              <div className="flex flex-col gap-2 py-2">
                <h3 className="text-2xl py-2">{data?.name}</h3>
                <p className="text-xs">Tools: {data.tools}</p>
                <p className="text-xs ">Tag: {data.tags} | Views: {data.views}</p>
              </div>

              <p className="text-sm leading-relaxed">{data.desc}</p>
            </div>
          </div>

          <div className="flex flex-col mt-5 p-2">
            <Heading desc={"Project Components"} />
            <ul className="flex space-y-2 flex-col">
              {data?.components?.map((info, idx) => (
                <li className="flex gap-2 items-center " key={idx}>
                  <BiCheckDouble className="text-2xl" />
                  <p className="text-sm">{info}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Pictures */}
          {data.images && (
            <>
              <Heading desc="Images" />
              <div className="flex flex-wrap gap-2 items-center w-full md:justify-start justify-center p-2">
                <div className="w-32 h-32 bg-blue-500"></div>
                <div className="w-32 h-32 bg-blue-500"></div>
                <div className="w-32 h-32 bg-blue-500"></div>
                <div className="w-32 h-32 bg-blue-500"></div>
              </div>
            </>
          )}

          {/* Links & Credentials */}
          <div className="flex flex-col p-2">
            <Link
              href={data.link}
              target="_blank"
              rel="noopener"
              className="flex items-center text-md my-4 gap-1"
            >
              {" "}
              <HiOutlineExternalLink />{" "}
              <p className="text-xs md:text-sm">Visit Project</p>
            </Link>
            {data.tags === "FullStack" && (
              <div className="flex flex-col gap-2">
                <Heading desc={"Credentials"} />
                <p className="flex items-center">
                  <TbIdBadge className="text-xl" />: {`{request_for_id}`}
                </p>
                <p className="flex items-center">
                  <TbLockSquareRounded className="text-xl" />:{" "}
                  {`{request_for_password}`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
