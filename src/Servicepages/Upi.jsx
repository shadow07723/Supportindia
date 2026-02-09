import { useState } from "react";

export default function Mp4ToMp3() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [download, setDownload] = useState(null);
  const [loading, setLoading] = useState(false);

  const convert = async () => {
    if (!file) {
      alert("Please select MP4 file");
      return;
    }

    setLoading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append("video", file);

    const res = await fetch("http://localhost:5000/convert", {
      method: "POST",
      body: formData,
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const text = decoder.decode(value);
      text.split("\n\n").forEach((line) => {
        if (line.startsWith("data:")) {
          const data = JSON.parse(line.replace("data: ", ""));
          if (data.progress) setProgress(data.progress);
          if (data.done) {
            setDownload(`http://localhost:5000/download?file=${data.file}`);
            setLoading(false);
          }
        }
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          MP4 → MP3 Converter
        </h2>

        <p className="text-center text-gray-500 text-sm mt-1">
          Fast • Secure • Server-Side
        </p>

        {/* File Input */}
        <label className="mt-6 block">
          <span className="sr-only">Choose MP4</span>
          <input
            type="file"
            accept="video/mp4"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full text-sm text-gray-600
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-100 file:text-indigo-700
              hover:file:bg-indigo-200 cursor-pointer"
          />
        </label>

        {/* Convert Button */}
        <button
          onClick={convert}
          disabled={loading}
          className={`w-full mt-6 py-3 rounded-xl text-white font-semibold transition
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
        >
          {loading ? "Converting..." : "Convert to MP3"}
        </button>

        {/* Progress */}
        {loading && (
          <div className="mt-5">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Processing</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-indigo-600 h-2 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Download */}
        {download && (
          <a
            href={download}
            className="block text-center mt-6 py-3 rounded-xl
              bg-green-600 hover:bg-green-700 text-white font-semibold"
          >
            Download MP3
          </a>
        )}
      </div>
    </div>
  );
}
