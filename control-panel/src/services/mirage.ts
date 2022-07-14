import { createServer } from "miragejs";
import { nanoid } from "nanoid";

export default function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api";

      this.get("/movies", () => {
        return server.db.movies;
      });

      this.post("/movies", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        if (attrs.id == 0) {
          attrs.id = nanoid()
          return schema.db.movies.insert(attrs);
        } else {
          return schema.db.movies.update(attrs);
        }
      });
    },
  });

  server.db.loadData({
    movies: [
      { id: nanoid(), name: "Inception", year: 2010 },
      { id: nanoid(), name: "Interstellar", year: 2014 },
      { id: nanoid(), name: "Dunkirk", year: 2017 },
    ],
  });

  return server;
}
