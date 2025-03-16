import { Link } from "react-router-dom";
import '../styles/nav.scss';

export default function Nav({ categories, activeCategory }) {
  return (
    <nav className="faner">  {/* Faner med kategorier. Går igjennom kategorier, finner den rette, 
      gjør den aktiv med klasse. Link gjør at man kan navigere uten å laste inn alt på nytt.*/}  
      {categories.map((category) => (
        <Link
          key={category}
          to={`/${category}`}
          className={`faneKlikk ${activeCategory === category ? "active" : ""}`}
        >
          {category.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
