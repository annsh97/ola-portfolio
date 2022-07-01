import React from "react";

export default function Contact() {
  const nameSurname = "Meri Shalutashvili";
  const email = "shalutashvili811@gmail.com";
  const num = "+995574347434";
  const GitHub = "https://github.com/annsh97";
  const linkdin = "https://www.linkedin.com/in/meri-shalutashvili-63459b1aa";
  return (
    <div>
      <ul className="page">
        <li>{nameSurname}</li>
        <li>{email}</li>
        <li> {num}</li>
        <li>{GitHub}</li>
        <li>{linkdin}</li>
      </ul>
    </div>
  );
}
