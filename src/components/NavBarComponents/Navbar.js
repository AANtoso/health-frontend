import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <div className='ui secondary menu'>s
                    <NavLink to='/' className='content'>
                        <Button color='pink'>Home</Button>
                    </NavLink>

                    <NavLink to='/about' className='content'>
                        <Button color='pink'>About</Button>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;