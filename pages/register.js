import { useState } from "react"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handelSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <h1 className="jumbotron text-center bg-primary square">Register </h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <button type="submit" className="btn btn-block btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
