import Hello from "./Hello";

const App = () => {
  return (
    <>
      <Hello name="Győző" count={1} />
      <Hello name="React" count={1} />
      <Hello name="Gesztenye" count={1} />
      <Hello name="Német" count={3}>
        <p>Titkos üzenet</p>
      </Hello>
    </>
  );
};
export default App;
