// File: src/components/PredefinedFIR.jsx
import React from "react";
import Footer from "../Header/Footer";
const PredefinedFIR = () => {
  // तुम्हारे contact details और complaint content यहाँ डालो
  const contactDetails = {
    name: "sagar ray",
    mobile: "+91 7723977481",
    email: "raysagar077@gmail.com",
    address: "satna , (m.p.)",
  };

  const complaintText = `यह शिकायत इस बात के लिए है कि वेबसाइट पर कुछ जानकारी update नहीं हो रही है। 
हमने कई बार request किया है, लेकिन कोई response नहीं मिला। 
कृपया तुरंत action लें।`;

  const descriptionText = `⚠️ ध्यान दें: यह वेबसाइट किसी सरकारी संस्था द्वारा नहीं चलाई जा रही है। 
यह केवल guidance और services प्रदान करने के लिए है।`;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          FIR / Complaint
        </h1>

        {/* Extra Description */}
        <p className="text-sm text-red-600 mb-6 whitespace-pre-line">
          {descriptionText}
        </p>

        {/* Contact Details */}
        <div className="space-y-2 mb-6">
          <p>
            <span className="font-semibold">Name:</span> {contactDetails.name}
          </p>
          <p>
            <span className="font-semibold">Mobile:</span>{" "}
            <a
              href={`tel:${contactDetails.mobile}`}
              className="text-indigo-600 hover:underline"
            >
              {contactDetails.mobile}
            </a>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-indigo-600 hover:underline"
            >
              {contactDetails.email}
            </a>
          </p>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            {contactDetails.address}
          </p>
        </div>

        {/* Complaint Details */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Complaint Details:
          </h2>
          <p className="text-gray-700 whitespace-pre-line">{complaintText}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PredefinedFIR;
