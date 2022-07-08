import React from "react";

// function Kimlik(props) {
//   console.log(props);
//   return (
//     <div id="name" className="box">
//       {props.children}
//       <h3>
//         Ad:{props.name} Soyad:{props.surname}
//       </h3>
//     </div>
//   );
// }

const Kimlik = (props) => {
  const { name, surname, children } = props;
  return (
    <div id="name" className="box">
      {children}
      <h3>
        Ad:{name} Soyad:{surname}
      </h3>
    </div>
  );
};

export default Kimlik;
