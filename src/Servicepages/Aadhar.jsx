// File: src/pages/AadharDetails.jsx
import React, { useState } from "react";
import Footer from "../Header/Footer";
const AadharDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "सामान्य जानकारी (General Info)",
      items: [
        {
          question: "Aadhar Card क्या है?",
          answer:
            "Aadhar Card भारत सरकार द्वारा जारी एक 12 अंकों का यूनिक पहचान नंबर है, जो हर भारतीय नागरिक को दिया जाता है।",
        },
        {
          question: "Aadhar Card किसके लिए होता है?",
          answer: "यह सभी भारतीय नागरिकों के लिए है, चाहे बच्चे हों या बड़े।",
        },
        {
          question: "Aadhar Card बनाने की उम्र/शर्तें क्या हैं?",
          answer:
            "किसी भी उम्र का भारतीय नागरिक Aadhar के लिए आवेदन कर सकता है। बच्चों के लिए माता-पिता/अभिभावक की सहमति जरूरी है।",
        },
      ],
    },
    {
      category: "प्रक्रिया (Process)",
      items: [
        {
          question: "Aadhar Card बनाने के चरण क्या हैं?",
          answer:
            "1. नज़दीकी Aadhar Enrollment Center जाएँ।\n2. फॉर्म भरें और जरूरी डॉक्यूमेंट्स दें।\n3. बायोमेट्रिक डेटा और फोटो दें।\n4. Enrollment ID मिलते ही Aadhar कार्ड ऑनलाइन चेक किया जा सकता है।",
        },
        {
          question: "Online Appointment कैसे लें?",
          answer:
            "https://appointments.uidai.gov.in पर जाकर अपने शहर का केंद्र चुनें और समय स्लॉट बुक करें।",
        },
        {
          question: "Aadhar अपडेट/सुधार कैसे करें?",
          answer:
            "पता, नाम, जन्मतिथि, मोबाइल नंबर आदि अपडेट करने के लिए UIDAI की वेबसाइट या Enrollment Center जाएँ।",
        },
      ],
    },
    {
      category: "समस्याओं का समाधान (Troubleshooting)",
      items: [
        {
          question: "Lost Aadhar Card कैसे पाएं?",
          answer: "UIDAI की वेबसाइट से e-Aadhar डाउनलोड कर सकते हैं।",
        },
        {
          question: "Enrollment ID/UID गलत होने पर क्या करें?",
          answer:
            "Enrollment Center जाकर सुधार करवाएँ या UIDAI वेबसाइट पर शिकायत दर्ज करें।",
        },
        {
          question: "Aadhar लिंक नहीं हो रहा (Bank/Mobile/PAN)?",
          answer: "सही Aadhar नंबर और मोबाइल नंबर OTP वेरिफाई करें।",
        },
      ],
    },
    {
      category: "Aadhar लिंकिंग (Linking)",
      items: [
        {
          question:
            "PAN, Bank Account, Mobile Number से Aadhar link कैसे करें?",
          answer:
            "बैंक या मोबाइल सर्विस प्रोवाइडर के जरिए OTP वेरिफिकेशन के बाद लिंक किया जा सकता है।",
        },
        {
          question: "Aadhar OTP / e-KYC क्या है?",
          answer:
            "OTP – एक बार का पासवर्ड जो मोबाइल पर भेजा जाता है। e-KYC – इलेक्ट्रॉनिक तरीके से पहचान प्रमाणित करना।",
        },
      ],
    },
    {
      category: "सुरक्षा और प्राइवेसी (Security & Privacy)",
      items: [
        {
          question: "Aadhar की जानकारी सुरक्षित कैसे रखें?",
          answer:
            "किसी को Aadhar कार्ड/Number बिना जरूरत न दें। OTP और बायोमेट्रिक जानकारी साझा न करें।",
        },
        {
          question: "Biometrics क्या है?",
          answer: "फिंगरप्रिंट और आईरिस स्कैन जैसी पहचान तकनीक।",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Aadhar Card पूरी जानकारी
        </h1>
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.items.map((faq, index) => {
                const globalIndex = `${sectionIndex}-${index}`;
                return (
                  <div
                    key={globalIndex}
                    className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-indigo-50 transition"
                    onClick={() => toggleFAQ(globalIndex)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </h3>
                      <span className="text-indigo-500 font-bold">
                        {openIndex === globalIndex ? "-" : "+"}
                      </span>
                    </div>
                    {openIndex === globalIndex && (
                      <p className="mt-2 text-gray-700 whitespace-pre-line">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AadharDetails;
