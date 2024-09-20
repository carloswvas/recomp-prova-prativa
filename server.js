import { v4 as uuidv4 } from "uuid";
import { createServer } from "node:http";
import { writeFile, readFile } from "node:fs";

const PORT = 3333 || 8080;

const server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ msg: "Olá, Mundo!" }));
});

server.listen(PORT, () => {
  console.log(`Servidor online in http://localhost/${PORT}`);
});
