import faker from "faker";

// see faker documnetation: https://fakerjs.dev/guide/

const gen_sessions = () =>
  [...Array(50)].map(() => {
    const student_name = faker.name.findName();
    const requiredSkills = faker.random.arrayElements();
    const jobDescription = faker.lorem.paragraph();
    const reviews = Math.round((Math.random()*10)*100)/100;
    const numApplicants = Math.round((Math.random()*20));
    const email = faker.internet.email();

    return {
      logo: `https://avatars.dicebear.com/api/identicon/${student_name}.svg`,
      student_name,
      requiredSkills,
      jobDescription,
      reviews,
      numApplicants,
      email
    };
  });

export async function get() {
  return {
    body: gen_sessions(),
  };
}