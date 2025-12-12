interface IProps {
  school: string;
  children: React.ReactNode;
}

export default function Example(props: IProps): JSX.Element {
  return (
    <div>
      <div>Hello</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>Bye</div>
    </div>
  );
}
