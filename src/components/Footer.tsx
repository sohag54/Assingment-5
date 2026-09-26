import logo from "../assets/assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-1 text-center md:text-left">

            <img
              src={logo}
              alt="Dev Stack Logo"
              className="w-32 h-auto mx-auto md:mx-0"
            />

            <p className="text-sm text-gray-500 mt-4 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start items-center gap-5 mt-5">

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                GitHub
              </a>

             <span className="text-gray-400 md:hidden">•</span>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Twitter
              </a>

              <span className="text-gray-400 md:hidden">•</span>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* Product */}
          <div className="hidden md:block">
            <h3 className="text-xs font-semibold mb-4">
              PRODUCT
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>
          </div>

          {/* Company */}
          <div className="hidden md:block">
            <h3 className="text-xs font-semibold mb-4">
              COMPANY
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>

          {/* Legal */}
          <div className="hidden md:block">
            <h3 className="text-xs font-semibold mb-4">
              LEGAL
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between gap-3">

          <p className="text-xs text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-gray-400">

            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-700">
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;