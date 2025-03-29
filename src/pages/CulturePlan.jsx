import { ChevronDownIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Header from "../components/Header";

const CulturePlan = () => {
  const location = useLocation();
  const responseData = location.state || {};
  const [expandedSection, setExpandedSection] = useState(null);
  const pdfRef = useRef();

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <div className="container mx-auto">
        <Header />
        <BreadCrumb />
        <div className="max-w-4xl mx-auto" ref={pdfRef}>
          {/* En-tête du PDF avec logo et date */}
          <div className="pdf-header flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <SparklesIcon className="w-8 h-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-800">
                Plan de Culture Intelligent
              </h1>
            </div>
            <div className="text-sm text-gray-500">
              Généré le {new Date().toLocaleDateString()}
            </div>
          </div>

          <div className="space-y-6">
            {responseData.map((section, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg transition-all duration-300 ${
                  expandedSection === index
                    ? "ring-2 ring-blue-500"
                    : "hover:ring-1 hover:ring-blue-200"
                }`}
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full p-6 flex justify-between items-center"
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    {section.name}
                  </h2>
                  <ChevronDownIcon
                    className={`w-6 h-6 transform transition-transform ${
                      expandedSection === index
                        ? "rotate-180 text-blue-600"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSection === index
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <ul className="space-y-4">
                      {section.content.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700 animate-fadeIn"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturePlan;
