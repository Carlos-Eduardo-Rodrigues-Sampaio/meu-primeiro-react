function Header({ categories }) {
  return (
    <header className="header">
      <a href="#home" className="logo">
        開発
      </a>

      <nav aria-label="Menu principal">
        <a href="#home">HOME</a>

        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
          >
            {category.title}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;