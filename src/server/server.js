/*
 DB 연결 등 서버에 관련된 JS 파일입니다.
*/
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000; // 포트번호 지정
const db = require("./config/db_config.js"); // DB 설정파일

// JSON 형식의 요청 데이터 파싱 설정
app.use(express.json());

// URL-encoded 형식의 요청 데이터 파싱 설정
app.use(express.urlencoded({ extended: true }));

/** [관리자페이지 - 회원관리] 데이터 요청 처리 */
app.post("/ManageMember", (req, res) => {
  const reqTarget = req.body.reqTarget;

  console.log(`관리자 페이지 ${reqTarget} 데이터 요청`);

  db.getConnection((err, conn) => {
    if (err) console.log("MySQL 연결 실패");

    let sql = "";

    if (reqTarget === "Home") {
      sql = "SELECT * FROM reservation";
    } else if (reqTarget === "Member") {
      sql = "SELECT * FROM user";
    } else if (reqTarget === "Resv") {
    } else if (reqTarget === "Car") {
    } else if (reqTarget === "Notice") {
    } else if (reqTarget === "Review") {
    } else {
      console.log("요청을 처리할 수 없습니다.");
    }

    conn.query(sql, (err, rows, fields) => {
      if (err) {
        console.log("쿼리 실행 실패: ", err);
        res.status(500).json({ success: false, message: "쿼리 실행 오류" });
        return;
      }

      if (rows.length > 0) {
        res
          .status(200)
          .json({ success: true, rows, message: `${reqTarget}요청 완료` });
      } else {
        res.status(200).json({
          success: true,
          message: `${reqTarget}요청 실패`,
        });
      }
    });

    conn.release();
  });
});

/** 로그인 요청 처리 */
app.post("/Login", (req, res) => {
  const parId = req.body.id; // 로그인 페이지에서 입력 받은 아이디 받아오기
  const parPw = req.body.password; // 로그인 페이지에서 입력 받은 패스워드 받아오기

  let sql = "";
  if (parId === "admin") {
    sql = `SELECT * FROM admin WHERE admin_id="${parId}"`;
  } else {
    sql = `SELECT u_id,u_pw,u_name FROM user WHERE u_id="${parId}"`;
  }

  db.getConnection((err, conn) => {
    console.log("로그인 요청");
    if (err) {
      console.log("MySQL 연결 실패:", err);
      res.status(500).json({ success: false, message: "MySQL 연결 실패" });
      return;
    }
    console.log("MySQL 연결 성공");

    conn.query(sql, (err, rows, fields) => {
      if (err) {
        console.log("쿼리 실행 실패: ", err);
        res.status(500).json({ success: false, message: "쿼리 실행 오류" });
        return;
      }
      console.log(rows);
      if (rows.length > 0) {
        if (rows[0]["u_pw"] === parPw || rows[0]["admin_pw"] === parPw) {
          console.log("로그인 성공!");
          res.status(200).json({
            success: true,
            u_name: rows[0]["u_name"] || "관리자",
            message: "로그인 성공",
          });
        } else {
          console.log("패스워드 불일치");
          res
            .status(200)
            .json({ success: false, info: "pw", message: "패스워드 불일치" });
        }
      } else {
        console.log("일치하는 사용자 없음");
        console.log(sql);
        res.status(200).json({
          success: false,
          info: "id",
          message: "일치하는 사용자 없음",
        });
      }
    });
    conn.release();
  });
});

/** 회원가입 요청 처리 */
app.post("/Join", (req, res) => {
  const body = req.body;

  const paramName = body.name || req.query.name;
  const paramId = body.id || req.query.id;
  const paramPassword = body.password || req.query.password;
  const paramEmail = body.email || req.query.email;
  const paramPhone = body.phone || req.query.phone;
  const paramAddr1 = body.addr1 || req.query.addr1;
  const paramAddr2 = body.addr2 || req.query.addr2;
  const paramOffice = body.office || req.query.office;
  const paramAddr = paramAddr1 + paramAddr2;

  db.getConnection((err, conn) => {
    console.log("회원가입 요청");
    if (err) {
      console.log("MySQL 연결 실패:", err);
      res.status(500).json({ success: false, message: "MySQL 연결 실패" });
      return;
    }
    console.log("MySQL 연결 성공");

    const sql =
      "INSERT INTO user(u_name, u_id, u_pw, u_phone, u_email, u_addr, u_office) VALUES(?, ?, ?, ?, ?, ?, ?)";
    const params = [
      paramName,
      paramId,
      paramPassword,
      paramPhone,
      paramEmail,
      paramAddr,
      paramOffice,
    ];

    conn.query(sql, params, (err, result, fields) => {
      // console.log('실행쿼리: ' + sql);
      if (err) {
        console.log("쿼리 실행 실패:");
        console.dir(err);
        res.status(500).json({ success: false, message: "쿼리 실행 실패" });
        return;
      }
      if (result) {
        console.log(result);
        console.log("사용자 추가 성공");
        res.status(200).json({ success: true, message: "사용자 추가 성공" });
      } else {
        res.status(500).json({ success: false, message: "사용자 추가 실패" });
      }
    });

    conn.release();
  });
});

/** 아이디 중복 검사 */
app.post("/idChk", (req, res) => {
  console.log("아이디 중복 검사 요청됨");

  let paramId = req.body["ChkId"];
  let sql = `SELECT u_id FROM user WHERE u_id="${paramId}"`;

  db.getConnection((err, conn) => {
    if (err) console.log("MySQL 연결 실패");

    conn.query(sql, (err, rows, fields) => {
      if (err) {
        console.log("쿼리 실행 실패: ", err);
        res.status(500).json({ success: false, message: "쿼리 실행 오류" });
        return;
      }

      if (rows.length > 0) {
        // 입력받은 아이디가 이미 있는 경우
        if (rows[0]["u_id"] === paramId) {
          console.log("중복된 아이디");
          res.status(200).json({
            success: true,
            overlap: false,
            message: "중복된 아이디 입니다.",
          });
        }
      } else {
        // 입력받은 아이디가 DB에 없는 경우
        console.log("사용 가능 아이디");
        res.status(200).json({
          success: true,
          overlap: true,
          message: "사용 가능한 아이디 입니다.",
        });
      }
    });

    conn.release();
  });
});

app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}`);
});
