"use client";
import React, { useRef } from "react";
import "./encoder-styles.scss";

export const Encoder = () => {
  let downloadRef = useRef<HTMLAnchorElement>(null);
  const readFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files && e.target.files[0];
    if (file) {
      reader.readAsText(file, "euc-kr");

      reader.onload = function (event) {
        const originalContent = event.target?.result as string;

        const bomContent = "\uFEFF" + originalContent;

        const blob = new Blob([bomContent], {
          type: "text/csv;charset=utf-8",
        });

        if (downloadRef.current && blob) {
          downloadRef.current.href = URL.createObjectURL(blob);
          downloadRef.current.download = "encoded_" + file.name;
        }
      };
    }
  };
  return (
    <div className="container">
      <div className="input-container">
        <label htmlFor="csv-file">csv file: </label>
        <input
          accept="text/csv"
          type="file"
          name="csv-file"
          aria-label="file"
          onChange={readFile}
        />
      </div>

      <a ref={downloadRef}>download {downloadRef.current?.download}</a>
    </div>
  );
};
