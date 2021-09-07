import { useState } from "react";
import axios from "axios";

function MyForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/mbjqqoaa",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
      <form className="flex flex-col focus:outline-goldenrod" onSubmit={handleOnSubmit}>
        <label className="mt-5" htmlFor="name">Name:</label>
        <input className="border rounded border-platinum" id="name" type="name" name="name" required />
        <label className="mt-5" htmlFor="email">Email:</label>
        <input className="border rounded border-platinum" id="email" type="email" name="email" required />
        <label className="mt-5" htmlFor="message">Message:</label>
        <textarea className="border rounded border-platinum" id="message" name="message"></textarea>
        <button className="self-end w-1/4 p-3 mt-10 text-black rounded md:transition md:duration-200 md:ease-in-out md:hover:text-white md:hover:bg-coolBlue bg-goldenrod md:w-1/6 submit-btn" type="submit" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>

  );
};

export default MyForm;