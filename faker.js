const { faker } = require("@faker-js/faker");

function generatePerson() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(), // random avatar image
    password: faker.internet.password(),
    birthdate: faker.date.birthdate().toISOString(),
    registeredAt: faker.date.past().toISOString(),
  };
}

module.exports = { generatePerson };
