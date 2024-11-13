

import React from "react";


export default function DownloadCVButton() {
  return (
    <div className="flex justify-center mt-4">
      <a
        href="/cv.pdf"
        download="CV_Andres_Veintimilla.pdf"
        className="contact-button"
      >
        Descargar CV
      </a>
    </div>
  );
}