const board = document.querySelectorAll(".board");
const A1 = document.querySelector(".A1");
const A2 = document.querySelector(".A2");
const A3 = document.querySelector(".A3");
const A4 = document.querySelector(".A4");
const A5 = document.querySelector(".A5");
const A6 = document.querySelector(".A6");
const A7 = document.querySelector(".A7");
const A8 = document.querySelector(".A8");
const A9 = document.querySelector(".A9");
const A10 = document.querySelector(".A10");
const B1 = document.querySelector(".B1");
const B2 = document.querySelector(".B2");
const B3 = document.querySelector(".B3");
const B4 = document.querySelector(".B4");
const B5 = document.querySelector(".B5");
const B6 = document.querySelector(".B6");
const B7 = document.querySelector(".B7");
const B8 = document.querySelector(".B8");
const B9 = document.querySelector(".B9");
const B10 = document.querySelector(".B10");
const C1 = document.querySelector(".C1");
const C2 = document.querySelector(".C2");
const C3 = document.querySelector(".C3");
const C4 = document.querySelector(".C4");
const C5 = document.querySelector(".C5");
const C6 = document.querySelector(".C6");
const C7 = document.querySelector(".C7");
const C8 = document.querySelector(".C8");
const C9 = document.querySelector(".C9");
const C10 = document.querySelector(".C10");
const D1 = document.querySelector(".D1");
const D2 = document.querySelector(".D2");
const D3 = document.querySelector(".D3");
const D4 = document.querySelector(".D4");
const D5 = document.querySelector(".D5");
const D6 = document.querySelector(".D6");
const D7 = document.querySelector(".D7");
const D8 = document.querySelector(".D8");
const D9 = document.querySelector(".D9");
const D10 = document.querySelector(".D10");
const E1 = document.querySelector(".E1");
const E2 = document.querySelector(".E2");
const E3 = document.querySelector(".E3");
const E4 = document.querySelector(".E4");
const E5 = document.querySelector(".E5");
const E6 = document.querySelector(".E6");
const E7 = document.querySelector(".E7");
const E8 = document.querySelector(".E8");
const E9 = document.querySelector(".E9");
const E10 = document.querySelector(".E10");
const F1 = document.querySelector(".F1");
const F2 = document.querySelector(".F2");
const F3 = document.querySelector(".F3");
const F4 = document.querySelector(".F4");
const F5 = document.querySelector(".F5");
const F6 = document.querySelector(".F6");
const F7 = document.querySelector(".F7");
const F8 = document.querySelector(".F8");
const F9 = document.querySelector(".F9");
const F10 = document.querySelector(".F10");
const G1 = document.querySelector(".G1");
const G2 = document.querySelector(".G2");
const G3 = document.querySelector(".G3");
const G4 = document.querySelector(".G4");
const G5 = document.querySelector(".G5");
const G6 = document.querySelector(".G6");
const G7 = document.querySelector(".G7");
const G8 = document.querySelector(".G8");
const G9 = document.querySelector(".G9");
const G10 = document.querySelector(".G10");
const H1 = document.querySelector(".H1");
const H2 = document.querySelector(".H2");
const H3 = document.querySelector(".H3");
const H4 = document.querySelector(".H4");
const H5 = document.querySelector(".H5");
const H6 = document.querySelector(".H6");
const H7 = document.querySelector(".H7");
const H8 = document.querySelector(".H8");
const H9 = document.querySelector(".H9");
const H10 = document.querySelector(".H10");
const I1 = document.querySelector(".I1");
const I2 = document.querySelector(".I2");
const I3 = document.querySelector(".I3");
const I4 = document.querySelector(".I4");
const I5 = document.querySelector(".I5");
const I6 = document.querySelector(".I6");
const I7 = document.querySelector(".I7");
const I8 = document.querySelector(".I8");
const I9 = document.querySelector(".I9");
const I10 = document.querySelector(".I10");
const J1 = document.querySelector(".J1");
const J2 = document.querySelector(".J2");
const J3 = document.querySelector(".J3");
const J4 = document.querySelector(".J4");
const J5 = document.querySelector(".J5");
const J6 = document.querySelector(".J6");
const J7 = document.querySelector(".J7");
const J8 = document.querySelector(".J8");
const J9 = document.querySelector(".J9");
const J10 = document.querySelector(".J10");
const ships = [
    {name:"Patrol Boat", length:2, locations:[0,0,0]},
    {name:"Submarine", length:2, locations:[0,0,0]},
    {name:"Cruiser", length:3, locations:[0,0,0]},
    {name:"Destroyer", length:3, locations:[0,0,0]},
    {name:"Battleship", length:4, locations:[0,0,0]},
    {name:"Aircraft Carrier", length:5, locations:[0,0,0]}
];
const numShips = ships.length;

for (var i = 0; i < this.numShips; i++) {
    let location = ships[i].locations;
};

console.log(location);