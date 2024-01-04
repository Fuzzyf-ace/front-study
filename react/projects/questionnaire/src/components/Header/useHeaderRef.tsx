import { InputRef } from "antd";
import { useState, useRef } from "react";

const useHeaderRef = () => {
  const [onEditing, setOnEditing] = useState(false);
  const titleInputRef = useRef<InputRef>(null);
  return { onEditing, setOnEditing, titleInputRef };
};

export default useHeaderRef;
