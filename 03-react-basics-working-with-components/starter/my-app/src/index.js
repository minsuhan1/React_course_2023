import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// ReactDOM.createRoot : React를 사용하여 구축할 전체 ui의 메인 엔트리 포인트 또는 엔트리 훅 생성
const root = ReactDOM.createRoot(document.getElementById("root"));
// React로 만든 ui가 웹페이지에 로딩될 위치
root.render(<App />);
