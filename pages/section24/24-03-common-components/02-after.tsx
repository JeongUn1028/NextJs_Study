import { wrapFormAsync } from "@/src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";
import Input01 from "@/src/components/commons/inputs/01";
import Button01 from "@/src/components/commons/buttons/01";

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
        writer: <Input01 register={register("writer")} />
        <div style={{ color: 'red' }}>{formState.errors.writer?.message}</div>
        title: <Input01 register={register("title")} />
        <div style={{ color: 'red' }}>{formState.errors.title?.message}</div>
        contents: <Input01 register={register("contents")} />
        <div style={{ color: 'red' }}>{formState.errors.contents?.message}</div>
        address: <Input01 register={register("boardAddress.addressDetail")} />
        <div style={{ color: 'red' }} >{formState.errors.boardAddress?.addressDetail?.message}</div>
        email: <Input01 register={register("email")} />
        <div style={{ color: 'red' }}>{formState.errors.email?.message}</div>
        password: <Input01 type="password" register={register("password")} />
        <div style={{ color: 'red' }}>{formState.errors.password?.message}</div>
        phone: <Input01 register={register("phone")} />
        <div style={{ color: 'red' }}>{formState.errors.phone?.message}</div>
        <Button01 isActive={formState.isValid}>Submit</Button01>
      </form>
    </>
  );
}

/**
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