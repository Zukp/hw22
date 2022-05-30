import {useReducer} from 'react'

const reducer = (state,action) => {
  if(action.type === "POST"){
    return {
      ...state,  
      value:action.entredValue,
    }
  }
  if(action.type === 'NONO'){
    return {
      ...state,
      isTouched:true,
    }
  }
}

const useInput = (validateState) => {
const [state,dispatch] = useReducer(reducer, {
  value:"",
  isTouched:false,
})


  const valueIsValid = validateState(state.value)
  const hasError = !valueIsValid && state.isTouched

  const valueChangeHandler = (event) => {
    dispatch({type:"POST",entredValue:event.target.value})
  }
  
  const inputBlurHandler = (event) => {
      dispatch({type:'NONO',isTouched:false})
  } 
  return {
      value:state.value,
      isValid:valueIsValid,
      hasError,
      valueChangeHandler,
      inputBlurHandler,
  }
};
export default useInput
  