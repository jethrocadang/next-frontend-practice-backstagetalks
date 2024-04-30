export const Footer = () => {
  return (
    <footer className="hidden lg:inline-block fixed z-10 bottom-0 w-[320] p-5 font-semibold text-lg tracking-wide">
      <p>
        Backstage Talks is a&nbsp;magazine <br /> of&nbsp;casual, but
        in&nbsp;depth dialogues <br /> on&nbsp;design and business. Our
        decisions <br /> shape and influence this complex <br />
        world—to have a&nbsp;chance to&nbsp;make the <br /> right ones, we need
        to talk.
      </p>
      <span className="flex font-thin text-sm pt-2 tracking-tight">
        © 2024 &nbsp;
        <p className="underline decoration-solid">Published by Büro Milk</p>
      </span>
      <br />
      <span className="underline decoration-solid">Privacy Policy</span>
    </footer>
  );
};
