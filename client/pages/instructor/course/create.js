import axios from "axios"
import { useState, useEffecte } from "react"
import InstructorRoute from "../../../components/routes/InstructorRoute"

import CourseCreateForm from "../../../components/forms/CourseCreateForm"

const CourseCreate = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    category: "",
    paid: true,
    loading: false,
    imagePreview: "",
  })

  const handelChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handelImage = () => {}
  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center square">Create Course</h1>

      <div className="pt-3 pb-3">
        <CourseCreateForm
          handleSubmit={handelSubmit}
          handelImage={handelImage}
          handelChange={handelChange}
          values={values}
          setValues={setValues}
        />
      </div>
    </InstructorRoute>
  )
}

export default CourseCreate
