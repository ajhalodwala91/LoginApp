// Convert image into base64
export default function convertImage(file) {
  return new Promise((resolve, reject) => {
    const filReader = new FileReader();
    filReader.readAsDataURL(file);

    filReader.onload = () => {
      resolve(filReader.result);
    };
    filReader.onerror = () => {
      reject(error);
    };
  });
}
