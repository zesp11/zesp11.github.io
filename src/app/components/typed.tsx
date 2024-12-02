'use client';

import { ReactTyped } from "react-typed";

export default function Typed() {

  return (
    <ReactTyped
      strings={[
        "Integracja z członkami zespołu",
        "Poznawanie innych osób",
        "Dobra zabawa",
        "Tworzenie wyjątkowych historii",
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
  );

}