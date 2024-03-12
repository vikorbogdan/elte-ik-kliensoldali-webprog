import cn from "classnames";
const Hello = (props) => {
  const { name, count, children } = props;
  console.log(props);
  return (
    <div className="bg-slate-200 mt-10 w-1/2 hover:scale-105 rounded-lg p-5">
      {Array.from({ length: count }).map((_, index) => (
        <h1 className={cn({ "text-orange-300": name === "React" }, "text-2xl mb-4")} key={index}>
          {!name ? "Nincs kit üdvözölni" : `Helló ${name}`}
        </h1>
      ))}
      {children}
    </div>
  );
};

export default Hello;
