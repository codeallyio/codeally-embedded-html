window.onload = () => {
    const fullstackEditor = CodeMirror.fromTextArea(
      document.getElementById("fullstackCode"),
      {
        lineNumbers: true,
        theme: "dracula",
        readOnly: true
      }
    );
  
    fullstackEditor.getDoc().setValue(`
    <iframe
      title="Strove.io"
      wmode="transparent"
      style="width: 100%; height: 550px; position: relative; overflow: hidden; border: 0;"
      src="https://strove.io/embed/?repoUrl=https://github.com/stroveio/metric-imperial-converter-fcc-solution&goBackToRoute=/metric-imperial-converter-fcc-solution"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    ></iframe>
    `);
  };
  