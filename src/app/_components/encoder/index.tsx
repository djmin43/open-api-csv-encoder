"use client";
import React from "react";
import "./encoder-styles.scss";

export const Encoder = () => {
  const readFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files && e.target.files[0];
    if (file) {
      reader.readAsText(file);

      reader.onload = function (event) {
        const originalContent = event.target?.result as string;

        const bomContent = "\uFEFF" + originalContent;

        const blob = new Blob([bomContent], {
          type: "text/csv;charset=utf-8",
        });

        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "new_" + file.name; // Use the original file name

        a.click();

        URL.revokeObjectURL(a.href);
      };

      reader.readAsText(file, "euc-kr");
    }
  };
  return (
    <div className="container">
      <label htmlFor="csv-file">csv file: </label>
      <input
        accept="text/csv"
        type="file"
        name="csv-file"
        aria-label="file"
        onChange={readFile}
      />
    </div>
  );
};
