const request = require('supertest');
const app = require('../app');

let id;

test('GET /movies debe traer todos los movies', async () => {
  const res = await request(app).get('/movies');
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test('POST /movies debe crear un album', async () => {
  const album = {
    name: "Thriller",
    image: 'https://image.jpg',
    synopsis: "jaskldjaslkdjas",
    releaseYear:"1996"
  }
  const res = await request(app).post('/movies').send(album);
  id = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
  expect(res.body.name).toBe(album.name);
});

test('PUT /movies/:id debe actualizar un album', async () => {
  const albumUpdated = { name: "Thriller updated" }
  const res = await request(app).put(`/movies/${id}`).send(albumUpdated);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(albumUpdated.name);
});

test('DELETE /movies/:id debe eliminar un album', async() => {
  const res = await request(app).delete(`/movies/${id}`);
  expect(res.status).toBe(204);
});