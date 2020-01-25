// import React, { Component } from "react";

// export default class Ninjas extends Component {
//   render() {
//     const { ninjas } = this.props;
//     const ninjaList = ninjas.map(ninja => {
//       return (
//         <div className="ninja" key={ninja.id}>
//           <div>{ninja.name}</div>
//           <div>{ninja.age}</div>
//           <div>{ninja.belt}</div>
//         </div>
//       );
//     });
//     return <div className="ninja-list">{ninjaList}</div>;
//   }
// }

import React from "react";

export const Ninjas = ({ ninjas, deleteNinja }) => {
  // const { ninjas } = props;
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 100 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <i
          onClick={() => {
            deleteNinja(ninja.id);
          }}
          className="fa fa-minus-circle"
        ></i>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
};
