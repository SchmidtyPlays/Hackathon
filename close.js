document.getElementById('close-btn').addEventListener('click', () => {
  if (window.electronAPI) {
    window.electronAPI.closeWindow();
  } else {
    window.close();
  }
});