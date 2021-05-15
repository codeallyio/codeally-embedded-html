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
      style="height: 550px; position: relative; overflow: hidden; border-top: 2px solid black; border-bottom: 2px solid black; width: 100vw; left: -40px;"
      src="https://codeally.io/embed/?repoUrl=https://github.com/codeallyio/metric-imperial-converter-fcc-solution&goBackTo=https://embed.codeally.io/metric-imperial-converter-fcc-solution"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    ></iframe>
    `);
};
