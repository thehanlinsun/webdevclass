const Header = (props) => {
  return (
    <div>
      <h1> {props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
  <p>
    {props.part} {props.exercises}
  </p>
  )
}

const Total = (props) => {
  return (
  <p>
    {props.exercise1 + props.exercise2 + props.exercise3}
  </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      
      <Header name={course} />
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </div>
  )
}

export default App