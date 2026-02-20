import { wrapFormAsync } from "@/src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}
export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit } = useForm();

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
        writer: <input type="text" {...register("writer")} />
        title: <input type="text" {...register("title")} />
        contents: <input type="text" {...register("contents")} />
        address: <input type="text" {...register("boardAddress.addressDetail")} />
        <button>Submit</button>
      </form>
    </>
  );
}

/**
  <button type="reset">Delete Form inner value</button>
  <button type="button" onClick={onClickSubmit}>Submit</button>
  <button type="submit">Submit</button>
 */