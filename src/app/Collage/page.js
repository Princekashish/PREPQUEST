// import React from "react";
// import collagelist from "../collagedb";
// import Image from "next/image";
// import Link from "next/link";

// export default function Collage() {
//   return (
//     // <div className="lg:h-[70vh] flex items-center lg:justify-around">
//     //   <div className="lg:block hidden justify-center lg:h-[50vh] items-center">
//     //     <video
//     //       src="/Image/vdo.mp4"
//     //       autoPlay
//     //       loop
//     //       muted
//     //       className="w-full h-[100%] max-w-md object-cover rounded-t-full pointer-events-none"
//     //     >
//     //       Your browser does not support the video tag.
//     //     </video>
//     //   </div>

//     //   <div>
//     //     <h1 className="lg:text-3xl lg:tracking-wider lg:font-semibold">
//     //       Find Your Collage
//     //     </h1>
//     //     <div className="lg:flex lg:items-center lg:gap-10 lg:mt-10">
//     //       {collagelist.map((item) => (
//     //         <div key={item.id} className="my-2">
//     //           <Link href={`/collage/${item.name}`}>
//     //             <Image
//     //               src={item.image}
//     //               alt={item.name}
//     //               width={140}
//     //               height={140}
//     //               className="object-cover cursor-pointer"
//     //             />
//     //           </Link>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </div>
//     <div>

//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import universities from "../university";

export default function Collage() {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedPaperType, setSelectedPaperType] = useState("");

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
    setSelectedCourse("");
    setSelectedSemester("");
    setSelectedSubject("");
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedSemester("");
    setSelectedSubject("");
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setSelectedSubject("");
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };
  const handlePaperTypeChange = (e) => {
    setSelectedPaperType(e.target.value);
  };

  return (
    <div className="lg:h-[70vh] ">
      <div className="flex space-x-4 lg:justify-center items-center lg:mt-9">
        <select
          value={selectedUniversity}
          onChange={handleUniversityChange}
          className=" p-2 rounded-2xl shadow-md outline-none  "
        >
          <option value="" disabled>
            University
          </option>
          {Object.keys(universities).map((university) => (
            <option key={university} value={university}>
              {university}
            </option>
          ))}
        </select>

        <select
          value={selectedCourse}
          onChange={handleCourseChange}
          className=" p-2 rounded-2xl shadow-md outline-none"
          disabled={!selectedUniversity}
        >
          <option value="" disabled>
            Course
          </option>
          {selectedUniversity &&
            Object.keys(universities[selectedUniversity]).map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
        </select>

        <select
          value={selectedSemester}
          onChange={handleSemesterChange}
          className=" p-2 rounded-2xl shadow-md outline-none"
          disabled={!selectedCourse}
        >
          <option value="" disabled>
            Semester
          </option>
          {selectedCourse &&
            Object.keys(universities[selectedUniversity][selectedCourse]).map(
              (semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              )
            )}
        </select>

        <select
          value={selectedSubject}
          onChange={handleSubjectChange}
          className=" p-2 rounded-2xl shadow-md outline-none"
          disabled={!selectedSemester}
        >
          <option value="" disabled>
            Subject
          </option>
          {selectedSemester &&
            universities[selectedUniversity][selectedCourse][
              selectedSemester
            ].map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
        </select>
        <select
          value={selectedPaperType}
          onChange={handlePaperTypeChange}
          className="p-2 rounded-2xl shadow-md outline-none"
          disabled={!selectedSubject}
        >
          <option value="" disabled>
            Paper Type
          </option>
          <option value="external">External Question Papers</option>
        </select>
      </div>
    </div>
  );
}
