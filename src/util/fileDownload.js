import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const DownloadFile = async (fileName) => {
  const fileRef = ref(storage, fileName);
  const downloadURL = await getDownloadURL(fileRef);
  window.open(downloadURL, `_blank`);
};

export default DownloadFile;
