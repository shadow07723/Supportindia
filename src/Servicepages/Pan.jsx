// File: src/components/PanCardDetails.jsx
import React, { useState } from "react";
import Footer from "../Header/Footer";

const PanCardDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "सामान्य जानकारी (General Info)",
      items: [
        {
          question: "PAN Card क्या है?",
          answer:
            "PAN (Permanent Account Number) कार्ड एक 10-अंकों का यूनिक नंबर है जो Income Tax Department भारत सरकार द्वारा जारी किया जाता है।",
        },
        {
          question: "PAN Card किसके लिए होता है?",
          answer:
            "यह सभी भारतीय नागरिकों और भारत में रहने वाले गैर-नागरिकों के लिए है जो टैक्स भरते हैं या वित्तीय लेन-देन करते हैं।",
        },
        {
          question: "PAN Card बनाने की उम्र/शर्तें क्या हैं?",
          answer:
            "18 साल से ऊपर के व्यक्ति या जो टैक्स भरते हैं, PAN के लिए आवेदन कर सकते हैं।",
        },
      ],
    },
    {
      category: "प्रक्रिया (Process)",
      items: [
        {
          question: "PAN Card कैसे बनाएं?",
          answer:
            "1. NSDL या UTIITSL वेबसाइट पर जाएँ।\n2. ऑनलाइन फॉर्म भरें (Form 49A – Indian, Form 49AA – NRI/Foreign).\n3. आवश्यक डॉक्यूमेंट्स अपलोड करें (Identity, Address, जन्मतिथि प्रमाण)।\n4. फीस का भुगतान करें और acknowledgment slip प्राप्त करें।\n5. PAN Card डाक द्वारा घर पर भेजा जाएगा।",
        },
        {
          question: "Online या Offline आवेदन में अंतर?",
          answer:
            "Online: Form और documents upload करके apply करना।\nOffline: Form भरकर NSDL/UTIITSL के ऑफिस में जमा करना।",
        },
      ],
    },
    {
      category: "समस्याओं का समाधान (Troubleshooting)",
      items: [
        {
          question: "Lost PAN Card कैसे पाएं?",
          answer: "ऑनलाइन reprint के लिए NSDL/UTIITSL की वेबसाइट पर जाएँ।",
        },
        {
          question: "PAN Card में नाम, जन्मतिथि या पता गलत है तो क्या करें?",
          answer: "Correction form भरें और ऑनलाइन या ऑफलाइन submit करें।",
        },
        {
          question: "PAN Card link नहीं हो रहा (Aadhar/Bank)?",
          answer: "सही PAN नंबर और Aadhar नंबर डालें और OTP वेरिफाई करें।",
        },
      ],
    },
    {
      category: "PAN Card लिंकिंग (Linking)",
      items: [
        {
          question: "Aadhar से PAN link कैसे करें?",
          answer:
            "Income Tax India e-Filing वेबसाइट पर जाएँ और अपने PAN और Aadhar नंबर डालकर लिंक करें।",
        },
        {
          question:
            "Bank Account या अन्य वित्तीय संस्थान से PAN link कैसे करें?",
          answer: "बैंक में PAN number अपडेट करें, अगर पहले नहीं दिया तो।",
        },
      ],
    },
    {
      category: "सुरक्षा और प्राइवेसी (Security & Privacy)",
      items: [
        {
          question: "PAN Card जानकारी सुरक्षित कैसे रखें?",
          answer:
            "PAN नंबर और acknowledgment slip किसी अनजान व्यक्ति के साथ साझा न करें।",
        },
        {
          question: "PAN Card और वित्तीय लेन-देन में महत्व?",
          answer:
            "PAN Card बैंक खाता खोलने, टैक्स फाइल करने, फिक्स्ड डिपॉजिट, शेयर, या बड़ी राशि के लेन-देन में जरूरी है।",
        },
      ],
    },
    {
      category: "अतिरिक्त सवाल (Additional Questions)",
      items: [
        {
          question: "PAN Card बनवाने के लिए कौन-कौन से डॉक्यूमेंट्स चाहिए?",
          answer:
            "Identity Proof (जैसे: Aadhar, Passport, Voter ID), Address Proof (जैसे: Aadhar, Passport, Utility Bill), Date of Birth Proof (जैसे: Birth Certificate, 10th Marksheet)।",
        },
        {
          question: "क्या बच्चों के लिए PAN Card बनता है?",
          answer:
            "हां, बच्चों के लिए भी PAN बन सकता है, बायोमेट्रिक जरूरी नहीं, लेकिन माता-पिता की ID और जन्म प्रमाण पत्र चाहिए।",
        },
        {
          question: "PAN Card कितने दिन में बनकर आता है?",
          answer:
            "आम तौर पर 15–20 दिन में PAN Card डाक द्वारा घर पर पहुँच जाता है।",
        },
        {
          question: "PAN Card की फीस कितनी है?",
          answer: "ऑनलाइन आवेदन: ₹110 (भारत में) / ₹1,020 (विदेश से आवेदन)।",
        },
        {
          question: "Duplicate PAN Card कैसे पाएँ?",
          answer:
            "Lost PAN Card के लिए NSDL/UTIITSL वेबसाइट पर Reprint आवेदन करें।",
        },
        {
          question: "PAN Card और Income Tax Return (ITR) का संबंध क्या है?",
          answer:
            "PAN Card बिना ITR फाइल नहीं कर सकते। सभी टैक्सपेयर PAN से जुड़े होते हैं।",
        },
        {
          question: "क्या एक व्यक्ति के पास एक से ज्यादा PAN Card हो सकते हैं?",
          answer:
            "नहीं, एक व्यक्ति के लिए केवल एक ही PAN Card वैध है। अगर कोई दूसरा बनवाता है तो यह कानूनन अपराध है।",
        },
        {
          question: "PAN Card बदलने/अपडेट करने के लिए क्या करना होगा?",
          answer:
            "Correction/Update form भरें और सही डॉक्यूमेंट्स के साथ NSDL/UTIITSL को submit करें।",
        },
        {
          question: "PAN Card की validity कितनी है?",
          answer: "PAN Card lifetime के लिए वैध है।",
        },
        {
          question: "PAN Card ऑनलाइन verify कैसे करें?",
          answer:
            "Income Tax e-Filing वेबसाइट पर “PAN Verification” ऑप्शन से verify कर सकते हैं।",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          PAN Card पूरी जानकारी
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

export default PanCardDetails;
