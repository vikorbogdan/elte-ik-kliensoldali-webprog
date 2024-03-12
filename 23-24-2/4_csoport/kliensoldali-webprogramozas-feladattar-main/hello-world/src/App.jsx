import Hello from "./Hello";

const App = () => {
  return (
    <>
      <Hello name="Győző" count={3} />
      <Hello name="" count={1} />
      <Hello name="Csonka András" count={2} />
      <Hello name="React" count={4} />
      <Hello name="Finn az Adventure Timeból" count={2}>
        <p>Köszi hogy benne vagy az adventure timeban!!!</p>
      </Hello>
    </>
  );
};

export default App;
