import { UseFormRegisterReturn } from "react-hook-form";

interface IInput01Props {
  register: UseFormRegisterReturn<string>;
  type?: "text" | "password" | "email" | "tel";
}

export default function Input01({ register, type }: IInput01Props): JSX.Element {
  return (
    <>
      <input type={type ?? "text"} {...register} />
    </>
  )
}