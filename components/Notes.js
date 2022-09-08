import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Focus from "@tiptap/extension-focus";
import Underline from "@tiptap/extension-underline";
import React, { useState } from "react";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="textMenu">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <strong>B</strong>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <em>I</em>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <p style={{ padding: 0, margin: 0, textDecoration: "underline" }}>U</p>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        {"{ }"}
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        # list
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        " "
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        divider
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>↩</button>
      <button onClick={() => editor.chain().focus().redo().run()}>↪</button>
    </div>
  );
};

export default () => {
  const [editorContent, setEditorContent] = useState("");

  const editor = useEditor({
    extensions: [StarterKit, Focus, Underline],
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getJSON());
    },
    autofocus: false,
    content: editorContent,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        style={{
          border: "1px solid white",
          borderRadius: "5px",
          marginTop: ".5rem",
          minHeight: "200px",
          background: "white",
          color: "black",
          padding: "5px",
        }}
        editor={editor}
      />
    </div>
  );
};
