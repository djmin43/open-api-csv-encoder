"use client";
import React, { useRef, useState } from "react";
import "./encoder-styles.scss";
export const Encoder = () => {
  let downloadRef = useRef<HTMLAnchorElement>(null);
  let inputRef = useRef<HTMLInputElement>(null);

  const [hasDownload, setHasDownload] = useState(false);
  const [downloadName, setDownloadName] = useState("");
  const encodeCsvFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files && e.target.files[0];
    if (file) {
      reader.readAsText(file, "euc-kr");

      reader.onload = function (event) {
        const originalContent = event.target?.result as string;
        const bomContent = "\uFEFF" + originalContent;
        const blob = new Blob([bomContent], {
          type: `${fileType.csv};charset=utf-8`,
        });

        if (downloadRef.current && blob) {
          downloadRef.current.href = URL.createObjectURL(blob);
          downloadRef.current.download = "encoded_" + file.name;
          setDownloadName("encoded" + file.name);
          setHasDownload(true);
        }
      };
    }
  };
  return (
    <div className="input-container">
      <label htmlFor="file"></label>
      <input
        ref={inputRef}
        className="input"
        accept={`${fileType.csv}`}
        type="file"
        name="file"
        aria-label="file"
        onChange={encodeCsvFile}
      />
      <button
        className="upload-button"
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        파일 첨부하기
      </button>

      <div>
        <span
          className={classNames("subheader2", !hasDownload && "hide-download")}
        >
          다운로드 링크:{" "}
        </span>
        <a
          ref={downloadRef}
          className={classNames("caption", !hasDownload && "hide-download")}
        >
          {downloadName}
        </a>
      </div>
    </div>
  );
};

import { fileType } from "@/app/_constants/file-type";
import classNames from "classnames";
