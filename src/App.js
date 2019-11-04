import React from "react";

// function Food(props) {
//   console.log(props);// prop 들로 구성된 객체 출력
//   return <h1>i like {props.favorite}</h1>;
// }
function Food({ favorite }) {
  return <h1>i like {favorite}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>안녕!</h1>
      <Food favorite="김치" />
      <Food favorite="라면" />
      <Food favorite="삼겹살" />
      <Food favorite="소고기" />
    </div>
  );
}

export default App;
