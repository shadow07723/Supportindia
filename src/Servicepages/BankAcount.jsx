import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import Footer from "../Header/Footer";

function BankAcount() {
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
      { label: "New PAN", path: "/new-pan" },
      { label: "PAN Correction", path: "/correction-pan" },
      { label: "PAN Status", path: "/status-pan" },
      { label: "New PAN", path: "/new-pan" },
      { label: "PAN Correction", path: "/correction-pan" },
      { label: "PAN Status", path: "/status-pan" },
      { label: "New PAN", path: "/new-pan" },
      { label: "PAN Correction", path: "/correction-pan" },
      { label: "PAN Status", path: "/status-pan" },
      { label: "New PAN", path: "/new-pan" },
      { label: "PAN Correction", path: "/correction-pan" },
      { label: "PAN Status", path: "/status-pan" },
      { label: "New PAN", path: "/new-pan" },
      { label: "PAN Correction", path: "/correction-pan" },
      { label: "PAN Status", path: "/status-pan" },
      { label: "New PAN", path: "/new-pan" },
      { label: "PAN Correction", path: "/correction-pan" },
      { label: "PAN Status", path: "/status-pan" },
    ],
    hi: [
      { label: "नया पैन", path: "/new-pan" },
      { label: "पैन सुधार", path: "/correction-pan" },
      { label: "पैन स्थिति", path: "/status-pan" },
      { label: "नया पैन", path: "/new-pan" },
      { label: "पैन सुधार", path: "/correction-pan" },
      { label: "पैन स्थिति", path: "/status-pan" },
      { label: "नया पैन", path: "/new-pan" },
      { label: "पैन सुधार", path: "/correction-pan" },
      { label: "पैन स्थिति", path: "/status-pan" },
    ],
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[220px_1fr] h-screen overflow-hidden">
      {/* LEFT SIDEBAR */}
      <aside className="hidden xl:block bg-gray-100 h-screen shadow-md overflow-y-auto scrollbar-hide">
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            {lang === "en" ? "PAN Services" : "पैन सेवाएं"}
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
      <main className="bg-white h-screen  text-center overflow-y-auto scrollbar-hide">
        <div>
          {lang === "en" ? (
            <>
              <h1 className="text-2xl font-semibold mb-4">PAN Card Services</h1>
              <p className="text-gray-600 mb-6">
                Apply for new PAN, correct PAN details and track PAN status.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-semibold mb-4">पैन कार्ड सेवाएं</h1>
              <p className="text-gray-600 mb-6">
                नया पैन आवेदन, पैन सुधार और स्थिति जांच।
              </p>
            </>
          )}

          {[...Array(25)].map((_, i) => (
            <p key={i} className="text-gray-600 mb-2">
              {lang === "en"
                ? `Sample content line ${i + 1}`
                : `उदाहरण कंटेंट लाइन ${i + 1}`}
            </p>
          ))}

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default BankAcount;
