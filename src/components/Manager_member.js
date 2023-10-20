import styles from "../style/Manager_member.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function ManagerMember() {
  const users = [
    {
      id: 1,
      u_name: "홍길동",
      u_id: "gildong11",
      u_phone: "01023456789",
      u_email: "gildong@naver.com",
      u_addr: "서울특별시",
      u_office: "(주)길동",
    },
    {
      id: 2,
      u_name: "홍길동",
      u_id: "gildong11",
      u_phone: "01023456789",
      u_email: "gildong@naver.com",
      u_addr: "서울특별시",
      u_office: "(주)길동",
    },
    {
      id: 3,
      u_name: "홍길동",
      u_id: "gildong11",
      u_phone: "01023456789",
      u_email: "gildong@naver.com",
      u_addr: "서울특별시",
      u_office: "(주)길동",
    },
  ];

  function User({ user }) {
    return (
      <tr>
        <td></td>
        <td>{user.u_name}</td>
        <td>{user.u_id}</td>
        <td>{user.u_name}</td>
        <td>{user.u_phone}</td>
        <td>{user.u_addr}</td>
        <td>{user.u_office}</td>
        <td>
          {/*삭제버튼*/}
          <button>
            <FontAwesomeIcon icon={faXmark} className={styles.faXmark} />
          </button>
        </td>
        <td>
          {/*상세조회버튼*/}
          <button>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.faMagnifyingGlass}
            />
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className={styles.member_wrap}>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>이름</th>
            <th>아이디</th>
            <th>휴대전화</th>
            <th>이메일</th>
            <th>주소</th>
            <th>회사</th>
            <th>삭제</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User user={user} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ManagerMember;
