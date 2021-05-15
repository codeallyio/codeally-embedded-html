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
  style="height: 550px; position: relative; overflow: hidden; border-top: 2px solid black; border-bottom: 2px solid black; width: 100vw; left: -40px;"
  src="https://codeally.io/embed/?repoUrl=https://github.com/codeallyio/hackathon-starter-codeally"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>
`);
};
