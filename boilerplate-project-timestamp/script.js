window.onload = () => {
  const fullstackEditor = CodeMirror.fromTextArea(
    document.getElementById("fullstackCode"),
    {
      lineNumbers: true,
      theme: "dracula",
      readOnly: true,
    }
  );

  fullstackEditor.getDoc().setValue(`
  <iframe
    title="codeally.io"
    wmode="transparent"
    style="width: 100%; height: 550px; position: relative; overflow: hidden; border: 0;"
    src="https://codeally.io/embed/?repoUrl=https://github.com/stroveio/boilerplate-project-timestamp&goBackTo=https://embed.codeally.io/boilerplate-project-timestamp"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  ></iframe>
  `);
};
