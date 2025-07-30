import { useState } from "react";

import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/700.css";
import "./App.css";
import Label from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";

function App() {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        value={""}
        id="email"
        onChange={() => {}}
        isError={isError}
        errorMessage="이메일을 입력해주세요."
        iconPath="/icons/ic-delete-dark.svg"
        iconAlt="이메일 아이콘"
        onIconClick={() => {}}
        placeholder="이메일을 입력해주세요."
      />
      <div className="mt-4"></div>

      <Label htmlFor="address">주소</Label>
      <DefaultTextField
        value={""}
        id="address"
        onChange={() => {}}
        isError={isError}
        errorMessage="주소를 입력해주세요."
        iconPath="/icons/ic-delete-dark.svg"
        iconAlt="주소 아이콘"
        onIconClick={() => {}}
        placeholder="주소를 입력해주세요."
      />

      <button onClick={() => setIsError((prev) => !prev)}>테스트</button>
    </>
  );
}

export default App;
