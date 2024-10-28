// Import the required components
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
/*   { href: "#contact", label: "Contact" }, */
];

const Header = () => {
  return (
    <header className="relative flex items-center justify-between py-8 sm:py-12">
      {/* Logo or Title */}
      <h1 className="text-3xl text-primary font-semibold">PA</h1>

      {/* Centered Navigation Menu */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 sm:flex gap-5 text-xl">
        {NAV_ITEMS.map(({ href, label }) => (
          <a
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

      {/* Optionally, Dark Mode Toggle can be added here */}
      {/* <DarkModeToggle /> */}
    </header>
  );
};

export default Header;
