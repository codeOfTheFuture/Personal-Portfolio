// import React from "react";

// const Hamburger = () => {
//   return (
//     <div className='hamburger-container'>
//       <input type='checkbox' className='toggle' />
//       <div className='hamburger'>
//         <div></div>
//       </div>

//       <style jsx>{`
//         .hamburger-container {
//           position: absolute;
//           top: 0;
//           left: 0;
//         }
//         .toggle {
//           position: absolute;
//           top: 6px;
//           left: 6px;
//           z-index: 10;
//           cursor: pointer;
//           width: 60px;
//           height: 60px;
//           opacity: 0;
//         }
//         .hamburger {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           position: absolute;
//           top: 0;
//           left: 0;
//           z-index: 1;
//           width: 50px;
//           height: 50px;
//           padding: 1rem;
//           background-color: white;
//         }
//         .hamburger div {
//           position: relative;
//           width: 100%;
//           height: 4px;
//           background-color: black;
//           display: flex;
//           justify-content: center;
//           transition: all 0.5s ease;
//         }

//         .hamburger div:before {
//           content: "";
//           position: absolute;
//           z-index: 1;
//           top: -12px;
//           width: 100%;
//           height: 4px;
//           background-color: black;
//         }

//         .hamburger div:after {
//           content: "";
//           position: absolute;
//           z-index: 1;
//           top: 12px;
//           width: 100%;
//           height: 4px;
//           background-color: black;
//         }

//         .toggle:checked + .hamburger > div {
//           transform: rotate(135deg);
//         }

//         .toggle:checked + .hamburger > div:before {
//           top: 0;
//           transform: rotate(90deg);
//         }

//         .toggle:checked + .hamburger > div:after {
//           top: 0;
//           transform: rotate(90deg);
//         }

//         @media (min-width: 600px) {
//           .hamburger-container {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hamburger;
