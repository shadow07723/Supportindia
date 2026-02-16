import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import { FaChevronDown } from "react-icons/fa6";
import Footer from "../Header/Footer";
import { Helmet } from "react-helmet-async";

function Aadhar() {
  const { lang } = useContext(LanguageContext);
  const location = useLocation();

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
      { label: "Check Aadhaar Update Status", path: "/new-aadhaar" },
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
        path: "/new-aadhaar",
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
    <div className="grid grid-cols-1 xl:grid-cols-[220px_1fr] h-screen overflow-hidden">
      <Helmet>
        <title>
          {lang === "en"
            ? "Aadhaar Card Services | Update, Download, PVC Card, e-KYC"
            : "आधार कार्ड सेवाएं | अपडेट, डाउनलोड, पीवीसी कार्ड, ई-केवाईसी"}
        </title>

        <meta
          name="description"
          content={
            lang === "en"
              ? "Complete Aadhaar Card services including update Aadhaar, download e-Aadhaar, order PVC Aadhaar card, verify Aadhaar number, and authentication methods."
              : "आधार कार्ड की सभी सेवाएं जैसे आधार अपडेट, ई-आधार डाउनलोड, पीवीसी कार्ड ऑर्डर, आधार सत्यापन और प्रमाणीकरण की पूरी जानकारी।"
          }
        />

        <meta
          name="keywords"
          content="Aadhaar Card, UIDAI, Aadhaar Update, e-Aadhaar Download, PVC Aadhaar Card, Aadhaar Services, आधार कार्ड, आधार अपडेट"
        />

        <meta name="author" content="Your Website Name" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            lang === "en"
              ? "Aadhaar Card Services Portal"
              : "आधार कार्ड सेवा पोर्टल"
          }
        />
        <meta
          property="og:description"
          content={
            lang === "en"
              ? "Access Aadhaar update, verification, PVC order and authentication services."
              : "आधार अपडेट, सत्यापन, पीवीसी कार्ड और प्रमाणीकरण सेवाएं प्राप्त करें।"
          }
        />
        <meta property="og:url" content="https://yourdomain.com/aadhar" />
        <meta property="og:site_name" content="Your Website Name" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={
            lang === "en" ? "Aadhaar Card Services" : "आधार कार्ड सेवाएं"
          }
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourdomain.com/aadhar" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              lang === "en"
                ? "Aadhaar Card Complete Guide"
                : "आधार कार्ड पूरी जानकारी",
            description:
              lang === "en"
                ? "Detailed guide about Aadhaar services, update, download and verification."
                : "आधार सेवाओं, अपडेट, डाउनलोड और सत्यापन की विस्तृत जानकारी।",
            author: {
              "@type": "Organization",
              name: "Your Website Name",
            },
            publisher: {
              "@type": "Organization",
              name: "Your Website Name",
            },
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
              <section>
                <h1 className="text-2xl font-semibold text-gray-800 mb-3">
                  What is Aadhaar?
                </h1>
                <p className="text-gray-700 leading-7">
                  Aadhaar is a 12-digit unique identification number issued by
                  the Government of India to every resident of the country. This
                  number is generated based on an individual’s biometric and
                  demographic information. The primary objective of Aadhaar is
                  to provide citizens with a strong and digital identity that
                  enables them to access government and private services easily.
                  The Aadhaar number is valid across India and remains valid for
                  a lifetime. The Aadhaar system has been developed as one of
                  the largest digital identity platforms in the world, ensuring
                  transparency and convenience in service delivery.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Full Form of Aadhaar
                </h2>
                <p className="text-gray-700 leading-7">
                  The word “Aadhaar” means “foundation” or “base.” It is not
                  officially defined as an acronym in English but represents the
                  foundation of identity in India. Aadhaar serves as the base of
                  digital identification for residents of India. Its purpose is
                  to provide every resident with a unique identity that cannot
                  be duplicated or matched with another individual. The Aadhaar
                  number is widely used for government schemes, banking
                  services, mobile connections, and many other essential
                  services. Today, Aadhaar plays a significant role in
                  strengthening the Digital India mission.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  What is UIDAI?
                </h2>
                <p className="text-gray-700 leading-7">
                  UIDAI (Unique Identification Authority of India) is the
                  government authority responsible for issuing and managing
                  Aadhaar. It was established in 2009 and operates under the
                  Ministry of Electronics and Information Technology. UIDAI’s
                  primary responsibility is to issue Aadhaar numbers, maintain
                  data security, and manage Aadhaar-related services. The
                  authority operates enrollment centers across the country to
                  provide Aadhaar services to residents. UIDAI aims to develop a
                  secure, transparent, and reliable identification system that
                  improves service delivery to citizens.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  History of Aadhaar
                </h2>
                <p className="text-gray-700 leading-7">
                  The Aadhaar project was initiated to create a digital identity
                  system in India. After the establishment of UIDAI in 2009, the
                  enrollment process began. Initially, the primary objective was
                  to ensure that government subsidies and benefits reached
                  citizens directly, reducing the role of intermediaries.
                  Gradually, Aadhaar was linked with banking, mobile SIM cards,
                  PAN, and various other services. Today, Aadhaar has become the
                  largest biometric identification system in the world. Millions
                  of Indians possess an Aadhaar number, and it plays a vital
                  role in the country’s digital infrastructure.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Objective of Aadhaar
                </h2>
                <p className="text-gray-700 leading-7">
                  The primary objective of Aadhaar is to provide every resident
                  with a unique and digital identity. Through Aadhaar, the
                  government ensures that benefits and subsidies reach the
                  rightful beneficiary directly. This helps eliminate fake
                  beneficiaries and increases transparency. Aadhaar is used in
                  banking, education, healthcare, pensions, scholarships, and
                  many other services. It strengthens the Digital India
                  initiative and provides citizens with faster, simpler, and
                  more secure access to services.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Importance of Aadhaar
                </h2>
                <p className="text-gray-700 leading-7">
                  Aadhaar is one of the most important identity documents in
                  India today. It serves as proof of identity and address.
                  Aadhaar is required for opening bank accounts, availing
                  government schemes, obtaining mobile SIM cards, and accessing
                  various services. Through Direct Benefit Transfer (DBT), the
                  government transfers subsidies directly to citizens’ bank
                  accounts, reducing corruption and improving transparency. As a
                  digital identity system, Aadhaar continues to grow in
                  importance across sectors.
                </p>
                <br />

                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Structure of Aadhaar Number
                </h2>
                <p className="text-gray-700 leading-7">
                  The Aadhaar number is a 12-digit random number. It does not
                  contain any specific regional or personal information within
                  it. The number is completely unique and cannot be the same for
                  two individuals. Aadhaar numbers are generated using a secure
                  algorithm. The last digit of the Aadhaar number is known as a
                  “checksum,” which helps verify the validity of the number.
                  This structured format ensures that Aadhaar remains secure and
                  reliable as a national identification system.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Significance of 12 Digits
                </h2>
                <p className="text-gray-700 leading-7">
                  The 12 digits of Aadhaar represent a unique identity for an
                  individual. This number is permanent and valid for a lifetime.
                  It does not contain information about a person’s state,
                  religion, or income. Its sole purpose is identity
                  verification. The 12-digit structure is large enough to ensure
                  that duplication is practically impossible. This enhances the
                  reliability and security of the identification system across
                  the country.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Aadhaar Biometric System
                </h2>
                <p className="text-gray-700 leading-7">
                  Aadhaar includes biometric data such as fingerprints, iris
                  scans, and a photograph. This biometric data ensures the
                  uniqueness of each individual. Due to the biometric system, it
                  is not possible for one person to obtain multiple Aadhaar
                  numbers. The technology used follows modern security
                  standards, and the data is stored securely in encrypted
                  servers. This makes identity verification fast, accurate, and
                  secure.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Difference Between Aadhaar and PAN
                </h2>
                <p className="text-gray-700 leading-7">
                  Aadhaar and PAN serve different purposes. PAN (Permanent
                  Account Number) is mainly used for income tax and financial
                  transactions, whereas Aadhaar is a general identity document.
                  PAN consists of 10 alphanumeric characters, while Aadhaar
                  consists of 12 numeric digits. Both documents are used for
                  different services, but in many cases, linking Aadhaar with
                  PAN is mandatory.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Difference Between Aadhaar and Voter ID
                </h2>
                <p className="text-gray-700 leading-7">
                  Aadhaar and Voter ID are both important identity documents,
                  but they serve different purposes. Voter ID is primarily used
                  for voting in elections, while Aadhaar serves as a general
                  digital identity number. Voter ID is issued only to Indian
                  citizens, whereas Aadhaar is issued to residents of India.
                  Aadhaar is widely used for banking, government schemes, and
                  other services. Both documents are important in their
                  respective areas.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Difference Between Aadhaar and Passport
                </h2>
                <p className="text-gray-700 leading-7">
                  A passport is an international travel document, while Aadhaar
                  is a national identity number. A passport is used for
                  international travel and as proof of citizenship. On the other
                  hand, Aadhaar is primarily used for identity verification
                  within India. The passport issuance process includes detailed
                  verification and police checks, whereas Aadhaar enrollment is
                  relatively simpler. Both documents serve different purposes
                  depending on the situation.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Types of Aadhaar Card
                </h2>
                <p className="text-gray-700 leading-7">
                  There are mainly three types of Aadhaar: Aadhaar Letter,
                  e-Aadhaar, and PVC Aadhaar Card. The Aadhaar Letter is a
                  paper-based document delivered by post. e-Aadhaar is a digital
                  PDF version that can be downloaded online. PVC Aadhaar is a
                  plastic card version that is more durable and convenient to
                  carry. All forms of Aadhaar are equally valid and can be used
                  for official purposes.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  What is PVC Aadhaar Card?
                </h2>
                <p className="text-gray-700 leading-7">
                  PVC Aadhaar Card is a plastic version of Aadhaar, similar in
                  size to an ATM card. It is durable, waterproof, and easy to
                  carry. It includes advanced security features such as a QR
                  code, hologram, and micro-text. PVC Aadhaar can be ordered
                  online and is delivered to the registered address. Its compact
                  and sturdy design makes it more convenient compared to the
                  paper-based Aadhaar letter.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  What is e-Aadhaar?
                </h2>
                <p className="text-gray-700 leading-7">
                  e-Aadhaar is the digital version of Aadhaar that can be
                  downloaded online. It is a password-protected PDF file
                  containing the same details as the physical Aadhaar card. It
                  is equally valid and can be printed for official use. Since it
                  is digital, it can be accessed anytime and anywhere. It is
                  especially useful in cases where the physical Aadhaar card is
                  lost or urgently required.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  What is mAadhaar App?
                </h2>
                <p className="text-gray-700 leading-7">
                  mAadhaar is the official mobile application developed by
                  UIDAI. Through this app, users can carry a digital copy of
                  their Aadhaar on their smartphones. It provides features such
                  as downloading Aadhaar, checking update status, and scanning
                  QR codes for verification. The app makes Aadhaar services more
                  accessible and secure through mobile devices. It enhances the
                  convenience of digital identity management.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Security Features of Aadhaar
                </h2>
                <p className="text-gray-700 leading-7">
                  Aadhaar includes several advanced security features such as QR
                  codes, holograms, micro-text, and biometric data. The data is
                  stored securely in encrypted servers to prevent unauthorized
                  access. No one can access an individual’s information without
                  proper authorization. Users also have the option to lock and
                  unlock their biometric data. These features make Aadhaar a
                  secure and reliable identification system.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  QR Code in Aadhaar
                </h2>
                <p className="text-gray-700 leading-7">
                  Aadhaar contains a secure QR code that stores basic
                  information in encrypted form. By scanning this QR code,
                  identity can be verified instantly. It ensures authenticity
                  and prevents tampering. Many government and private
                  institutions use QR code scanning for Aadhaar verification.
                  This process is fast, secure, and efficient.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Aadhaar Offline Verification
                </h2>
                <p className="text-gray-700 leading-7">
                  Aadhaar offline verification allows identity confirmation
                  without internet access. It can be done using QR codes or
                  offline e-KYC methods. Users can share their information
                  securely after providing consent. This process ensures privacy
                  while enabling identity verification. Offline verification
                  further strengthens data protection measures.
                </p>
              </section>
              <br />

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Types of Aadhaar Authentication
                </h2>
                <p className="text-gray-700 leading-7">
                  Aadhaar authentication is mainly of three types: OTP-based,
                  biometric-based, and demographic-based. OTP authentication
                  uses a one-time password sent to the registered mobile number.
                  Biometric authentication uses fingerprint or iris scan for
                  verification. Demographic authentication verifies details such
                  as name and date of birth. These authentication methods ensure
                  that Aadhaar verification remains secure and effective.
                </p>
              </section>
              <br />
            </>
          ) : (
            // hindi translate
            <>
              <section>
                <h1 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार क्या है?
                </h1>
                <p className="text-gray-700 leading-7">
                  आधार भारत सरकार द्वारा जारी किया गया एक 12 अंकों का विशिष्ट
                  पहचान नंबर है, जिसे देश के प्रत्येक निवासी को उसकी पहचान
                  प्रमाणित करने के लिए दिया जाता है। यह संख्या व्यक्ति की
                  बायोमेट्रिक और जनसांख्यिकीय जानकारी के आधार पर तैयार की जाती
                  है। आधार का उद्देश्य नागरिकों को एक मजबूत और डिजिटल पहचान
                  प्रदान करना है, जिससे वे सरकारी और निजी सेवाओं का लाभ आसानी से
                  ले सकें। यह पहचान संख्या पूरे भारत में मान्य होती है और जीवन
                  भर वैध रहती है। आधार प्रणाली को भारत में डिजिटल पहचान के सबसे
                  बड़े प्लेटफॉर्म के रूप में विकसित किया गया है, जिससे
                  पारदर्शिता और सुविधा दोनों सुनिश्चित होती हैं।
                </p>
              </section>
              <br />

              {/* 2 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार का पूर्ण रूप (Full Form)
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार शब्द का अर्थ है “आधार” या “बुनियाद”। अंग्रेज़ी में इसे
                  किसी विशेष संक्षिप्त रूप (Full Form) के रूप में परिभाषित नहीं
                  किया गया है, बल्कि यह एक नाम है जो व्यक्ति की पहचान की बुनियाद
                  को दर्शाता है। आधार भारत में डिजिटल पहचान की नींव के रूप में
                  कार्य करता है। इसका उद्देश्य हर निवासी को एक ऐसी पहचान प्रदान
                  करना है जो अद्वितीय (Unique) हो और किसी अन्य व्यक्ति से मेल न
                  खाती हो। यह पहचान संख्या सरकारी योजनाओं, बैंकिंग सेवाओं,
                  मोबाइल कनेक्शन, और अन्य कई आवश्यक सेवाओं में उपयोग की जाती है।
                  आधार आज डिजिटल इंडिया मिशन का एक महत्वपूर्ण हिस्सा बन चुका है।
                </p>
              </section>
              <br />

              {/* 3 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  UIDAI क्या है?
                </h2>
                <p className="text-gray-700 leading-7">
                  UIDAI (Unique Identification Authority of India) भारत सरकार की
                  वह संस्था है जो आधार योजना का संचालन और प्रबंधन करती है। इसकी
                  स्थापना वर्ष 2009 में की गई थी और यह इलेक्ट्रॉनिक्स एवं सूचना
                  प्रौद्योगिकी मंत्रालय के अंतर्गत कार्य करती है। UIDAI का मुख्य
                  कार्य आधार नंबर जारी करना, डेटा की सुरक्षा सुनिश्चित करना और
                  आधार से संबंधित सेवाओं का संचालन करना है। यह संस्था देशभर में
                  नामांकन केंद्रों के माध्यम से नागरिकों को आधार प्रदान करती है।
                  UIDAI का उद्देश्य एक सुरक्षित, पारदर्शी और भरोसेमंद पहचान
                  प्रणाली विकसित करना है जिससे नागरिकों को बेहतर सेवाएं मिल
                  सकें।
                </p>
              </section>
              <br />

              {/* 4 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार का इतिहास
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार परियोजना की शुरुआत भारत में डिजिटल पहचान प्रणाली विकसित
                  करने के उद्देश्य से की गई थी। वर्ष 2009 में UIDAI की स्थापना
                  के बाद आधार नामांकन प्रक्रिया शुरू हुई। प्रारंभ में इसका
                  उद्देश्य सरकारी सब्सिडी और लाभ सीधे नागरिकों तक पहुंचाना था,
                  ताकि बिचौलियों की भूमिका कम हो सके। धीरे-धीरे आधार को बैंकिंग,
                  मोबाइल सिम, पैन लिंकिंग और अन्य सेवाओं से जोड़ा गया। आज आधार
                  विश्व की सबसे बड़ी बायोमेट्रिक पहचान प्रणाली बन चुकी है।
                  करोड़ों भारतीयों के पास आधार संख्या है और यह देश की डिजिटल
                  संरचना का महत्वपूर्ण हिस्सा बन चुका है।
                </p>
              </section>
              <br />

              {/* 5 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार का उद्देश्य
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार का मुख्य उद्देश्य प्रत्येक निवासी को एक विशिष्ट और डिजिटल
                  पहचान प्रदान करना है। इसके माध्यम से सरकार यह सुनिश्चित करना
                  चाहती है कि सरकारी योजनाओं और सब्सिडी का लाभ सीधे सही व्यक्ति
                  तक पहुंचे। इससे फर्जी लाभार्थियों को हटाने और पारदर्शिता
                  बढ़ाने में मदद मिलती है। आधार का उपयोग बैंकिंग, शिक्षा,
                  स्वास्थ्य, पेंशन, छात्रवृत्ति और कई अन्य सेवाओं में किया जाता
                  है। यह डिजिटल इंडिया मिशन को मजबूत बनाता है और नागरिकों को
                  सरल, तेज और सुरक्षित सेवाएं उपलब्ध कराता है।
                </p>
              </section>
              <br />

              {/* 6 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार का महत्व
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार आज भारत में सबसे महत्वपूर्ण पहचान दस्तावेजों में से एक
                  है। यह व्यक्ति की पहचान और पते का प्रमाण प्रदान करता है। बैंक
                  खाता खोलने, सरकारी योजनाओं का लाभ लेने, मोबाइल सिम लेने और कई
                  अन्य सेवाओं के लिए आधार की आवश्यकता होती है। आधार के माध्यम से
                  सरकार डायरेक्ट बेनिफिट ट्रांसफर (DBT) के जरिए सब्सिडी सीधे
                  नागरिकों के बैंक खातों में भेजती है। इससे भ्रष्टाचार कम होता
                  है और प्रक्रिया पारदर्शी बनती है। डिजिटल पहचान के रूप में आधार
                  का महत्व लगातार बढ़ रहा है।
                </p>
              </section>
              <br />

              {/* 7 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार संख्या की संरचना
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार संख्या 12 अंकों की एक यादृच्छिक (Random) संख्या होती है।
                  इसमें कोई विशेष क्षेत्रीय या व्यक्तिगत जानकारी छिपी नहीं होती।
                  यह संख्या पूरी तरह से यूनिक होती है और दो व्यक्तियों के लिए
                  समान नहीं हो सकती। आधार संख्या का निर्माण एक सुरक्षित
                  एल्गोरिदम के माध्यम से किया जाता है। इसके अंतिम अंक को “चेकसम”
                  कहा जाता है, जो संख्या की वैधता सुनिश्चित करता है। यह संरचना
                  आधार को सुरक्षित और विश्वसनीय बनाती है।
                </p>
              </section>
              <br />

              {/* 8 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  12 अंकों का महत्व
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार के 12 अंक व्यक्ति की एक विशिष्ट पहचान को दर्शाते हैं। यह
                  संख्या स्थायी होती है और जीवनभर वैध रहती है। इसमें व्यक्ति के
                  राज्य, धर्म या आय से संबंधित कोई जानकारी नहीं होती। इसका
                  उद्देश्य केवल पहचान सत्यापन करना है। 12 अंकों की यह संरचना
                  इतनी बड़ी है कि दो लोगों के लिए समान संख्या होना लगभग असंभव
                  है। इससे पहचान प्रणाली की विश्वसनीयता और सुरक्षा बढ़ती है।
                </p>
              </section>
              <br />

              {/* 9 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार बायोमेट्रिक प्रणाली
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार में बायोमेट्रिक डेटा जैसे फिंगरप्रिंट, आईरिस स्कैन और
                  फोटो शामिल किए जाते हैं। यह डेटा व्यक्ति की विशिष्ट पहचान
                  सुनिश्चित करता है। बायोमेट्रिक प्रणाली के कारण एक व्यक्ति के
                  लिए दो आधार बनवाना संभव नहीं है। यह तकनीक आधुनिक सुरक्षा
                  मानकों पर आधारित है और डेटा को सुरक्षित रूप से संग्रहीत किया
                  जाता है। इससे पहचान सत्यापन तेज और सटीक होता है।
                </p>
              </section>
              <br />

              {/* 10 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार और पैन में अंतर
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार और पैन दोनों अलग-अलग उद्देश्यों के लिए बनाए गए हैं। पैन
                  कार्ड मुख्यतः आयकर और वित्तीय लेन-देन के लिए उपयोग होता है,
                  जबकि आधार एक सामान्य पहचान दस्तावेज है। पैन 10 अंकों का
                  अल्फ़ान्यूमेरिक कोड होता है, जबकि आधार 12 अंकों की संख्या है।
                  दोनों का उपयोग अलग-अलग सेवाओं में किया जाता है, लेकिन कई
                  मामलों में इन्हें लिंक करना आवश्यक होता है।
                </p>
              </section>
              <br />

              {/* 11 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार और वोटर आईडी में अंतर
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार और वोटर आईडी दोनों ही महत्वपूर्ण पहचान दस्तावेज हैं,
                  लेकिन इनका उद्देश्य अलग-अलग है। वोटर आईडी का उपयोग मुख्य रूप
                  से चुनाव में मतदान करने के लिए किया जाता है, जबकि आधार एक
                  सामान्य डिजिटल पहचान संख्या है। वोटर आईडी केवल भारतीय नागरिकों
                  को जारी की जाती है, जबकि आधार भारत के निवासियों (Residents) को
                  दिया जाता है। आधार का उपयोग बैंकिंग, सरकारी योजनाओं और अन्य
                  सेवाओं में व्यापक रूप से किया जाता है। दोनों दस्तावेज
                  अपनी-अपनी जगह महत्वपूर्ण हैं, लेकिन उनका उपयोग अलग-अलग
                  क्षेत्रों में होता है।
                </p>
              </section>
              <br />

              {/* 12 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार और पासपोर्ट में अंतर
                </h2>
                <p className="text-gray-700 leading-7">
                  पासपोर्ट एक अंतरराष्ट्रीय यात्रा दस्तावेज है, जबकि आधार एक
                  राष्ट्रीय पहचान संख्या है। पासपोर्ट का उपयोग विदेश यात्रा और
                  नागरिकता प्रमाण के रूप में किया जाता है। दूसरी ओर, आधार मुख्य
                  रूप से देश के भीतर पहचान और सेवाओं के सत्यापन के लिए उपयोग
                  होता है। पासपोर्ट जारी करने की प्रक्रिया अधिक विस्तृत होती है
                  और पुलिस सत्यापन भी शामिल होता है। आधार की प्रक्रिया
                  अपेक्षाकृत सरल है और यह डिजिटल पहचान प्रदान करता है। दोनों
                  दस्तावेजों का महत्व अलग-अलग परिस्थितियों में होता है।
                </p>
              </section>
              <br />

              {/* 13 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार कार्ड के प्रकार
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार कार्ड मुख्य रूप से तीन प्रकार के होते हैं — साधारण आधार
                  पत्र, ई-आधार और पीवीसी आधार कार्ड। साधारण आधार कागज़ पर छपा
                  हुआ होता है, जिसे डाक के माध्यम से भेजा जाता है। ई-आधार एक
                  डिजिटल पीडीएफ रूप में उपलब्ध होता है, जिसे ऑनलाइन डाउनलोड किया
                  जा सकता है। पीवीसी आधार कार्ड प्लास्टिक कार्ड के रूप में होता
                  है, जो अधिक टिकाऊ और सुविधाजनक है। सभी प्रकार के आधार समान रूप
                  से वैध हैं और किसी भी सेवा के लिए उपयोग किए जा सकते हैं।
                </p>
              </section>
              <br />

              {/* 14 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  पीवीसी आधार कार्ड क्या है?
                </h2>
                <p className="text-gray-700 leading-7">
                  पीवीसी आधार कार्ड एक प्लास्टिक कार्ड के रूप में जारी किया जाता
                  है, जो एटीएम कार्ड जैसा दिखता है। यह टिकाऊ, जलरोधक और आसानी से
                  ले जाने योग्य होता है। इसमें सुरक्षा के लिए क्यूआर कोड,
                  होलोग्राम और माइक्रो टेक्स्ट जैसी विशेषताएँ शामिल होती हैं।
                  पीवीसी आधार कार्ड ऑनलाइन ऑर्डर किया जा सकता है और यह कुछ दिनों
                  में डाक द्वारा घर पर पहुंच जाता है। इसकी छोटी और मजबूत संरचना
                  के कारण यह सामान्य कागज़ वाले आधार की तुलना में अधिक सुविधाजनक
                  है।
                </p>
              </section>
              <br />

              {/* 15 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  ई-आधार क्या है?
                </h2>
                <p className="text-gray-700 leading-7">
                  ई-आधार आधार का डिजिटल संस्करण है, जिसे ऑनलाइन डाउनलोड किया जा
                  सकता है। यह एक पासवर्ड-प्रोटेक्टेड पीडीएफ फाइल होती है। ई-आधार
                  में वही जानकारी होती है जो आपके मूल आधार में होती है। इसे
                  प्रिंट करके भी उपयोग किया जा सकता है और यह पूरी तरह से वैध
                  होता है। डिजिटल होने के कारण इसे कहीं भी और कभी भी डाउनलोड
                  किया जा सकता है। यह उन लोगों के लिए विशेष रूप से उपयोगी है
                  जिनका आधार कार्ड खो गया हो या तुरंत आवश्यकता हो।
                </p>
              </section>
              <br />

              {/* 16 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  mAadhaar ऐप क्या है?
                </h2>
                <p className="text-gray-700 leading-7">
                  mAadhaar एक आधिकारिक मोबाइल एप्लिकेशन है जिसे UIDAI द्वारा
                  विकसित किया गया है। इस ऐप के माध्यम से उपयोगकर्ता अपने आधार की
                  डिजिटल प्रति मोबाइल में रख सकते हैं। इसमें आधार डाउनलोड करना,
                  पता अपडेट की स्थिति देखना और क्यूआर कोड स्कैन करना जैसी
                  सुविधाएँ उपलब्ध हैं। यह ऐप आधार सेवाओं को मोबाइल पर सरल और
                  सुरक्षित बनाता है। mAadhaar ऐप डिजिटल पहचान को और अधिक
                  सुविधाजनक बनाता है।
                </p>
              </section>
              <br />

              {/* 17 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार की सुरक्षा विशेषताएँ
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार में कई उन्नत सुरक्षा विशेषताएँ शामिल हैं, जैसे क्यूआर
                  कोड, होलोग्राम, माइक्रो टेक्स्ट और बायोमेट्रिक डेटा। आधार का
                  डेटा सुरक्षित सर्वरों में एन्क्रिप्शन तकनीक के माध्यम से
                  संग्रहीत किया जाता है। बिना अनुमति के किसी भी व्यक्ति की
                  जानकारी तक पहुंच संभव नहीं है। इसके अलावा, उपयोगकर्ता अपने
                  बायोमेट्रिक डेटा को लॉक और अनलॉक भी कर सकते हैं। ये सभी
                  विशेषताएँ आधार को सुरक्षित और विश्वसनीय पहचान प्रणाली बनाती
                  हैं।
                </p>
              </section>
              <br />

              {/* 18 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार में क्यूआर कोड
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार कार्ड पर एक सुरक्षित क्यूआर कोड होता है, जिसमें व्यक्ति
                  की बुनियादी जानकारी एन्क्रिप्टेड रूप में संग्रहीत रहती है। इसे
                  स्कैन करके पहचान का तुरंत सत्यापन किया जा सकता है। क्यूआर कोड
                  के माध्यम से जानकारी की प्रामाणिकता की जांच की जा सकती है। यह
                  प्रक्रिया तेज और सुरक्षित होती है। कई सरकारी और निजी संस्थान
                  क्यूआर कोड स्कैन करके आधार सत्यापन करते हैं।
                </p>
              </section>
              <br />

              {/* 19 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार ऑफलाइन सत्यापन
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार ऑफलाइन सत्यापन एक ऐसी प्रक्रिया है जिसमें इंटरनेट के बिना
                  भी पहचान की पुष्टि की जा सकती है। इसमें क्यूआर कोड या ऑफलाइन
                  केवाईसी (e-KYC) का उपयोग किया जाता है। उपयोगकर्ता अपनी जानकारी
                  साझा करने से पहले अनुमति दे सकते हैं। यह प्रक्रिया गोपनीयता और
                  सुरक्षा को बनाए रखते हुए सत्यापन की सुविधा प्रदान करती है।
                  ऑफलाइन सत्यापन से डेटा की सुरक्षा और भी मजबूत होती है।
                </p>
              </section>
              <br />

              {/* 20 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  आधार प्रमाणीकरण के प्रकार
                </h2>
                <p className="text-gray-700 leading-7">
                  आधार प्रमाणीकरण मुख्य रूप से तीन प्रकार का होता है — ओटीपी
                  आधारित, बायोमेट्रिक आधारित और डेमोग्राफिक आधारित। ओटीपी
                  प्रमाणीकरण में मोबाइल नंबर पर भेजा गया कोड उपयोग किया जाता है।
                  बायोमेट्रिक प्रमाणीकरण में फिंगरप्रिंट या आईरिस स्कैन शामिल
                  होता है। डेमोग्राफिक प्रमाणीकरण में नाम और जन्म तिथि जैसी
                  जानकारी की पुष्टि की जाती है। इन विभिन्न तरीकों के माध्यम से
                  आधार सत्यापन को सुरक्षित और प्रभावी बनाया जाता है।
                </p>
              </section>
              <br />
            </>
          )}

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Aadhar;
