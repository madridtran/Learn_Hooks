import { useRef, useReducer } from 'react'
import reducer, {initState} from './reducer'
import {setJob, addJob, deleteJob} from './actions'
import logger from './logger';
// useState
// 1. Init state : 0
// 2. Actions: Up (state + 1) / Down (state-1)

// useReducer
// 1. Init state : 0
// 2. Actions: Up (state + 1) / Down (state-1)
// 3. Reducer
// 4. Dispatch

function App() {
  const inputEl = useRef(null);
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const { job, jobs } = state

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputEl.current.focus();
  }
  return (
    <div className="App" style={{ padding: '0px 32px' }}>
      <h3>Todo</h3>
      <input
        value={job}
        ref={inputEl}
        placeholder="Enter Todo..."
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;