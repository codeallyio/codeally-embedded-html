window.onload = () => {
  const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    theme: "dracula",
    readOnly: true
  });

  editor.getDoc().setValue(`
<iframe
  title="Strove.io"
  wmode="transparent"
  style="width: 100%; height: 550px; position: relative; overflow: hidden; border: 0;"
  src="https://strove.io/embed/?repoUrl=https://github.com/stroveio/strove.io"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>
`);
};
