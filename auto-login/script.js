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
  src="https://strove.io/embed?photoUrl=https://i1.sndcdn.com/avatars-000662350037-ktul7a-t500x500.jpg&email=test2&githubToken=f4c684ebf133aec2f0449be39ed0265c842b8063&name=Guest&repoUrl=https://github.com/stroveio/hackathon-starter-strove&email=test123456 "
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>
`);
};
