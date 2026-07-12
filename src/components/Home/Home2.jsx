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
            I'm a Software Engineer and Computer Science undergraduate with a
            strong passion for building scalable, secure, and production-ready
            web applications. I enjoy solving complex backend challenges and
            transforming ideas into high-quality software.
            <br />
            <br />
            My core programming languages are
            <i>
              <b className="text-[#c770f0]"> C, C++, JavaScript, and TypeScript</b>
            </i>
            , which form the foundation for everything I build.
            <br />
            <br />
            My expertise includes designing
            <i>
              <b className="text-[#c770f0]">
                {" "}
                scalable REST APIs, Authentication & Authorization (JWT/OAuth),
                Redis Caching, Background Jobs with BullMQ, Database Design,
                Prisma ORM, PostgreSQL, MongoDB, React Query, and AI-powered
                application development.
              </b>
            </i>
            <br />
            <br />
            I'm experienced in building
            <i>
              <b className="text-[#c770f0]">
                {" "}
                secure authentication systems, optimized data fetching,
                production-grade backend architectures, automated testing, and
                CI/CD pipelines using GitHub Actions.
              </b>
            </i>
            <br />
            <br />
            My primary focus is
            <i>
              <b className="text-[#c770f0]">
                {" "}
                Backend Engineering, Full-Stack Development, Distributed
                Systems, System Design, Performance Optimization, and AI-driven
                products.
              </b>
            </i>
            <br />
            <br />
            I believe great software is built by combining clean architecture,
            performance, scalability, and an exceptional user experience—and
            that's what I strive to deliver in every project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home2;