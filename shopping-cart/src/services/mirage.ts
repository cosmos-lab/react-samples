import { createServer } from "miragejs";

export default function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api";

      this.get("/movies", () => {
        return [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ];
      });
    },
  });

  return server;
}
