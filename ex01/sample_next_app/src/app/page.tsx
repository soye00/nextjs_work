import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

export default function Home() {
    return (
        <main style={{ padding: "20px" }}>
            <h1>Next.js + TypeScript 시작!</h1>
            <p>page.tsx 입니다 라라라 </p>

            <h1>greeting</h1>
            <Greeting name="홍길동"></Greeting>
            <Greeting name="박길동"/>

            <Counter/>



        </main>
    );
}
