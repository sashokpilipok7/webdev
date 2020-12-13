import React from "react";
import Counter from "./containers/Counter";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => <h3>{title}</h3>;

function App() {
  return (
    <div className="App">
      <Title title="Type script learning with react-typescript" />
      <Counter title="Counter: " />
    </div>
  );
}

export default App;
