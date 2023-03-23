import './MarkDownEditor.css'

export default function MarkDownEditor({ text, setText }) {

  function handleTextArea(event) {
    setText(event.target.value);
  }

  return <textarea id="editor" onChange={handleTextArea}>{text}</textarea>;
}
