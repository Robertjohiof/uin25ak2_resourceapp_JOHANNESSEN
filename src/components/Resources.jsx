import { resources } from "../assets/ressurser.js";
import PageTitle from "./PageTitle";
import "../styles/resources.scss";

export default function Resources({ category }) {
  // Filtrerer innhold i forhold til valgt kategori
  const categoryResources = resources.filter((r) => r.category.toLowerCase() === category.toLowerCase());

  if (categoryResources.length === 0) {
    return <p className="error-message">Her finnes det ikke noe innhold.</p>;
  }

  //noopener gjør at linken er litt tryggere i forhold til phishing og lignede med usikker linking- kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noopener
  //Her returneres all info med riktige tagger, semantikk og trygge linker
  return (
    <div className="resources-container">
      {/* Bruker PageTitle for å oppdatere tittel dynamisk */}
      <PageTitle title={`${category.toUpperCase()} Resources`} />
      <h2>{category.toUpperCase()}</h2>
      {categoryResources.map((resource) => (
        <div key={resource.url}>
          <p>{resource.text && resource.text}</p>
          <ul>
            <li>
              <a href={resource.url} target="_blank" rel="noopener">
                {resource.title}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
