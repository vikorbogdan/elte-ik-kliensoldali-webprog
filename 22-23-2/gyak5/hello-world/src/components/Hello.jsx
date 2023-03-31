import classNames from "classnames";
import "./Hello.css";
const Hello = (props) => {
  const { count, name, children } = props;
  /*
//   const greeting = name ? <h1>Helló, {name}!</h1> : <h1>Nincs kit üdvözölni</h1>;
//   const multipleGreetings = [];
  //   if (name) {
  //     return <h1>Helló {name}!</h1>;
  //   } else {
  //     return <h1>Nincs kit üdvözölni!</h1>;
  //   }
//   for (let index = 0; index < count; index++) {
//     multipleGreetings.push(greeting);
//   }*/
  return [...Array(count)].map((_, ind) => (
    <>
      {name ? (
        <h1 className={classNames({ react: name === "React" })} key={ind}>
          Helló {name}!
        </h1>
      ) : (
        <h1 key={ind}>Nincs kit üdvözölni</h1>
      )}
      {children}
    </>
  ));
};
export default Hello;
