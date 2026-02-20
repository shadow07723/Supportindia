import React, { useContext,useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import { FaChevronDown } from "react-icons/fa6";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Footer from "../Header/Footer";
import { Helmet } from "react-helmet-async";

function AadhaarStatusGuide() {
  const { lang } = useContext(LanguageContext);
  const location = useLocation();

  // ✅ STEP 1: Dropdown state add kiya
  const [openFAQ, setOpenFAQ] = useState(null);

  // ✅ STEP 2: Toggle function
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const linkClass = (path) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  const panLinks = {
    en: [
      // Update Aadhaar
      {
        label: (
          <h2 className="flex items-center text-lg text-blue-300 ">
            Update Aadhaar
            <FaChevronDown className="" />
          </h2>
        ),
      },
      { label: "Check Aadhaar Update Status", path: "/AadhaarStatusGuide" },
      {
        label: "Update Demographics Data & Check Status",
        path: "/update-aadhaar",
      },
      { label: "Enrolment & Update Forms", path: "/status-aadhaar" },
      { label: "Aadhaar Enrolment & Update Charges", path: "/new-aadhaar" },
      { label: "Aadhaar Update History", path: "/update-aadhaar" },

      // Get Aadhaar
      {
        label: (
          <h2 className="flex items-center text-lg text-blue-300 ">
            Get Aadhaar
            <FaChevronDown className="" />
          </h2>
        ),
      },
      { label: "Book an Appointment", path: "/new-aadhaar" },
      {
        label: "Check Aadhaar Status",
        path: "/update-aadhaar",
      },
      { label: "Download Aadhaar", path: "/status-aadhaar" },
      { label: "Order Aadhaar PVC Card", path: "/new-aadhaar" },
      { label: "Check Aadhaar PVC Card Status", path: "/update-aadhaar" },
      { label: "Aadhaar Enrolment & Update Charges", path: "/new-aadhaar" },
      { label: "Enrolment & Update Forms", path: "/update-aadhaar" },

      // Aadhaar Services
      {
        label: (
          <h2 className="flex items-center text-lg text-blue-300 ">
            Aadhaar Services
            <FaChevronDown className="" />
          </h2>
        ),
      },
      { label: "Verify an Aadhaar Number", path: "/new-aadhaar" },
      {
        label: "Verify Email/Mobile Number",
        path: "/update-aadhaar",
      },
      { label: "Virtual ID (VID) Generator", path: "/status-aadhaar" },
      { label: "Aadhaar Paperless Offline e-kyc (Beta)", path: "/new-aadhaar" },
      { label: "Lock/Unlock Biometrics", path: "/update-aadhaar" },
    ],
    hi: [
      // Update Aadhaar
      {
        label: (
          <h2 className="flex items-center text-lg text-blue-300 ">
            आधार अपडेट करें
            <FaChevronDown className="" />
          </h2>
        ),
      },
      {
        label: "आधार अपडेट की स्थिति जांचें",
        path: "/AadhaarStatusGuide",
      },
      {
        label: "जनसांख्यिकीय डेटा अपडेट करें और स्थिति जांचें",
        path: "/update-aadhaar",
      },
      {
        label: "नामांकन एवं अद्यतन प्रपत्र",
        path: "/status-aadhaar",
      },
      { label: "आधार नामांकन और अद्यतन शुल्क", path: "/new-aadhaar" },
      { label: "आधार अपडेट इतिहास", path: "/update-aadhaar" },

      // Get Aadhaar
      {
        label: (
          <h2 className="flex items-center text-lg text-blue-300 ">
            आधार कार्ड प्राप्त करें
            <FaChevronDown className="" />
          </h2>
        ),
      },
      { label: "अपॉइंटमेंट बुक करें", path: "/new-aadhaar" },
      {
        label: "आधार स्टेटस चेक करें",
        path: "/update-aadhaar",
      },
      { label: "आधार डाउनलोड करें", path: "/status-aadhaar" },
      { label: "आधार पीवीसी कार्ड ऑर्डर करें", path: "/new-aadhaar" },
      { label: "आधार पीवीसी कार्ड की स्थिति जांचें", path: "/update-aadhaar" },
      { label: "आधार नामांकन और अद्यतन शुल्क", path: "/new-aadhaar" },
      { label: "नामांकन एवं अद्यतन प्रपत्र", path: "/update-aadhaar" },

      // Aadhaar Services
      {
        label: (
          <h2 className="flex items-center text-lg text-blue-300 ">
            आधार सेवाएं
            <FaChevronDown className="" />
          </h2>
        ),
      },
      { label: "आधार नंबर सत्यापित करें", path: "/new-aadhaar" },
      {
        label: "ईमेल/मोबाइल नंबर सत्यापित करें",
        path: "/update-aadhaar",
      },
      { label: "वर्चुअल आईडी (वीआईडी) जनरेटर", path: "/status-aadhaar" },
      { label: "आधार पेपरलेस ऑफलाइन ई-केवाईसी (बीटा)", path: "/new-aadhaar" },
      { label: "बायोमेट्रिक्स को लॉक/अनलॉक करें", path: "/update-aadhaar" },
    ],
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr] h-screen overflow-hidden">
      <Helmet>
        {/* ✅ Title (Primary Ranking Factor) */}
        <title>
          Check Aadhaar Status Online by EID, SRN, URN, SID | UIDAI Aadhaar
          Status Guide
        </title>

        {/* ✅ Meta Description */}
        <meta
          name="description"
          content="Check Aadhaar card status online using Enrollment ID (EID), SRN, URN, or SID. Complete step-by-step UIDAI guide to track Aadhaar update, PVC card, and enrollment status instantly."
        />

        {/* ✅ Mobile SEO (VERY IMPORTANT) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://supportin.in/AadhaarStatusGuide" />

        {/* ✅ Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* ✅ Author */}
        <meta name="author" content="Support India" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Check Aadhaar Status Online | UIDAI Guide"
        />
        <meta
          property="og:description"
          content="Track Aadhaar status using EID, SRN, URN or SID with complete UIDAI guide."
        />
        <meta
          property="og:url"
          content="https://supportin.in/AadhaarStatusGuide"
        />
        <meta property="og:image" content="https://supportin.in/Logo.png" />
        <meta property="og:site_name" content="Support India" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Check Aadhaar Status Online | UIDAI Guide"
        />
        <meta
          name="twitter:description"
          content="Step-by-step guide to check Aadhaar status."
        />
        <meta name="twitter:image" content="https://supportin.in/Logo.png" />

        {/* ✅ FAQ Structured Data (VERY IMPORTANT) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How to check Aadhaar status?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can check Aadhaar status using Enrollment ID on UIDAI official website.",
                },
              },
              {
                "@type": "Question",
                name: "What is SRN number?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SRN is Service Request Number used to track Aadhaar update requests.",
                },
              },
            ],
          })}
        </script>
      </Helmet>
      {/* LEFT SIDEBAR */}
      <aside className="hidden xl:block bg-gray-100 h-screen shadow-md overflow-y-auto scrollbar-hide">
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            {lang === "en" ? "Aadhaar Services " : "आधार सेवाएं"}
          </h2>

          <ul className="space-y-2">
            {panLinks[lang].map((item, index) => (
              <li key={index}>
                <Link to={item.path} className={linkClass(item.path)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="bg-gray-100 h-screen   overflow-y-auto scrollbar-hide">
        <div>
          {lang === "en" ? (
            // English Translate
            <>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  . Enrolment No (EID)
                </h2>
                <ol className="list-decimal pl-5">
                  <li>
                    Where to find it: Look at the top of your slip for the
                    14-digit Enrolment ID (e.g., 1234/12345/12345).
                  </li>
                  <li>
                    What to fill: Enter the 14 digits in the first box. Below
                    that, you will see options for Date and Time. Select the
                    exact date and time printed on your slip (format: DD/MM/YYYY
                    and HH:MM:SS).
                  </li>
                </ol>
              </section>
              <br />

              <div className="flex items-center justify-center">
                <img
                  src="CheckUpdateStatus.jpeg"
                  alt="Aadhaar card"
                  className="h-110 justify-center items-center"
                />
              </div>
              <div className="flex items-center justify-center pt-4">
                <button className="h-10 w-50 bg-green-600 rounded-xl border-2 border-blue-500">
                  <a
                    href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-2xl font-bold"
                  >
                    Check Statuss
                    <MdKeyboardDoubleArrowLeft />
                  </a>
                </button>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  . SRN (Service Request Number)
                </h2>
                <ol className="list-decimal pl-5">
                  <li>
                    Where to find it: This is usually generated if you updated
                    your address online yourself. It is sent via SMS or shown on
                    the online receipt.
                  </li>
                  <li>
                    What to fill: It starts with the letter 'S' followed by 13
                    digits (e.g., S1234567891234).
                  </li>
                </ol>
              </section>
              <br />
              <div className="flex items-center justify-center">
                <img
                  src="SRAno.jpeg"
                  alt="Aadhaar card"
                  className="h-110 justify-center items-center"
                />
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  . URN (Update Request Number)
                </h2>
                <ol className="list-decimal pl-5">
                  <li>
                    Where to find it: This is generated specifically when you
                    submit an update request through the mAadhaar mobile app.
                  </li>
                  <li>
                    What to fill: Enter the 8-digit number provided in the app
                    or the SMS confirmation.
                  </li>
                </ol>
              </section>
              <br />
              <div className="flex items-center justify-center">
                <img
                  src="URNno.jpeg"
                  alt="Aadhaar card"
                  className="h-110 justify-center items-center"
                />
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  . SID (Service ID)
                </h2>
                <ol className="list-decimal pl-5">
                  <li>
                    Where to find it: This is used for specific service requests
                    or physical visits where a longer ID is issued.
                  </li>
                  <li>
                    What to fill: This starts with 'S' followed by 27 digits.
                    Check your slip carefully to see if "SID" is mentioned
                    specifically.
                  </li>
                </ol>
              </section>
              <br />
              <div className="flex items-center justify-center">
                <img
                  src="SID.png"
                  alt="Aadhaar card"
                  className="h-110 justify-center items-center"
                />
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Step-by-Step Instructions:
                </h2>
                <ol className="list-decimal pl-5">
                  <li>
                    Select the Type: Click the radio button (the small circle)
                    for the ID you have. (Most people use Enrolment No).
                  </li>
                  <li>
                    Enter the ID: Type the numbers exactly as they appear on
                    your slip.
                  </li>
                  <li>
                    Enter Captcha: Look at the box with the distorted text (like
                    69trha or 5cnt86). Type those exact characters into the
                    "Enter Captcha" box. Note: It is case-sensitive (capital and
                    small letters matter).
                  </li>
                  <li>Submit: Click the blue Submit button.</li>
                </ol>
              </section>
              <br />
              <p className="bg-green-300">
                Quick Tip: If you just applied for a new Aadhaar card, you
                should use the Enrolment No option.
              </p>
              <br />

              <div className="flex items-center justify-center pt-4">
                <button className="h-10 w-50 bg-green-600 rounded-xl border-2 border-blue-500">
                  <a
                    href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-2xl font-bold"
                  >
                    Check Statuss
                    <MdKeyboardDoubleArrowLeft />
                  </a>
                </button>
              </div>

              {/* ✅ STEP 3: DROPDOWN YAHAN ADD KIYA GAYA HAI (English section ke END me) */}

              <section className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">
                  Frequently Asked Questions
                </h2>

                {/* FAQ 1 */}
                <div className="border-2 border-blue-400 rounded-lg mb-3 ms-1 me-1 bg-white">
                  <div
                    onClick={() => toggleFAQ(1)}
                    className="flex justify-between p-4 cursor-pointer hover:rounded-lg hover:bg-blue-100 "
                  >
                    <span>What is Aadhaar Card?</span>

                    <span className="text-blue-600 font-bold">
                      {openFAQ === 1 ? "-" : "+"}
                    </span>
                  </div>

                  {openFAQ === 1 && (
                    <div className="p-4 ">
                      Aadhaar is a 12-digit unique identification number issued
                      to Indian residents.
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="border-2 border-blue-400 rounded-lg mb-3 ms-2 me-2 bg-white">
                  <div
                    onClick={() => toggleFAQ(2)}
                    className="flex justify-between p-4 cursor-pointer hover:rounded-lg hover:bg-blue-100 "
                  >
                    <span>How to check Aadhaar status?</span>

                    <span className="text-blue-600 font-bold">
                      {openFAQ === 2 ? "-" : "+"}
                    </span>
                  </div>

                  {openFAQ === 2 && (
                    <div className="p-4 ">
                      You can check Aadhaar status using Enrollment ID on UIDAI
                      website.
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="border-2 border-blue-400 rounded-lg mb-3 ms-1 me-1 bg-white">
                  <div
                    onClick={() => toggleFAQ(3)}
                    className="flex justify-between p-4 cursor-pointer hover:rounded-lg hover:bg-blue-100 "
                  >
                    <span>What is SRN number?</span>

                    <span className="text-blue-600 font-bold">
                      {openFAQ === 3 ? "-" : "+"}
                    </span>
                  </div>

                  {openFAQ === 3 && (
                    <div className="p-4">
                      SRN is Service Request Number used to track Aadhaar update
                      requests.
                    </div>
                  )}
                </div>
              </section>

              {/* ✅ DROPDOWN SECTION END */}
            </>
          ) : (
            // hindi translate
            <>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  . नामांकन संख्या (EID)
                </h2>
                <ol className="list-decimal pl-5">
                  <li>
                    इसे कहाँ ढूंढें: अपनी स्लिप के ऊपर 14-अंकों की नामांकन आईडी
                    देखें (उदाहरण: 1234/12345/12345)।
                  </li>
                  <li>
                    क्या भरें: पहले बॉक्स में 14 अंक दर्ज करें। उसके नीचे आपको
                    दिनांक और समय के विकल्प दिखाई देंगे। अपनी स्लिप पर छपी हुई
                    सटीक दिनांक और समय चुनें (प्रारूप: DD/MM/YYYY और HH:MM:SS)।
                  </li>
                </ol>
              </section>
              <br />

              <div className="flex items-center justify-center">
                <img
                  src="CheckUpdateStatus.jpeg"
                  alt="आधार कार्ड"
                  className="h-110 justify-center items-center"
                />
              </div>

              <div className="flex items-center justify-center pt-4">
                <button className="h-10 w-50 bg-green-600 rounded-xl border-2 border-blue-500">
                  <a
                    href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-2xl font-bold"
                  >
                    स्थिति जांचें
                    <MdKeyboardDoubleArrowLeft />
                  </a>
                </button>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  . SRN (सेवा अनुरोध संख्या)
                </h2>
                <ol className="list-decimal pl-5">
                  <li>
                    इसे कहाँ ढूंढें: यह आमतौर पर तब जनरेट होता है जब आप अपना पता
                    ऑनलाइन अपडेट करते हैं। यह SMS के माध्यम से भेजा जाता है या
                    ऑनलाइन रसीद पर दिखाया जाता है।
                  </li>
                  <li>
                    क्या भरें: यह अक्षर 'S' से शुरू होता है और उसके बाद 13 अंक
                    होते हैं (उदाहरण: S1234567891234)।
                  </li>
                </ol>
              </section>

              <br />

              <div className="flex items-center justify-center">
                <img
                  src="SRAno.jpeg"
                  alt="आधार कार्ड"
                  className="h-110 justify-center items-center"
                />
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  . URN (अपडेट अनुरोध संख्या)
                </h2>
                <ol className="list-decimal pl-5">
                  <li>
                    इसे कहाँ ढूंढें: यह तब जनरेट होता है जब आप mAadhaar मोबाइल
                    ऐप के माध्यम से अपडेट अनुरोध जमा करते हैं।
                  </li>
                  <li>
                    क्या भरें: ऐप या SMS में दिए गए 8-अंकों की संख्या दर्ज करें।
                  </li>
                </ol>
              </section>

              <br />

              <div className="flex items-center justify-center">
                <img
                  src="URNno.jpeg"
                  alt="आधार कार्ड"
                  className="h-110 justify-center items-center"
                />
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  . SID (सेवा आईडी)
                </h2>
                <ol className="list-decimal pl-5">
                  <li>
                    इसे कहाँ ढूंढें: यह विशेष सेवा अनुरोध या केंद्र पर जाने के
                    दौरान जारी किया जाता है।
                  </li>
                  <li>
                    क्या भरें: यह 'S' से शुरू होता है और उसके बाद 27 अंक होते
                    हैं। अपनी स्लिप को ध्यान से जांचें कि "SID" लिखा है या नहीं।
                  </li>
                </ol>
              </section>

              <br />

              <div className="flex items-center justify-center">
                <img
                  src="SID.png"
                  alt="आधार कार्ड"
                  className="h-110 justify-center items-center"
                />
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  चरण-दर-चरण निर्देश:
                </h2>
                <ol className="list-decimal pl-5">
                  <li>
                    प्रकार चुनें: आपके पास जो आईडी है उसके सामने वाले रेडियो बटन
                    पर क्लिक करें (अधिकतर लोग नामांकन संख्या का उपयोग करते हैं)।
                  </li>
                  <li>
                    आईडी दर्ज करें: अपनी स्लिप में दिए गए नंबर बिल्कुल उसी
                    प्रकार दर्ज करें।
                  </li>
                  <li>
                    कैप्चा दर्ज करें: बॉक्स में दिख रहे अक्षरों को ध्यान से
                    देखें (जैसे 69trha या 5cnt86) और उन्हें उसी प्रकार दर्ज
                    करें। ध्यान दें: यह case-sensitive होता है।
                  </li>
                  <li>सबमिट करें: नीले रंग के Submit बटन पर क्लिक करें।</li>
                </ol>
              </section>

              <br />

              <p className="bg-green-300">
                त्वरित सुझाव: यदि आपने अभी नया आधार कार्ड बनवाया है, तो नामांकन
                संख्या का उपयोग करें।
              </p>

              <br />

              <div className="flex items-center justify-center pt-4">
                <button className="h-10 w-50 bg-green-600 rounded-xl border-2 border-blue-500">
                  <a
                    href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-2xl font-bold"
                  >
                    स्थिति जांचें
                    <MdKeyboardDoubleArrowLeft />
                  </a>
                </button>
              </div>

              {/* ✅ STEP 3: DROPDOWN YAHAN ADD KIYA GAYA HAI (English section ke END me) */}

              <section className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">
                  अक्सर पूछे जाने वाले प्रश्न
                </h2>

                {/* FAQ 1 */}
                <div className="border-2 border-blue-400 rounded-lg mb-3 ms-1 me-1 bg-white">
                  <div
                    onClick={() => toggleFAQ(1)}
                    className="flex justify-between p-4 cursor-pointer hover:rounded-lg hover:bg-blue-100 "
                  >
                    <span>आधार कार्ड क्या है?</span>

                    <span className="text-blue-600 font-bold">
                      {openFAQ === 1 ? "-" : "+"}
                    </span>
                  </div>

                  {openFAQ === 1 && (
                    <div className="p-4 ">
                      आधार एक 12-अंकों की विशिष्ट पहचान संख्या है जो भारत के
                      निवासियों को जारी की जाती है।
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="border-2 border-blue-400 rounded-lg mb-3 ms-2 me-2 bg-white">
                  <div
                    onClick={() => toggleFAQ(2)}
                    className="flex justify-between p-4 cursor-pointer hover:rounded-lg hover:bg-blue-100 "
                  >
                    <span>आधार स्थिति कैसे जांचें?</span>

                    <span className="text-blue-600 font-bold">
                      {openFAQ === 2 ? "-" : "+"}
                    </span>
                  </div>

                  {openFAQ === 2 && (
                    <div className="p-4 ">
                      आप UIDAI वेबसाइट पर नामांकन आईडी का उपयोग करके आधार स्थिति
                      जांच सकते हैं।
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="border-2 border-blue-400 rounded-lg mb-3 ms-1 me-1 bg-white">
                  <div
                    onClick={() => toggleFAQ(3)}
                    className="flex justify-between p-4 cursor-pointer hover:rounded-lg hover:bg-blue-100 "
                  >
                    <span>SRN नंबर क्या है?</span>

                    <span className="text-blue-600 font-bold">
                      {openFAQ === 3 ? "-" : "+"}
                    </span>
                  </div>

                  {openFAQ === 3 && (
                    <div className="p-4">
                      SRN सेवा अनुरोध संख्या है जिसका उपयोग आधार अपडेट अनुरोध को
                      ट्रैक करने के लिए किया जाता है।
                    </div>
                  )}
                </div>
              </section>
            </>
          )}

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default AadhaarStatusGuide;
