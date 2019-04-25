import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')
  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}

const trimFromCodeStr = (code) => code.replace(/^ {8}/gm, '').trim()
export {
  highlightCode,
  trimFromCodeStr
}