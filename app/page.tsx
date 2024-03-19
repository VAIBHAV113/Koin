import Container from "./container/page.js";
import Header from "./header/page.js";

export default function Home() {
  return (
    <main className="flex justify-between flex-col  ">
      <Header />
      <Container />
    </main>
  );
}
