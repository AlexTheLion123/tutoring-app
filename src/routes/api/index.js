import faker from "faker";

const generateUsers = () =>
  [...Array(50)].map(() => {
    const lastName = faker.name.lastName();
    const firstName = faker.name.firstName();
    const catchPhrase = faker.company.catchPhrase();
    const skills = faker.random.arrayElements();
    const description = faker.lorem.paragraph();
    const reviews = Math.round((Math.random()*10)*100)/100;
    const email = faker.internet.email();

    return {
      avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`,
      lastName,
      firstName,
      catchPhrase,
      skills,
      description,
      reviews,
      email
    };
  });

export async function get() {
  return {
    body: generateUsers(),
  };
}

