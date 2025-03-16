import Nav from "./Nav";
import '../styles/layout.scss';

export default function Layout({ children, activeCategory, categories }) {
  return (
    <div className="wraparound"> {/* For navigasjon og innhold */}               
        <Nav activeCategory={activeCategory} categories={categories} />  
        {children} {/* For dynamisk innhold */} 
    </div>
  );
}
