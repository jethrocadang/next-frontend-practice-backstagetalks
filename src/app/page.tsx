import { Aside } from "./_components/aside";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Issue1, Issue2, Issue3, Issue4, Issue5, Issue6, Issue7 } from "./_components/section";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Aside />
      <section
        id="issue-7"
        className="h-dvh bg-background-pink flex items-center "
      >
        <Issue7 />
      </section>
      <section id="issue-6" className="h-dvh bg-white flex items-center">
        <Issue6 />
      </section>
      <section
        id="issue-5"
        className="h-dvh bg-background-green flex items-center"
      >
        <Issue5 />
      </section>
      <section
        id="issue-5"
        className="h-dvh bg-background-orange flex items-center"
      >
        <Issue4/>
      </section>
      <section
        id="issue-5"
        className="h-dvh bg-background-yellow flex items-center"
      >
        <Issue3 />
      </section>
      <section
        id="issue-5"
        className="h-dvh bg-background-blue flex items-center"
      >
        <Issue2 />
      </section>
      <section
        id="issue-5"
        className="h-dvh bg-background-red flex items-center"
      >
        <Issue1 />
      </section>
      <Footer />
    </main>
  );
}
