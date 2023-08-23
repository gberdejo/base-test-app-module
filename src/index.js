const { MiFramework } = require("base-project-npm-module-gberdejo");

const framework = new MiFramework({
  databaseUrl: "mongodb://localhost:27017/mi_base_de_datos",
});

const User = framework.User;

User.create({
  username: "Gabriel",
  email: "gabrielberdejo96@gmail.com",
  password: "123",
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
