import { wrapFormAsync } from "@/src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
  email: string;
  password: string;
  phone: string;
}



export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
        writer: <input type="text" {...register("writer")} />
        <div style={{ color: 'red' }}>{formState.errors.writer?.message}</div>
        title: <input type="text" {...register("title")} />
        <div style={{ color: 'red' }}>{formState.errors.title?.message}</div>
        contents: <input type="text" {...register("contents")} />
        <div style={{ color: 'red' }}>{formState.errors.contents?.message}</div>
        address: <input type="text" {...register("boardAddress.addressDetail")} />
        <div style={{ color: 'red' }} >{formState.errors.boardAddress?.addressDetail?.message}</div>
        email: <input type="text" {...register("email")} />
        <div style={{ color: 'red' }}>{formState.errors.email?.message}</div>
        password: <input type="password" {...register("password")} />
        <div style={{ color: 'red' }}>{formState.errors.password?.message}</div>
        phone: <input type="text" {...register("phone")} />
        <div style={{ color: 'red' }}>{formState.errors.phone?.message}</div>
        <button style={{ backgroundColor: formState.isValid ? "yellow" : "gray" }}>Submit</button>
      </form>
    </>
  );
}

/**
  <button type="reset">Delete Form inner value</button>
  <button type="button" onClick={onClickSubmit}>Submit</button>
  <button type="submit">Submit</button>
 */