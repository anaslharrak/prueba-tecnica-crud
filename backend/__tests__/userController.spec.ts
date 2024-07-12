import supertest from "supertest";
import { app, server } from "../server";
import mongoose from "mongoose";
import User from "../schemas/userSchema";
import { initialUsers } from "../test-utils/userMock";

const api = supertest(app);


  beforeAll(async () => {
    await User.deleteMany({});
    await Promise.all(initialUsers.map(user => new User(user).save()));
  });

  afterAll(async () => {
    server.close();
    mongoose.connection.close();
  });

  describe('API Integration Tests', () => {
  test('GET /api/users - success', async () => {
    const result = await api.get('/api/users');

    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeInstanceOf(Object);
  });

  test("get all users from GET /api/users", async () => {
    const response = await api.get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body.users).toHaveLength(initialUsers.length);
  });

  test("get one user from GET /api/user/:id", async () => {
    const user = initialUsers[0];
    const response = await api.get(`/api/user/${user._id}`);
    expect(response.status).toBe(200);
    expect(response.body.user).toEqual(user);
  });

  test("get one user from GET /api/user/:id - not found", async () => {
    const response = await api.get(`/api/user/123`);
    expect(response.status).toBe(404);
  });

  test("create a user from POST /api/user", async () => {
    const newUser = {
      name: "New",
      surname: "User",
      email: "new.user@example.com",
      address: {
        city: "Anytown",
        country: "Anyland",
      },
      genre: 'Other',
      birthDate: new Date('1999-01-01').toISOString(),
      creationDate: new Date().toISOString(),
      __v: 0,
    };
    let response = await api.post("/api/user").send(newUser);
    expect(response.status).toBe(201);
    expect(response.body.user).toMatchObject(newUser);
    const _id = response.body.user._id;
    response = await api.get(`/api/user/${_id}`);
    expect(response.status).toBe(200);
  });

  test("update a user from PUT /api/user/:id", async () => {
    const user = initialUsers[0];
    const updatedUser = {
      ...user,
      name: "Updated",
      surname: "User",
      email: "updated.user@example.com",
    };

    const response = await api.put(`/api/user/${user._id}`).send(updatedUser);
    expect(response.status).toBe(200);
    expect(response.body.user).toMatchObject(updatedUser);
  });

  test("update a user from PUT /api/user/:id - not found", async () => {
    const response = await api.put(`/api/user/123`).send({});
    expect(response.status).toBe(404);
  });

  test("delete a user from DELETE /api/user/:id", async () => {
    const user = initialUsers[0];
    let response = await api.delete(`/api/user/${user._id}`);
    expect(response.status).toBe(200);
    response = await api.get(`/api/user/${user._id}`);
    expect(response.status).toBe(404);
  });

  test("delete a user from DELETE /api/user/:id - not found", async () => {
    const response = await api.delete(`/api/user/123`);
    expect(response.status).toBe(404);
  });

});


