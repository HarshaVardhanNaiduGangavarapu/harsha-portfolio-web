const DownloadFile = async (url, fileName) => {
  const fileResponse = await fetch(url, {
    mode: "no-cors",
  });
  const fileBlob = await fileResponse.blob();
  const fileURL = URL.createObjectURL(fileBlob);

  const link = document.createElement("a");
  link.href = fileURL;
  link.setAttribute("download", fileName + ".pdf");
  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
};

export default DownloadFile;
