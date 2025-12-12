import { Rate } from "antd";
import React, { useState } from "react";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  return <Rate onChange={setValue} value={value} />;
}
