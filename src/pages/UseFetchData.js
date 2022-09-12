import { useEffect, useState } from "react";

export const UseFetchData = (url) => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((err) => console.log(err));
  }, [url]);
  return response;
};
