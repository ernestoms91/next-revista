import * as Yup from "yup";

const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
  }

export const newInfoSchema = () => {
    return Yup.object().shape({
        image: Yup
        .mixed()
        .required("Required")
        .test("is-valid-type", "Not a valid image type",
          value => isValidFileType(value && value.name.toLowerCase(), "image"))
        .test("is-valid-size", "Max allowed size is 100KB",
          value => value && value.size <= MAX_FILE_SIZE)
    });
  };