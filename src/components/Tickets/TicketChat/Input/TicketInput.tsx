import React, {useRef, useState, useEffect } from "react";
import type { ChatInputProps } from "./TicketInput.types";
import { Button } from "@douyinfe/semi-ui";

import Quill from 'quill';
import 'react-quill/dist/quill.snow.css';

import styles from "./TicketInput.module.css"

export const TicketInput: React.FC<ChatInputProps> = ({ onSend, isSending = false }) => {
  const [message, setMessage] = useState("");
  const [htmlMessage, setHtmlMessage] = useState("");

  const editorRef = useRef(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    const currentEditor = editorRef.current;

    if (currentEditor) {
      const quill = new Quill(currentEditor, {
        modules: {
          toolbar: "#toolbar",
        },
        theme: "snow",
        placeholder: "Введите текст...",
      });

      quill.on("text-change", () => {
        const html = quill.root.innerHTML;
        const text = quill.getText();
        setMessage(text);
        setHtmlMessage(html);
      })

      quillRef.current = quill;

      return () => {
        if (currentEditor) {
          quill.off("text-change");
        }
      }
    }

  }, []);

  const handleSend = () => {
    const text = message.trim();
    if (!text || isSending) return;
    onSend(text, htmlMessage);
    setMessage("");
    setHtmlMessage("");
    quillRef.current?.setText("");
  };

  return (
    <div className={styles.wrapper}>

      <div ref={editorRef} id="editor" className={styles.editor} />

      <div className={styles.toolbarContainer}>
        <div id="toolbar" className={styles.toolbar}>
        <span className="ql-formats">
          <button className="ql-bold"/>
          <button className="ql-italic"/>
          <button className="ql-underline"/>
        </span>
          <span className="ql-formats">
          <button className="ql-code-block"/>
          <button className="ql-blockquote"/>
        </span>
          <span className="ql-formats">
          <button className="ql-list" value="ordered"/>
        </span>
          <span className="ql-formats">
          <button className="ql-image"/>
        </span>
        </div>

        <Button theme="solid" onClick={handleSend} loading={isSending}>
          Отправить
        </Button>
      </div>
    </div>);
};