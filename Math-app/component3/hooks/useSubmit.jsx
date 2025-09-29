import { useState } from "react";

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await wait(2000);
      if (Math.random() < 0.5) throw new Error("Failed");
      setResponse({ type: "success", message: "Form submitted successfully" });
      return true;
    } catch (err) {
      setResponse({ type: "error", message: "Submission failed" });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
