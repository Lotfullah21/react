import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";
const action = async ({ request }) => {
  // get the data that we send using name attributes in beautiful format, the data will be in array format
  const formData = await request.formData();
  // to send data, we are converting the to object (property-value)
  const data = Object.fromEntries(formData);

  try {
    // post the data to the mentioned url
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response.data.msg);
  }
};
const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4
        style={{
          textTransform: "capitalize",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        our newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-input"
          id="name"
          defaultValue="john"
        ></input>
      </div>
      {/* last name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="lastName"
          className="form-input"
          id="name"
          defaultValue="smith"
        ></input>
      </div>
      {/*  email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          name="email"
          className="form-input"
          id="email"
          defaultValue="test@test.com"
        ></input>
      </div>
      <button className="btn btn-submit" disabled={isSubmitting}>
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};

export { action };
export default NewsLetter;
