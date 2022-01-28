import http from "k6/http";
import { check, group } from "k6";

export let options = {
  vus: 1,
};

export default function () {
  group("API uptime check", () => {
    const response = http.get("https://todo-app-barkend.herokuapp.com/todos/");
    check(response, {
      "status code should be 200": (res) => res.status === 200,
    });
  });
}
