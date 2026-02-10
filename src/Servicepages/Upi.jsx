// File: src/components/FinanceFAQ.jsx
import React, { useState } from "react";
import Footer from "../Header/Footer";
const FinanceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    /** ------------------ AADHAR ------------------ **/
    {
      category: "Aadhar Card",
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

    /** ------------------ PAN ------------------ **/
    {
      category: "PAN Card",
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
        {
          question: "PAN Card बनवाने के लिए कौन-कौन से डॉक्यूमेंट्स चाहिए?",
          answer:
            "Identity Proof (Aadhar, Passport, Voter ID), Address Proof (Aadhar, Passport, Utility Bill), Date of Birth Proof (Birth Certificate, 10th Marksheet)।",
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

    /** ------------------ UPI ------------------ **/
    {
      category: "UPI",
      items: [
        {
          question: "UPI क्या है?",
          answer:
            "UPI (Unified Payments Interface) एक real-time payment system है जो भारतीय बैंकों को smartphone apps के जरिए जोड़ता है।",
        },
        {
          question: "UPI कैसे काम करता है?",
          answer:
            "UPI में एक यूनिक UPI ID के जरिए आप पैसे भेज सकते हैं और प्राप्त कर सकते हैं, केवल मोबाइल नंबर या UPI ID की मदद से।",
        },
        {
          question: "UPI ID क्या है?",
          answer:
            "UPI ID एक यूनिक identifier है, जैसे example@bank, जो आपके बैंक अकाउंट से linked होता है।",
        },
        {
          question: "UPI कितने प्रकार के ऐप्स से इस्तेमाल किया जा सकता है?",
          answer:
            "PhonePe, Google Pay, Paytm, BHIM जैसी सभी UPI-supported apps से।",
        },
        {
          question: "UPI ID कैसे बनाएं?",
          answer:
            "Bank App या UPI app डाउनलोड करके अपना बैंक अकाउंट लिंक करें और UPI ID बनाएं।",
        },
        {
          question: "UPI खाते को बैंक अकाउंट से कैसे लिंक करें?",
          answer:
            "UPI app में Add Bank Account ऑप्शन से OTP verify कर अकाउंट लिंक करें।",
        },
        {
          question: "कितने बैंक अकाउंट एक ही UPI ID में लिंक कर सकते हैं?",
          answer:
            "एक UPI ID में आमतौर पर एक बैंक अकाउंट link होता है, लेकिन अलग UPI IDs अलग अकाउंट्स के लिए बना सकते हैं।",
        },
        {
          question: "मोबाइल नंबर अपडेट होने पर UPI कैसे काम करेगा?",
          answer:
            "Bank account का mobile number app में अपडेट होना चाहिए; पुराने नंबर पर OTP नहीं आएगा।",
        },
        {
          question: "UPI से पैसे कैसे भेजें?",
          answer:
            "UPI app में recipient UPI ID या QR code डालकर amount enter करें और UPI PIN डालें।",
        },
        {
          question: "UPI से पैसे कैसे प्राप्त करें?",
          answer:
            "Recipient को UPI ID दें या QR code share करें। Sender amount भेजेगा और OTP/PIN confirm करेगा।",
        },
        {
          question: "UPI में QR कोड कैसे स्कैन करें?",
          answer:
            "UPI app खोलें, Scan QR ऑप्शन चुनें, QR code scan करें और amount enter करके pay करें।",
        },
        {
          question: "UPI ट्रांजेक्शन फेल होने पर क्या करें?",
          answer:
            "Bank statement और app notification चेक करें। अगर debit हुआ लेकिन receiver को नहीं मिला तो bank/UPI support से contact करें।",
        },
        {
          question: "UPI के माध्यम से लिमिट कितनी होती है?",
          answer: "Bank और app के अनुसार daily limit ₹1 lakh तक हो सकती है।",
        },
        {
          question: "UPI PIN कैसे सेट करें?",
          answer:
            "UPI app में Bank account select करके OTP verify करें और 4–6 digit PIN set करें।",
        },
        {
          question: "अगर UPI PIN भूल जाए तो क्या करें?",
          answer:
            "App में reset/forgot PIN ऑप्शन चुनें और OTP verify करके नया PIN set करें।",
        },
        {
          question: "UPI पेमेंट सुरक्षित कैसे है?",
          answer:
            "Transaction PIN, OTP और app security के जरिए सभी payments secure होती हैं।",
        },
        {
          question: "UPI fraud होने पर क्या कदम उठाएं?",
          answer:
            "Bank या UPI helpline को तुरंत report करें और PIN change करें।",
        },
        {
          question: "UPI app block या deactivate कैसे करें?",
          answer:
            "Bank या UPI app settings में deactivate/block option use करें।",
        },
        {
          question: "UPI के लिए कौन-कौन से बैंक सपोर्ट करते हैं?",
          answer: "All major Indian banks UPI supported हैं।",
        },
        {
          question: "UPI और Mobile Banking में क्या अंतर है?",
          answer:
            "UPI instant payment interface है, जबकि mobile banking में कई services होती हैं और sometimes delay हो सकता है।",
        },
        {
          question: "UPI पेमेंट के लिए कोई शुल्क लगता है या नहीं?",
          answer: "अधिकतर apps और banks में UPI payment free होती है।",
        },
        {
          question: "UPI के future में क्या updates/फीचर्स आ सकते हैं?",
          answer:
            "Recurring payments, international payments, AI-based fraud detection आदि नए फीचर्स आ सकते हैं।",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Finance FAQ (Aadhar, PAN & UPI)
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

export default FinanceFAQ;
