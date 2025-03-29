import { useState, useRef } from 'react';
import { ChevronDownIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';

const CulturePlan = () => {
  const location = useLocation();
  const responseData = location.state || {};
  const [expandedSection, setExpandedSection] = useState(null);
  const pdfRef = useRef();

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const generatePDF = async () => {
    const element = pdfRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: true,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    
    // Ajout des métadonnées
    const fileName = `Plan_Culture_${new Date().toISOString().slice(0, 10)}.pdf`;
    pdf.setProperties({
      title: 'Plan de Culture Intelligent',
      subject: 'Détails du plan de culture',
      author: 'AgriTech App',
      keywords: 'agriculture, plan, culture',
    });

    // Ajout d'un pied de page
    const pageCount = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(10);
      pdf.setTextColor(150);
      pdf.text(
        `Page ${i} sur ${pageCount}`,
        pdfWidth / 2,
        pdf.internal.pageSize.getHeight() - 10,
        { align: 'center' }
      );
    }

    pdf.save(fileName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-4">
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
                expandedSection === index ? 'ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-blue-200'
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
                    expandedSection === index ? 'rotate-180 text-blue-600' : 'text-gray-400'
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedSection === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
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

        <div className="mt-8 flex gap-4 justify-end">
          <button 
            onClick={generatePDF}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Générer PDF
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            Partager
          </button>
        </div>
      </div>
    </div>
  );
};

export default CulturePlan;