import React, { Fragment, useEffect } from 'react'
//import styled from 'styled-components';
import classes from './Cockpit.module.css'

const Cockpit = props => {
  useEffect(() => {
    console.log('[cockpit.js] useeffect happened')
    const timer = setTimeout(() => {
      console.log('[cockpit.js] got data')
    }, 1000)
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
      <button className={btnClass.join(' ')} onClick={props.showPersonsHandler}>
        Toggle Persons
      </button>
      <p className={assignedClasses.join(' ')}>now it's really working!</p>
    </Fragment>
  )
}

// replacement for shouldComponentUpdate
// when the parent updates, does this need to update?
// Then don't.
export default React.memo(Cockpit)
