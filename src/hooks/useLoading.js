import { useState } from "react";

export const useLoading = (init = false) => {
  const [loading, setLoading] = useState(init);
  const stopLoading = () => setLoading(false);
  const startLoading = () => setLoading(true);
  return { loading, stopLoading, startLoading };
};
