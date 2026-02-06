import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { LanguageContext } from "../LanguageContext";

const Serviceopt = () => {
  const location = useLocation();
  const { lang } = useContext(LanguageContext);

  const [activeService, setActiveService] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const dotRef = useRef(null);
  const cardRefs = useRef([]);

  const serviceOptions = {
    en: {
      aadhaar: [
        { label: "New Aadhaar", path: "/new-aadhaar" },
        { label: "Update Aadhaar", path: "/update-aadhaar" },
        { label: "Aadhaar Status", path: "/status-aadhaar" },
      ],
      pan: [
        { label: "New PAN", path: "/new-pan" },
        { label: "PAN Correction", path: "/correction-pan" },
        { label: "PAN Status", path: "/status-pan" },
      ],
      account: [
        { label: "Open Account", path: "/open-account" },
        { label: "Close Account", path: "/close-account" },
        { label: "Account Status", path: "/status-account" },
      ],
      upi: [
        { label: "Create UPI ID", path: "/create-upi-id" },
        { label: "Link Bank Account", path: "/link-bank-account" },
        { label: "UPI Status", path: "/upi-status" },
      ],
      aayush: [
        { label: "Apply Aayushman Card", path: "/apply-aayushman-card" },
        { label: "Renew Aayushman Card", path: "/renew-aayushman-card" },
        { label: "Aayushman Status", path: "/aayushman-status" },
      ],
      contact: [
        { label: "Contact Us", path: "/contact-us" },
        { label: "Support", path: "/contact-support" },
        { label: "Feedback", path: "/contact-feedback" },
      ],
      about: [
        { label: "About Us", path: "/about-us" },
        { label: "Our Team", path: "/about-team" },
        { label: "Careers", path: "/about-careers" },
      ],
      home: [
        { label: "Welcome", path: "/" },
        { label: "Latest News", path: "/news" },
        { label: "Announcements", path: "/announcements" },
      ],
      services: [
        { label: "All Services", path: "/all-services" },
        { label: "Popular Services", path: "/popular-services" },
        { label: "New Services", path: "/new-services" },
      ],
      support: [
        { label: "Services", path: "/services" },
        { label: "Support", path: "/support" },
        { label: "FAQ", path: "/faq" },
      ],
      faq: [
        { label: "General FAQ", path: "/faq-general" },
        { label: "Service FAQ", path: "/faq-service" },
        { label: "Technical FAQ", path: "/faq-technical" },
      ],
      blog: [
        { label: "Latest Posts", path: "/latest-blog" },
        { label: "Popular Posts", path: "/popular-blog" },
        { label: "Categories", path: "/categories-blog" },
      ],
      careers: [
        { label: "Job Openings", path: "/careers-openings" },
        { label: "Internships", path: "/careers-internships" },
        { label: "Culture", path: "/careers-culture" },
      ],
      terms: [
        { label: "Terms of Service", path: "/terms-service" },
        { label: "User Agreement", path: "/terms-agreement" },
        { label: "Cookie Policy", path: "/terms-cookie" },
      ],
      privacy: [
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Data Protection", path: "/privacy-data" },
        { label: "Security", path: "/privacy-security" },
      ],
    },
    hi: {
      aadhaar: [
        { label: "नया आधार", path: "/new-aadhaar" },
        { label: "आधार अपडेट करें", path: "/update-aadhaar" },
        { label: "आधार स्थिति", path: "/status-aadhaar" },
      ],
      pan: [
        { label: "नया पैन", path: "/new-pan" },
        { label: "पैन सुधार", path: "/correction-pan" },
        { label: "पैन स्थिति", path: "/status-pan" },
      ],
      account: [
        { label: "खाता खोलें", path: "/open-account" },
        { label: "खाता बंद करें", path: "/close-account" },
        { label: "खाता स्थिति", path: "/status-account" },
      ],
      upi: [
        { label: "यूपीआई आईडी बनाएं", path: "/create-upi-id" },
        { label: "बैंक खाता लिंक करें", path: "/link-bank-account" },
        { label: "यूपीआई स्थिति", path: "/upi-status" },
      ],
      aayush: [
        { label: "आयुष्मान कार्ड आवेदन", path: "/apply-aayushman-card" },
        { label: "आयुष्मान नवीकरण", path: "/renew-aayushman-card" },
        { label: "आयुष्मान स्थिति", path: "/aayushman-status" },
      ],
      contact: [
        { label: "संपर्क करें", path: "/contact-us" },
        { label: "सहायता", path: "/contact-support" },
        { label: "प्रतिक्रिया", path: "/contact-feedback" },
      ],
      about: [
        { label: "हमारे बारे में", path: "/about-us" },
        { label: "हमारी टीम", path: "/about-team" },
        { label: "करियर", path: "/about-careers" },
      ],
      home: [
        { label: "स्वागत है", path: "/" },
        { label: "ताजा खबरें", path: "/news" },
        { label: "घोषणाएँ", path: "/announcements" },
      ],
      services: [
        { label: "सभी सेवाएँ", path: "/all-services" },
        { label: "लोकप्रिय सेवाएँ", path: "/popular-services" },
        { label: "नई सेवाएँ", path: "/new-services" },
      ],
      support: [
        { label: "सेवाएँ", path: "/services" },
        { label: "सहायता", path: "/support" },
        { label: "सामान्य प्रश्न", path: "/faq" },
      ],
      faq: [
        { label: "सामान्य FAQ", path: "/faq-general" },
        { label: "सेवा FAQ", path: "/faq-service" },
        { label: "तकनीकी FAQ", path: "/faq-technical" },
      ],
      blog: [
        { label: "ताजा पोस्ट", path: "/latest-blog" },
        { label: "लोकप्रिय पोस्ट", path: "/popular-blog" },
        { label: "श्रेणियाँ", path: "/categories-blog" },
      ],
      careers: [
        { label: "नौकरी के अवसर", path: "/careers-openings" },
        { label: "इंटर्नशिप", path: "/careers-internships" },
        { label: "संस्कृति", path: "/careers-culture" },
      ],
      terms: [
        { label: "सेवा की शर्तें", path: "/terms-service" },
        { label: "उपयोगकर्ता समझौता", path: "/terms-agreement" },
        { label: "कुकी नीति", path: "/terms-cookie" },
      ],
      privacy: [
        { label: "गोपनीयता नीति", path: "/privacy-policy" },
        { label: "डेटा सुरक्षा", path: "/privacy-data" },
        { label: "सुरक्षा", path: "/privacy-security" },
      ],
    },
  };

  const cards = {
    en: [
      { id: "aadhaar", title: "Aadhaar Card", link: "/aadhar" },
      { id: "pan", title: "PAN Card", link: "/pan" },
      { id: "account", title: "Bank Account", link: "/account" },
      { id: "upi", title: "UPI", link: "/upi" },
      { id: "aayush", title: "Aayushman Bharat", link: "/aayush" },
      { id: "contact", title: "Contact", link: "/contact" },
      { id: "about", title: "About", link: "/about" },
      { id: "home", title: "Home", link: "/" },
      { id: "services", title: "Services", link: "/services" },
      { id: "support", title: "Support", link: "/support" },
      { id: "faq", title: "FAQ", link: "/faq" },
      { id: "blog", title: "Blog", link: "/blog" },
      { id: "careers", title: "Careers", link: "/careers" },
      { id: "terms", title: "Terms of Service", link: "/terms" },
      { id: "privacy", title: "Privacy Policy", link: "/privacy" },
      { id: "service", title: "Service", link: "/service" },
    ],
    hi: [
      { id: "aadhaar", title: "आधार कार्ड", link: "/aadhar" },
      { id: "pan", title: "पैन कार्ड", link: "/pan" },
      { id: "account", title: "बैंक खाता", link: "/account" },
      { id: "upi", title: "यूपीआई", link: "/upi" },
      { id: "aayush", title: "आयुष्मान भारत", link: "/aayush" },
      { id: "contact", title: "संपर्क", link: "/contact" },
      { id: "about", title: "हमारे बारे में", link: "/about" },
      { id: "home", title: "होम", link: "/" },
      { id: "services", title: "सेवाएँ", link: "/services" },
      { id: "support", title: "सहायता", link: "/support" },
      { id: "faq", title: "FAQ", link: "/faq" },
      { id: "blog", title: "ब्लॉग", link: "/blog" },
      { id: "careers", title: "करियर", link: "/careers" },
      { id: "terms", title: "सेवा की शर्तें", link: "/terms" },
      { id: "privacy", title: "गोपनीयता नीति", link: "/privacy" },
      { id: "service", title: "सेवा", link: "/service" },
    ],
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.state && "service" in location.state) {
      setActiveService(location.state.service);
      setOpenMenu(false);
    }
  }, [location.state]);

  useEffect(() => {
    if (activeService) {
      const index = cards[lang].findIndex((c) => c.id === activeService);
      if (index >= 0 && cardRefs.current[index]) {
        cardRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [activeService, lang]);

  const toggleDropdown = () => {
    if (!openMenu && dotRef.current) {
      const rect = dotRef.current.getBoundingClientRect();
      setMenuPos({ top: rect.bottom + 6, left: rect.left });
    }
    setOpenMenu(!openMenu);
  };

  // ✅ Click anywhere outside dropdown closes it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dotRef.current &&
        !dotRef.current.contains(event.target) &&
        openMenu
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <div className="bg-black text-white w-full overflow-hidden">
      <div className="flex items-center bg-gray-900 p-2">
        {activeService && activeService !== "home" && (
          <div ref={dotRef} className="flex-shrink-0">
            <button onClick={toggleDropdown} className="p-1">
              <VscThreeBars className="text-2xl" />
            </button>
          </div>
        )}

        <div className="flex gap-3 ml-2 overflow-x-auto scrollbar-hide w-full">
          {cards[lang].map((card, i) => (
            <Link
              key={card.id}
              to={card.link}
              ref={(el) => (cardRefs.current[i] = el)}
              onClick={() => {
                setActiveService(card.id);
                setOpenMenu(false);
              }}
              className={`flex-shrink-0 px-4 py-2 rounded cursor-pointer block ${
                activeService === card.id ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              {card.title}
            </Link>
          ))}
        </div>
      </div>

      {activeService && (
        <div
          className={`absolute bg-gray-800 w-52 shadow-lg z-[9999]
            transition-all duration-300
            ${
              openMenu
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full pointer-events-none"
            }`}
          style={{ top: menuPos.top, left: menuPos.left }}
        >
          {serviceOptions[lang][activeService]?.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setOpenMenu(false)}
              className="block px-4 py-2 text-sm hover:bg-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Serviceopt;
