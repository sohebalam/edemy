import { useState, useEffect } from "react"
import { Select, Button } from "antd"
import { SaveOutlined } from "@ant-design/icons"

const { Option } = Select
const CourseCreateForm = ({
  handelSubmit,
  handelChange,
  handelImage,
  values,
  setValues,
}) => {
  const children = []
  for (let i = 9.99; i < 100.99; i++) {
    children.push(<Option key={i.toFixed(2)}>£{i.toFixed(2)}</Option>)
  }
  return (
    <>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={values.name}
            onChange={handelChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="7"
            rows="7"
            className="form-control"
            value={values.description}
            onChange={handelChange}
          />
        </div>
        <div className="form-row">
          <div className="col">
            <div className="form-group">
              <Select
                style={{ width: "100%" }}
                size="large"
                value={values.paid}
                onChange={(v) => setValues({ ...values, paid: !values.paid })}
              >
                <Option value={true}>Paid</Option>
                <Option value={false}>Free</Option>
              </Select>
            </div>
          </div>
          {values.paid && (
            <div className="form-group">
              <Select
                defaultValue="9.99"
                style={{ width: "100%" }}
                onChange={(v) => setValues({ ...values, price: v })}
                tokenSeparators={[,]}
                size="large"
              >
                {children}
              </Select>
            </div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="category"
            className="form-control"
            placeholder="Category"
            value={values.category}
            onChange={handelChange}
          />
        </div>
        <div className="form-row">
          <div className="col">
            <div className="form-group">
              <label className="btn btn-outline-secondary btn-block text-left">
                {values.loading ? "Uploading" : "Image Upload"}
                <input
                  type="file"
                  name="image"
                  onChange={handelImage}
                  accept="image/*"
                  hidden
                />
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button
              onClick={handelSubmit}
              disabled={values.loading || values.uploading}
              className="btn btn-primary"
              icon={<SaveOutlined />}
              style={{ width: "100%" }}
              type="primary"
              shape="round"
              //   loading={values.loading}
              size="large"
            >
              {values.loading ? "Saving..." : "Save & Continue"}
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default CourseCreateForm
