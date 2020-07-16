import React, { Fragment, useEffect, useRef, useContext } from 'react'
//import styled from 'styled-components';
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = props => {
  const toggleBtnRef = useRef(null)
  const authContext = useContext(AuthContext)

  //useEffect runs after every render cycle
  useEffect(() => {
    console.log('[cockpit.js] useeffect happened')
    const timer = setTimeout(() => {
      console.log('[cockpit.js] got data')
    }, 1000)
    toggleBtnRef.current.click()
    // runs when component gets destoyed if you have the [] argument
    // replaces componentWillUnmount
    return () => {
      console.log('[cockpit.js] cleanup work gets done')
      clearTimeout(timer)
    }
  }, []) // props.persons

  // cleanup will happen every render
  useEffect(() => {
    console.log('[cockpit.js] 2nd useeffect')
    return () => {
      console.log('[cockpit.js] 2nd useeffect cleanup')
    }
  })

  const assignedClasses = []
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.Red)
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }

  const btnClass = [classes.Button]
  if (props.showPersons) {
    btnClass.push(classes.red)
  } else {
    btnClass.push(classes.green)
  }

  return (
    <Fragment>
      <h1>{props.title}</h1>
      <button
        ref={toggleBtnRef}
        className={btnClass.join(' ')}
        onClick={props.showPersonsHandler}
      >
        Toggle Persons
      </button>
      {/* <AuthContext.Consumer>
        {context => <button onClick={context.loginMethod}>Log In</button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.loginMethod}>Log In</button>
      <p className={assignedClasses.join(' ')}>now it's really working!</p>
    </Fragment>
  )
}

// replacement for shouldComponentUpdate
// don't use if when the parent updates, this need to update
export default React.memo(Cockpit)
