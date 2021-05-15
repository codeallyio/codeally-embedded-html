window.onload = () => {
  const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    theme: "dracula",
    readOnly: true,
  });

  editor.getDoc().setValue(`
<iframe
  title="codeally.io"
  wmode="transparent"
  style="width: 100%; height: 550px; position: relative; overflow: hidden; border: 0;"
  src="https://codeally.io/embed/?repoUrl=https://github.com/codeallyio/hackathon-starter-codeally"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>
`);
};
