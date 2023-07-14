import React from 'react'
import FormComponent from './FormComponent'
import { FormStore } from './FormStore'
import { Provider } from 'react-redux'

function Main() {
  return (
    <div>
        <Provider store = {FormStore} >
          <FormComponent/>
        </Provider>
    </div>
  )
}

export default Main