// File: src/components/Support.jsx
import React from "react";
import Footer from "../Header/Footer";
const Support = () => {
  const contactDetails = {
    name: "sagar ray",
    mobile: "+91 7723977481",
    email: "raysagar077@gmaail.com.com",
    address: "satna , (m.p.)",
  };

  const supportText = `यदि आपको किसी भी सेवा के इस्तेमाल में मदद चाहिए या सवाल है, तो आप नीचे दिए गए contact details से हमसे संपर्क कर सकते हैं।`;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Support
        </h1>

        <p className="text-gray-700 mb-6 whitespace-pre-line">{supportText}</p>

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

        {/* Disclaimer */}
        <p className="text-red-600 text-sm">
          ⚠️ ध्यान दें: यह वेबसाइट किसी सरकारी संस्था द्वारा नहीं चलाई जा रही
          है। यह केवल guidance और services के लिए है।
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
