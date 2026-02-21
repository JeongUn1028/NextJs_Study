import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required("작성자는 필수 입력입니다."),
  title: yup.string().required("제목은 필수 입력입니다."),
  contents: yup.string().required("내용은 필수 입력입니다."),
  boardAddress: yup.object({
    addressDetail: yup.string().required("주소는 필수 입력입니다."),
  }),
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,15}$/,
      "비밀번호는 영문자, 숫자, 특수문자를 포함한 4~15자리여야 합니다."
    )
    .required("비밀번호는 필수 입력입니다."),
  phone: yup
    .string()
    .matches(
      /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
      "휴대폰 번호 형식이 아닙니다."
    )
    .required("휴대폰 번호는 필수 입력입니다."),
});
