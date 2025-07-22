import React from "react";

function About() {
  return (
    <div className="text-gray-800 text-left">
      <section className="mb-8">
        <h3 className="text-2xl mb-4">Project Overview</h3>
        <p className="leading-relaxed">
          Routine Scrapper is a web application specifically developed for the
          students, faculty, and staff of City University. It automatically
          collects and organizes class routines from the university’s official
          sources and presents them in a clean and accessible format. No more
          manual searching or confusion — find your latest class schedules in
          just a few clicks.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl mb-4">Our Mission</h3>
        <p className="leading-relaxed">
          Our goal is to make routine management at City University simple,
          fast, and reliable. By automating the process of routine collection,
          we hope to save valuable time for students and faculty, allowing them
          to focus on learning and teaching rather than administrative tasks.
        </p>
      </section>

      <section>
        <h3 className="text-2xl mb-6">Our Team Members</h3>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-2/3 w-full border rounded-lg p-4 shadow-md">
            <h4 className="text-xl">Md. Masum Hossain</h4>
            <p className="mb-3">Full Stack Web Developer</p>
            <p>
              I am a passionate and detail-oriented Full Stack Web Developer
              with hands-on experience in building modern, responsive, and
              dynamic web applications. My skill set includes: Frontend: HTML,
              CSS, JavaScript, React, Bootstrap 5, Tailwind CSS, Next.js.
              Backend: Express.js, Node.js. Database: MongoDB. I enjoy turning
              complex problems into simple, user-friendly solutions. From
              creating clean and accessible user interfaces to developing robust
              backend systems, I am committed to delivering high-quality web
              applications. I love learning new technologies and continuously
              improving my skills to stay updated with the latest trends in web
              development.
            </p>
          </div>
          <div className="md:w-1/3 w-full">
            <img
              src="../../public/masum.png"
              alt="Md. Masum Hossain"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
