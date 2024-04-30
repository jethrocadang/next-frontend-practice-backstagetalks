export const Aside = () => {
  return (
    <aside className="hidden lg:flex fixed right-0 h-full flex-col justify-between items-end p-5 ">
      <a href="#" className="font-semibold tracking-wide text-lg"> info@backstagetalks.com</a>
      <ul className="space-y-1 *:text-lg *:tracking-wide">
        {[...Array.from({length: 7})].map((_, index) => (
          <li key={index}>
            <a href={`#issue-${7 - index}`} >Issue #{7 - index}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
