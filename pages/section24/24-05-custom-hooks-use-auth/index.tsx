import useAuth from "@/src/components/commons/hooks/useAuth";

//TODO: 커스텀 훅 - useAuth
function CustomHooksUseAuthPage(): JSX.Element {
  useAuth()
  return (
    <>
      <h1>커스텀 훅 - useAuth</h1>
    </>
  );
}

export default CustomHooksUseAuthPage;