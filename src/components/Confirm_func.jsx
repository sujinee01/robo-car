import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../style/Confirm_func.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConfirmFunc = (action) => {
  confirmAlert({
    title: "경고", // 다이얼로그 제목
    message: "이 작업을 계속하시겠습니까?", // 메시지 내용
    buttons: [
      {
        label: "삭제", // "예" 버튼
        onClick: async () => {
          // "예"를 클릭했을 때 실행할 동작을 여기에 추가
          console.log("예를 클릭했습니다");
          const chk = await action();

          if (chk !== true) {
            toast.success("삭제가 완료되었습니다.", {
              theme: "colored",
            });
          }
          // action();
          // toast.success("삭제가 완료되었습니다.", {
          //   theme: "colored",
          // });
        },
      },
      {
        label: "돌아가기", // "아니오" 버튼
        onClick: () => {
          // "아니오"를 클릭했을 때 실행할 동작을 여기에 추가
          console.log("아니오를 클릭했습니다");
        },
      },
    ],
  });
};

export default ConfirmFunc;
