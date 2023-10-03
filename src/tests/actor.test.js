const request = require('supertest');
const app = require('../app');
const Genre = require('../models/Genre');
require('../models');

let id;

test('GET /actors debe traer todos los artistas', async () => {
  const res = await request(app).get('/actors');
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test('POST /actors debe crear un artista', async () => {
  const artist = {
    firstName: "Michael",
    lastName: "Doe",
    nationality: "United States",
    image: "https://michael.com/image.jpg",
    birthday: "1985-10-10"
  }
  const res = await request(app).post('/actors').send(artist);
  id = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
  expect(res.body.name).toBe(artist.firstName);
});

test('PUT /actors/:id debe actualizar un artista', async () => {
  const artistUpdated = {
    name: "Michael updated"
  }
  const res = await request(app).put(`/actors/${id}`).send(artistUpdated);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(artistUpdated.firstName);
});


// 1. Crear un género
// 2. Ejecutar el endpoint, pasándole el id del género creado
// 3. Eliminar el género
// 4. Expect del status y uno del largo del body
test('POST /actors/:id/genres debe insertar los géneros de un artista', async () => {
  const genre = await Genre.create({ name: "pop" });
  const res = await request(app)
    .post(`/actors/${id}/genres`)
    .send([genre.id]);
  await genre.destroy();
  expect(res.status).toBe(200);
  expect(res.body.length).toBe(1);
});


test('DELETE /actors/:id debe eliminar un artista', async () => {
  const res = await request(app).delete(`/actors/${id}`);
  expect(res.status).toBe(204);
})