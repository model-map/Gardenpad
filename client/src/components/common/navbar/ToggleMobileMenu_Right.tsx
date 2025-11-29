const ToggleMobileMenu_Right = () => {
  return (
    <div className="md:hidden bg-secondary border-t">
      <div className="flex flex-col gap-4 p-4">
        <a
          href="#"
          className="text-foreground hover:text-primary transition-colors"
        >
          Product
        </a>
        <a
          href="#"
          className="text-foreground hover:text-primary transition-colors"
        >
          Services
        </a>
        <a
          href="#"
          className="text-foreground hover:text-primary transition-colors"
        >
          About
        </a>
        <a
          href="#"
          className="text-foreground hover:text-primary transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
export default ToggleMobileMenu_Right;
