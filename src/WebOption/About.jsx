// File: src/components/About.jsx
import React from "react";
import Footer from "../Header/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
          About This Website
        </h1>

        <p className="text-gray-700 text-lg mb-4">
          यह वेबसाइट लोगों को विभिन्न सरकारी सेवाओं और डिजिटल प्रक्रियाओं की
          जानकारी प्रदान करने के लिए बनाई गई है। यहाँ आपको आधार कार्ड, PAN
          कार्ड, UPI और अन्य सेवाओं के बारे में guidance और जानकारी मिलेगी।
        </p>

        <p className="text-gray-700 text-lg mb-4">
          ⚠️ ध्यान दें: यह वेबसाइट किसी सरकारी संस्था द्वारा नहीं चलाई जा रही
          है। यहाँ दी गई जानकारी केवल मार्गदर्शन (Guidance) और उपयोगी सेवाओं के
          लिए है। किसी भी प्रकार के official काम के लिए संबंधित सरकारी वेबसाइट
          या विभाग से सीधे संपर्क करें।
        </p>

        <p className="text-gray-700 text-lg mb-4">
          हमारी कोशिश है कि users को आसान, सरल और step-by-step जानकारी मिले,
          जिससे वे ऑनलाइन सरकारी और डिजिटल सेवाओं का सही तरीके से उपयोग कर सकें।
        </p>

        <p className="text-gray-700 text-lg mb-4">
          यदि आपके पास कोई सुझाव या सवाल है, तो आप हमारे{" "}
          <span className="font-semibold text-indigo-600">Contact / FIR</span>{" "}
          page पर जा सकते हैं।
        </p>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Support Services | All rights reserved
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
