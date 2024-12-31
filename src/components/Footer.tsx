
const Footer = () => {
  return (
    <footer className="border-t py-8 mt-8 mb-20 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        {/* Contact Info */}
        <div className="text-black">
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <p>Email: support@today.com</p>
          <p>Phone: 01234 567890</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/terms"
            className="text-black hover:opacity-50 transition font-medium"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="text-black hover:opacity-50 transition font-medium"
          >
            Privacy Policy
          </a>
          <a
            href="/support"
            className="text-black hover:opacity-50 transition font-medium"
          >
            Support
          </a>
          <a
            href="/faq"
            className="text-black hover:opacity-50 transition font-medium"
          >
            FAQ
          </a>
        </div>


        {/* Footer Bottom */}
        <div className="text-black text-sm">
          <p>Placeholder images and videos from Pixabay.com</p>
        </div>
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Ross Gray (Today Social Concept). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
