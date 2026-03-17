import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils"; // Giả sử bạn có file utils này

export const Footer = () => {
  // Tự động lấy năm hiện tại
  const currentYear = new Date().getFullYear();

  // Danh sách các liên kết mạng xã hội
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/Hieuej147" },
    { name: "LinkedIn", icon: Linkedin, url: "#" }, // THAY LINK CỦA BẠN
    { name: "Twitter", icon: Twitter, url: "#" }, // THAY LINK CỦA BẠN
  ];

  // Hàm cuộn mượt lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-card border-t border-border/50 py-8 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Phần Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} HieuTech. All rights reserved.
          </p>
        </div>

        {/* Phần Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Nút Back to Top */}
        <button
          onClick={scrollToTop}
          className={cn(
            "group flex items-center gap-2 text-sm text-muted-foreground",
            "hover:text-primary transition-colors duration-300"
          )}
          aria-label="Scroll to top"
        >
          Back to Top
          <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
};