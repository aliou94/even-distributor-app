import React from "react"
import Login from "./Login";
import {render, fireEvent, cleanup,screen,act} from '@testing-library/react';



afterEach(cleanup)

describe('Presence of two input fields and a button',()=>{
   test('renders an input field for email',()=>{
       render(<input type='text' placeholder='Email'/>)
       screen.debug()
   })
    test('renders an input field for password',()=>{
        render(<input type='password' placeholder='Password'/>)
        screen.debug()
    })
    test('renders a button',()=>{
        render(<button/>)
        screen.debug();
    })

})

describe('Login',()=>{
    test('renders Login com', ()=>{
        render(<Login/>);
       fireEvent.change(screen.getByRole('button'),{
           target:{value:'mozar'},
       });

        fireEvent.change(screen.getByPlaceholderText('Email'),{
            target:{value:'power'},
        });
        screen.debug()
    })

})


it('DOM is updated upon a click ', () => {

    const { container, getByText } = render(<Login/>);

    expect(getByText(/The credential entered is invalid try again or /i).textContent).toBe(null)

    fireEvent.click(getByText("login"))

    expect(getByText(/The credential entered is invalid try again or /i).textContent).toBe('The credentials')
})

