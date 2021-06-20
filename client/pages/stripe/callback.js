import { useContext, useEffect } from "react"
import { Context } from "../../context/index"
import { SyncOutlined } from "@ant-design/icons"
import axios from "axios"

const StripeCallback = () => {
  const { state, dispatch } = useContext(Context)
  const { user } = state

  useEffect(() => {
    if (user) {
      axios.post("/api/account-status").then((res) => {
        dispatch({
          type: "LOGIN",
          payload: res.data,
        })
        window.localStorage.setItem("user", JSON.stringify(res.data))
        window.location.href = "/instructor"
      })
    }
  }, [user])
  return (
    <>
      <SyncOutlined
        spin
        className="d-flex justify-content-center dispaly-1 text-danger p-5"
      />
    </>
  )
}

export default StripeCallback
