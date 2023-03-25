import faker from "faker";

const generateJobs = () =>
  [...Array(50)].map(() => {
    const companyName = faker.company.companyName();
    const requiredSkills = faker.random.arrayElements();
    const jobDescription = faker.lorem.paragraph();
    const reviews = Math.round((Math.random()*10)*100)/100;
    const numApplicants = Math.round((Math.random()*20));
    const email = faker.internet.email();

    return {
      logo: `https://avatars.dicebear.com/api/identicon/${companyName}.svg`,
      companyName,
      requiredSkills,
      jobDescription,
      reviews,
      numApplicants,
      email
    };
  });

export async function get() {
  return {
    body: generateJobs(),
  };
}