import Example from "../../../src/components/units/14-props-children-example";

// ! Props Children 패턴을 통한 자식 요소 전달 페이지
export default function PropsChildrenPage(): JSX.Element {
  return (
    <>
      <Example school="hi">
        <input type="text" />
        <div>Children</div>
        <button>Click!</button>
      </Example>
    </>
  );
}
