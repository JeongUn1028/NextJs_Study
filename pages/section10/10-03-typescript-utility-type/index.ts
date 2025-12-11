interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

//* 1. Partial Type
type aaa = Partial<IProfile>;

//* 2. Required Type
type bbb = Required<IProfile>;

//* 3. Pick Type
type ccc = Pick<IProfile, "name" | "age">;

//* 4. Omit Type
type ddd = Omit<IProfile, "school">;

//* 5. Record Type
type eee = "hi" | "bye" | "die"; //Union Type
let child: eee = "bye";
let child2: string = "banana";

type fff = Record<eee, IProfile>;

//* 6. keyof
type ggg = keyof IProfile;

//* 7. type vs interface => interface 만 추가로 선언시 병합됨
interface IProfile {
  candy: number;
}

const props: Partial<IProfile> = { candy: 1 };
