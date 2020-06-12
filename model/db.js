// 시퀄라이즈 설정만 있는 변수
let Sequelize = require("sequelize");

// 시퀄라이즈를 직접 사용하게끔 해주는 변수
let sequelize;

sequelize = new Sequelize("angryboodb", "angryboo", "qndyd1234!!", {
  host: "angryboodb.ciwnrimlkl3i.ap-northeast-2.rds.amazonaws.com",
  dialect: "mysql",
  port: 3306,
  operatorsAliases: false,
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps: true,
  },
});

// let db = {};

// db.user = sequelize.import(__dirname, "/users.js");

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

var db = {};
db.users = sequelize.import(__dirname + "/users.js");
//객체식으로 데이터베이스 테이블을 구성하고, 직접 해당 테이블에 접속을 할 수 있습니다
//따라서 이런 ORM 방식을 통해, 직접 쿼리를 날리지 않아도 테이블 정보가 담긴 객체를 이용하여
//데이터 조회,생성,변경,삭제를 할 수 있습니다.
// db.places = sequelize.import(__dirname + "/model/mode_name.js");

//추후에 연결된 sequelize 객체를 통해, 직접적으로 데이터베이스에 쿼리도 날릴 수 있습니다
//그래서 앞으로 우리가 사용할 db 객체에 sequelize 객체와 바로 위에서 만든 모델들을 채워 넣습니다.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
