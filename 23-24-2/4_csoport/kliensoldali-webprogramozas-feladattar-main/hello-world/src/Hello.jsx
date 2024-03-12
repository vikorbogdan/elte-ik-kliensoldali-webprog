import classNames from "classnames";

const Hello = (props) => {
  const { name, count, children } = props;
  // console.log(props);
  // const name = props.name;
  // const count = props.count;
  return Array.from({ length: count }, (_, index) => (
    <div className="bg-gray-200 mt-5 w-1/2 rounded-xl p-3" key={index}>
      <h1 className={classNames("text-4xl mb-5", { "react-orange": name === "React" })}>
        {!name ? "Nincs kit üdvözölni!" : `Hello ${name}!`}
      </h1>
      {children}
    </div>
  ));
};

export default Hello;
