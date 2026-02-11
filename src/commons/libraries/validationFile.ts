export const checkValidationFile = (file?: File): boolean => {
  if (file === undefined) return false;
  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다. (제한: 5MB)");
    return false;
  }
  return true;
  // if (!file.type.includes("jpeg") && !file.type.includes("png")) {
  //   alert("jpeg 또는 png 파일만 업로드 가능합니다.");
  //   return;
  // }
};
