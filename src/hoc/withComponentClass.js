//convention to name HOCs with capital beginning
import React from 'react'

//alternate way of HOC
//if you're doing it this way, make this and file lowercase.
//this is a function, not a component.
const withComponentClass = (WrappedComponent, classes) => {
  return props => (
    <div className={classes}>
      <WrappedComponent {...props} />
    </div>
  )
}

export default withComponentClass
