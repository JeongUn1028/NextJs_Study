import { ChangeEvent, MouseEvent } from "react";
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  isEdit: boolean;
  data?: any;
}
