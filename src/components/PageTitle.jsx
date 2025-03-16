import { useEffect } from "react";

export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = title;  // Oppdaterer tittelen dynamisk
  }, [title]);

  return null; // Kun for funksjonalitet, men ingen visuell effekt
}