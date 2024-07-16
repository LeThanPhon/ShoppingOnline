// import React, { Component } from 'react';
// import MyContext from '../contexts/MyContext';
// import { Link } from 'react-router-dom';

// class Menu extends Component {
//   static contextType = MyContext; // using this.context to access global state
//   render() {
//     return (
//       <div className="border-bottom">
//         <div className="float-left">
//         <ul className="menu">
//           <li className="menu"><Link to='/admin/home'>Home</Link></li>
//           <li className="menu"><Link to='/admin/category'>Category</Link></li>
//           <li className="menu"><Link to='/admin/product'>Product</Link></li>
//           <li className="menu"><Link to='/admin/order'>Order</Link></li>
//           <li className="menu"><Link to='/admin/customer'>Customer</Link></li>
//         </ul>
//       </div>
//         <div className="float-right">
//           Hello <b>{this.context.username}</b> |
//           <a href="" onClick={() => this.lnkLogoutClick()}>Logout</a>
//           {/* <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link> */}
//         </div>
//         <div className="float-clear" />
//       </div>
//     );
//   }
//   // event-handlers
//   lnkLogoutClick() {
//     this.context.setToken('');
//     this.context.setUsername('');
//   }
// }
// export default Menu;

import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';
import '../css/menu.css';

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <header className="header">
        <div className='grid'>
          <div className="header-navbar">
            <ul className="menu-left">
              <li className="menu-item"><Link to='/admin/home'>Home</Link></li>
              <li className="menu-item"><Link to='/admin/category'>Category</Link></li>
              <li className="menu-item"><Link to='/admin/product'>Product</Link></li>
              <li className="menu-item"><Link to='/admin/order'>Order</Link></li>
              <li className="menu-item"><Link to='/admin/customer'>Customer</Link></li>
            </ul>
            <ul className="menu-right">
              <li className='menu-right-item mgl28'>Hello <b>{this.context.username}</b></li>
              <li className='white'>|</li>
              <li className='menu-right-item'><a href="/" onClick={() => this.lnkLogoutClick()}>Logout</a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }

  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}

export default Menu;


