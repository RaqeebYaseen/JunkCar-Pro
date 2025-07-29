const Header = () => {
  return (
    <header className="bg-orange-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">JunkCar Pro</h1>
        <nav className="space-x-4">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#inventory">Inventory</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;


