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
        <input className="border border-platinum rounded" id="name" type="name" name="name" required />
        <label className="mt-5" htmlFor="email">Email:</label>
        <input className="border border-platinum rounded" id="email" type="email" name="email" required />
        <label className="mt-5" htmlFor="message">Message:</label>
        <textarea className="border border-platinum rounded" id="message" name="message"></textarea>
        <button className="transition duration-300 ease-in-out self-end p-3 mt-10 text-white bg-coolBlue hover:bg-goldenrod hover:text-black rounded w-1/4 md:w-1/6 submit-btn" type="submit" disabled={serverState.submitting}>
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