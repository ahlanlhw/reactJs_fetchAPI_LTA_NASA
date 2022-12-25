import React,{createRef} from 'react';
import {
  NavLink,
  useLocation,
  useOutlet
} from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import About from '../pages/about';
import Cams from '../pages/cams'
import APOD from '../pages/nasapic'

const routes =[
  {
    path:'/', name:'Home', element: <About/>, nodeRef:createRef()
  },
  { path: '/traffic', name: 'LTA Traffic Cams', element: <Cams />, nodeRef: createRef() 
  },
  { path: '/nasa_apod', name: 'NASA Astronomy Pics of the Day', element: <APOD />, nodeRef: createRef() 
  }
]
function Example() {

    const location = useLocation()
    const currentOutlet = useOutlet()
    const {nodeRef} =
      routes.find((route) => route.path === location.pathname) ?? {}
    return (
      <>
        <Navbar bg="light">
          <Nav className="mx-auto">
            {routes.map((route) => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
        <Container className="container">
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              {(state) => (
                <div ref={nodeRef} className="page">
                  {currentOutlet}
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
        </Container>
      </>
    )
  };

export {Example};
export {routes};