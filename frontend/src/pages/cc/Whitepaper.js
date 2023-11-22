import React from "react";
import pdf from "./CautionCoinWhitepaper_FinalDraft2.pdf";

export default function Whitepaper() {
  return (
    <object data={pdf} type="application/pdf" width="100%" height="900px">
      <p>
        Your browser does not support PDFs.
        <a href={pdf}>Download the PDF</a> instead.
      </p>
    </object>
  );
}
