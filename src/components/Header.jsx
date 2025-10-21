// Import the required components
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "#projects", label: "Projects", disabled: false },
  { href: "#experience", label: "Experience", disabled: false },
  { href: "#education", label: "Education", disabled: false },
  { href: "#skills", label: "Skills", disabled: false },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="relative flex items-center justify-between py-8 sm:py-12">
      {/* Logo or Title */}
      <h1 className="text-3xl text-primary font-semibold">PA</h1>

      {/* Centered Navigation Menu - Only visible on larger screens */}
      <nav className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 gap-5 text-xl">
        {NAV_ITEMS.map(({ href, label, disabled }) => (
          <a
						hidden={disabled}
            key={href}
            href={href}
            className="hover:text-primary hover:scale-105 font-medium transition-all duration-200 ease-in"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Theme Toggle */}
      <ThemeToggle />
    </header>
  );
};

export default Header;
