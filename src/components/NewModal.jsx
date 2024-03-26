import { AnimatePresence, motion } from "framer-motion";
// import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import {modalsdata} from "../components/modals_data";
import {ModalsCard} from '../components/modal_card.js';

const Wrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-400 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity">
        {isOpen ? "Close" : "Events"}
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
                <h3 className="text-3xl font=semibold text-center">Events under the Counselling Cell</h3>
                <div className="p-6">
                  {modalsdata.map((news, index) => {
                    return (
                      <ModalsCard
                        className="text-justify"
                        title={news.title}
                        date={news.date}
                        key={index}
                        name={news.name}
                        link={news.link || ""}
                      />
                    );
                  })}
                </div>
              <div className="flex gap-1">
              <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Wrapper;