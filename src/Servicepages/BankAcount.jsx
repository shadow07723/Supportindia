import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { Helmet } from "react-helmet-async";

const BankAccountInfo = () => {
  const { lang } = useContext(LanguageContext);

  // ✅ SEO data for both languages
  const seo = {
    hi: {
      title: "बैंक अकाउंट कैसे खोलें? | Secure Bank Account",
      description:
        "ISI Court, Patna जैसी जगहों से बैंक अकाउंट खोलना आसान है। सुरक्षित तरीके से online या branch visit से account खोलें।",
      keywords:
        "बैंक अकाउंट, ISI Court, Patna, ऑनलाइन बैंक, सुरक्षित बैंक अकाउंट, bank account",
    },
    en: {
      title: "How to Open a Bank Account | Secure Bank Account",
      description:
        "Open your bank account easily from ISI Court, Patna or any branch. Safe and secure online or in-branch process.",
      keywords:
        "bank account, ISI Court, Patna, online banking, secure bank account",
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
              बैंक अकाउंट कैसे खोलें? (Secure Bank Account)
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              आप आसानी से अपना बैंक अकाउंट ISI Court, Patna या अपने शहर की किसी
              भी शाखा से खोल सकते हैं। ऑनलाइन या ब्रांच विजिट से सुरक्षित तरीका
              अपनाएं।
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              बैंक अकाउंट खोलने का आसान तरीका
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>सबसे पहले बैंक की वेबसाइट या ऐप पर जाएं।</li>
              <li>
                जरूरी डॉक्यूमेंट जैसे ID proof और address proof तैयार रखें।
              </li>
              <li>ISI Court या किसी ब्रांच से account खोल सकते हैं।</li>
              <li>
                ऑनलाइन आवेदन भरने के बाद OTP या verification process complete
                करें।
              </li>
              <li>
                Account open होने के बाद net banking और mobile banking सेट करें।
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              बैंक अकाउंट के फायदे
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>सुरक्षित और तेज़ transaction</li>
              <li>Salary या benefits सीधे खाते में</li>
              <li>Online bill payment और UPI support</li>
              <li>Bank services आसानी से mobile से</li>
            </ul>

            {/* 🔹 Optional image */}
            <img
              src="/bank-account-example.png"
              alt="Bank account opening example from ISI Court, Patna"
              className="mt-6 rounded-lg shadow-md"
            />
          </>
        )}

        {/* 🔹 English Content */}
        {lang === "en" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How to Open a Bank Account (Secure Bank Account)
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              You can easily open your bank account from ISI Court, Patna or any
              branch in your city. Follow a safe online or branch visit process.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Easy Steps to Open a Bank Account
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>First, visit the bank’s website or app.</li>
              <li>
                Keep necessary documents like ID proof and address proof ready.
              </li>
              <li>You can open your account from ISI Court or any branch.</li>
              <li>Complete the online application with OTP or verification.</li>
              <li>
                Set up net banking and mobile banking after the account is
                opened.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Benefits of a Bank Account
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Safe and fast transactions</li>
              <li>Salary or benefits directly in your account</li>
              <li>Online bill payment and UPI support</li>
              <li>Bank services easily accessible via mobile</li>
            </ul>

            {/* 🔹 Optional image */}
            <img
              src="/bank-account-example.png"
              alt="Bank account opening example from ISI Court, Patna"
              className="mt-6 rounded-lg shadow-md"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BankAccountInfo;
