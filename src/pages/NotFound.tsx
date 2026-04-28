import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BRAND = "#1d4ed8";

export default function NotFound() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <div
        className="pt-[88px] min-h-screen flex items-center justify-center"
        style={{ background: "#f8fafc" }}
      >
        <div className="text-center px-4 py-20 max-w-lg mx-auto">
          <p className="text-7xl sm:text-8xl font-extrabold mb-4" style={{ color: BRAND }}>
            404
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-500 text-base mb-8 leading-relaxed">
            We couldn't find that page. Head back home and we'll get you pointed
            in the right direction.
          </p>
          <Link
            to="/"
            style={{ background: BRAND, color: "white" }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-extrabold hover:brightness-110 transition-all shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
