import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { Helmet } from "react-helmet-async";

const UpiInfo = () => {
  const { lang } = useContext(LanguageContext);

  // ✅ SEO data for both languages
  const seo = {
    hi: {
      title: "UPI क्या है? | Unified Payments Interface",
      description:
        "UPI एक डिजिटल पेमेंट सिस्टम है जिससे आप तुरंत बैंक से बैंक पैसे ट्रांसफर कर सकते हैं। ISI Court, Patna जैसी जगहों से भी पैसे भेजें।",
      keywords:
        "UPI, डिजिटल पेमेंट, बैंक ट्रांसफर, ISI Court, Patna, UPI ऐप, UPI PIN",
    },
    en: {
      title: "What is UPI? | Unified Payments Interface",
      description:
        "UPI (Unified Payments Interface) is a digital payment system that allows instant bank-to-bank transfers. Send money from places like ISI Court, Patna instantly.",
      keywords:
        "UPI, digital payment, bank transfer, ISI Court, Patna, UPI app, UPI PIN",
    },
  };

  const { title, description, keywords } = lang === "hi" ? seo.hi : seo.en;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* ✅ Helmet for SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        {/* 🔹 Hindi Content */}
        {lang === "hi" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              UPI क्या है? (Unified Payments Interface)
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              UPI एक डिजिटल पेमेंट सिस्टम है जिससे आप तुरंत बैंक से बैंक पैसे
              ट्रांसफर कर सकते हैं। ISI Court, Patna जैसी जगहों से भी पैसे भेजना
              आसान है।
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              UPI कैसे काम करता है?
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>सबसे पहले बैंक अकाउंट को UPI ऐप से लिंक करें।</li>
              <li>एक यूनिक UPI ID बनती है (example@upi)।</li>
              <li>पैसे भेजने के लिए केवल UPI ID या QR कोड चाहिए।</li>
              <li>ISI Court या अन्य जगहों से भी instant payment।</li>
              <li>Transaction UPI PIN से secure होता है।</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              UPI के फायदे
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>24x7 instant payment</li>
              <li>Bank details share करने की जरूरत नहीं</li>
              <li>Mobile से ही payment</li>
              <li>Highly secure system</li>
            </ul>

            {/* 🔹 Optional image */}
            <img
              src="/upi-example.png"
              alt="UPI digital payment example from ISI Court, Patna"
              className="mt-6 rounded-lg shadow-md"
            />
          </>
        )}

        {/* 🔹 English Content */}
        {lang === "en" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What is UPI? (Unified Payments Interface)
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              UPI (Unified Payments Interface) is a digital payment system that
              allows instant bank-to-bank transfers. You can send money from
              places like ISI Court, Patna easily.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              How UPI Works
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>First, link your bank account with a UPI app.</li>
              <li>A unique UPI ID is created (example@upi).</li>
              <li>To send money, only UPI ID or QR code is required.</li>
              <li>Instant payment even from ISI Court or other locations.</li>
              <li>Transactions are secured with a UPI PIN.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Benefits of UPI
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>24x7 instant payment</li>
              <li>No need to share bank details</li>
              <li>Payment via mobile</li>
              <li>Highly secure system</li>
            </ul>

            {/* 🔹 Optional image */}
            <img
              src="/upi-example.png"
              alt="UPI digital payment example from ISI Court, Patna"
              className="mt-6 rounded-lg shadow-md"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default UpiInfo;
