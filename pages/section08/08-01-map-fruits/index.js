const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
];

// ! 과일 목록을 렌더링하는 페이지
export default function MapFruitsPage() {
  return (
    <>
      {FRUITS.map((el) => (
        <div key={el.number}>
          {el.number}. {el.title}
        </div>
      ))}
    </>
  );
}
