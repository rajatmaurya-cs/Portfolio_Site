import React from "react";

function Home2() {
  return (
    <div className="relative py-[70px]" id="about">
      <div className="mx-auto max-w-4xl px-4">
        <div className="pb-5 pt-[100px] text-center text-white">
          <h1 className="text-[2.6em]">
            LET ME <span className="text-[#c770f0]">INTRODUCE</span> MYSELF
          </h1>

          <p className="pt-[50px] text-left text-[1.2em]">
            I'm a passionate Software Engineer and Computer Science
            undergraduate who enjoys building scalable, high-performance web
            applications and solving real-world problems.
            <br />
            <br />
            My core tech stack includes
            <i>
              <b className="text-[#c770f0]">
                {" "}
                Next.js, TypeScript, React.js, Node.js, Express.js, MongoDB, Prisma, PostgreSql,
                Redis, JavaScript, Tailwind CSS, React Query, REST APIs, and
                caching strategies.
              </b>
            </i>
            <br />
            <br />
            I'm particularly interested in
            <i>
              <b className="text-[#c770f0]">
                {" "}
                Full-Stack Development, Backend Engineering, System Design, and
                AI-powered applications.
              </b>
            </i>
            <br />
            <br />
            I enjoy turning ideas into impactful products while continuously
            improving my software engineering and computer science skills.
            <br />
            <br />
            Whenever possible, I love building products with
            <b className="text-[#c770f0]"> Next.js, TypeScript, Node.js </b>
            and modern React technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home2;