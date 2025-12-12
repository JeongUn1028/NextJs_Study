import Example from "../../../src/components/units/14-props-children-example";

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
