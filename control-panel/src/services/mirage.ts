import { createServer } from "miragejs";

export default function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api";

      this.get("/movies", () => {
        return server.db.movies;
      });

      this.post("/movies", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        return schema.db.movies.insert(attrs)
      })
    },
  });

  server.db.loadData({
    movies: [
      { id: 1, name: "Inception", year: 2010 },
      { id: 2, name: "Interstellar", year: 2014 },
      { id: 3, name: "Dunkirk", year: 2017 },
    ],
  });

  return server;
}
