import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-transparent border-t border-accent/50 backdrop-blur-sm text-gray-600 text-[12px] fixed bottom-0 left-0 w-full">
      © {new Date().getFullYear()} AI Job Outreach · Built with ❤️ by
      <span className="text-primary"> Prabanjan</span>
    </footer>
  );
};

export default Footer;
