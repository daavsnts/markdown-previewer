import './MarkDownPreview.css'

export default function MarkDownPreview({ text, marked }) {
  function createMarkup(markedParsed) {
    return {__html: markedParsed};
  }

  return <div id="preview" dangerouslySetInnerHTML={createMarkup(marked.parse(text))}></div>
}
