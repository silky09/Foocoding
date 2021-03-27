import React from 'react'


const myName = 'Silky';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

let date = new Date();
let month = monthNames[date.getMonth()];
let currentYear = date.getFullYear();
const Footer = () => {
  return (
    <div>
      <footer>
        <p>Created by {myName} with ☕️ and ❤️ </p>
        <p>Copyright © {month} {currentYear}</p>
      </footer>
    </div>
  )
}

export default Footer
