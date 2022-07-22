import app from "./app.js";
import { routes } from "./api/routes.js";

app.use(routes);

const PORT = app.get("port");
const server = app.listen(PORT, function () {
  console.log(
    `\n🚀 Server ready at: http://localhost:${this.address().port}\n`
  );
});
