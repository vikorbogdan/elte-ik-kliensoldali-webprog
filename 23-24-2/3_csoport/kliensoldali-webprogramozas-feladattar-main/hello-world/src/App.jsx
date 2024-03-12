import Hello from "./Hello";

const App = () => {
  return (
    <div>
      <Hello name="Győző" count={3} />
      <Hello name="Anya" count={4} />
      <Hello name="Kozsik" count={1}>
        <p>Köszi a diplomát!</p>
      </Hello>
      <Hello name="React" count={1}>
        <p>Küldjetek Zsömléket!</p>
        <p>Meg kenyeret!</p>
      </Hello>
    </div>
  );
};

export default App;
