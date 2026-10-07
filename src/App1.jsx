import { useState } from "react"

export default function App1() {
  const [login, setLogin] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [nameError, setNameError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const handleLogin = () => {
    console.log("email", email)
    setEmailError("")
    setPasswordError("")
    if (email === "") {
      setEmailError("email is required")
      return
    }
    if (!email.includes("@gmail.")) {
      setEmailError("Plz enter valid email")
      return
    }

    if (password === "") {
      setPasswordError("password is required")
      return
    }

    if (password.length < 6) {
      setPasswordError("password at least 6")
      return
    }

    alert("Login Successful")
    setEmail("")
    setPassword("")
  }
  const handleSignUp = () => {
    setNameError("")
    setEmailError("")
    setPasswordError("")
    setConfirmPasswordError("")
    if (name === "") {
      setNameError("name is required")
      return
    }
    if (email === "") {
      setEmailError("email is required")
      return
    }
    if (!email.includes("@gmail.")) {
      setEmailError("Plz enter valid email")
      return
    }
    if (password === "") {
      setPasswordError("Enter new password")
      return
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Do not Match")
      return
    }

    if (password.length < 6) {
      setPasswordError("password at least 6")
      return
    }

    alert("sign up succcess")
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }
  return (
    <>
      <div className='w-full min-h-screen bg-gray-300 flex justify-center'>
        <div className="w-[500px] h-[510px] bg-white mt-17 rounded-xl">
          {login ? <><div className="flex justify-center" >
            <h1 className="mt-15 ml-10 text-2xl font-bold">User Login Form</h1>
          </div>
            <div className="">
              <input type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} className="mt-5 w-[400px] h-[40px] bg-gray-200 px-2  ml-12 rounded-xl" />
              {emailError && (
                <p className="text-red-500  mt-2 ml-13">
                  {emailError}
                </p>)}
            </div>

            <div className="">
              <input type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="mt-5 ml-12 w-[400px] h-[40px] bg-gray-200 rounded-xl px-2" />
              {passwordError && (
                <p className="text-red-500 mt-2 ml-13">
                  {passwordError}
                </p>)}
            </div>
            <a href="#" className="flex justify-end mt-2 mr-8">forgot Password</a>
            <div className="mt-3 flex justify-center">
              <button className="text-xl bg-green-400 font-bold text-white cursor-pointer h-[40px] w-[300px] rounded-xl" onClick={(e) => handleLogin(e.target.value)} >Login</button>
            </div>

            <p className="mt-2 text-center">Not A Member? <a href="#" onClick={() => setLogin(false)}>Sign Up</a></p> </> : <><div className="flex justify-center">
              <h1 className="mt-15 ml-10 text-2xl font-bold">Sign Up Form</h1>
            </div>

            <form onSubmit={handleSignUp}>
              <div className="">
                <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className="mt-5 w-[400px] h-[40px] ml-12 bg-gray-200 rounded-xl px-2" />
                {nameError && (
                  <p className="text-red-500 ml-13 mt-2">
                    {nameError} </p>)}
              </div>
              <div className="">
                <input type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} className="mt-5  ml-12 w-[400px] h-[40px] bg-gray-200 rounded-xl px-2" />
                {emailError && (
                  <p className="text-red-500 ml-13 mt-2">
                    {emailError} </p>)}
              </div>
              <div className="">
                <input type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="mt-5 ml-12  w-[400px] h-[40px] bg-gray-200 rounded-xl px-2" />
                {passwordError && (
                  <p className="text-red-500 ml-13 mt-2">
                    {passwordError} </p>)}
              </div>
              <div className="">
                <input type="password" value={confirmPassword} placeholder="Re-Enter Password" onChange={(e) => setConfirmPassword(e.target.value)} className="mt-5  w-[400px] h-[40px] bg-gray-200 ml-12 rounded-xl px-2" />
                {confirmPasswordError && (
                  <p className="text-red-500 mt-2 ml-13">
                    {confirmPasswordError}
                  </p>)}
              </div>
              <div className="justify-center flex">
                <button className="bg-green-400 text-white font-bold w-[300px] mt-5 text-2xl rounded-xl h-[40px] cursor-pointer" type="submit" >Sign Up</button>
              </div>
            </form>
            <p className="mt-2 text-center">Already have a Account ? <a href="#" onClick={() => setLogin(true)}>Login</a></p>
          </>
          }
        </div>
      </div>
    </>
  )
}
