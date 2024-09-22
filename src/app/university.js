const universities = {
  "IP University": {
    "B.Tech CSE": {
      "Semester 1": [
        "Mathematics-I",
        "Physics-I",
        "Chemistry",
        "Introduction to Programming",
        "Engineering Graphics",
      ],
      "Semester 2": [
        "Mathematics-II",
        "Physics-II",
        "Basic Electrical Engineering",
        "Data Structures",
        "Workshop Practice",
      ],
      "Semester 3": [
        "Discrete Mathematics",
        "Digital Logic Design",
        "Data Structures",
        "Database Management Systems",
        "Computer Organization",
      ],
      "Semester 4": [
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Design and Analysis of Algorithms",
        "Microprocessors",
      ],
      "Semester 5": [
        "Theory of Computation",
        "Compiler Design",
        "Artificial Intelligence",
        "Web Technology",
        "Machine Learning",
      ],
      "Semester 6": [
        "Distributed Systems",
        "Cloud Computing",
        "Information Security",
        "Data Mining",
        "Mobile Computing",
      ],
      "Semester 7": [
        "Project Management",
        "Big Data Analytics",
        "Cyber Security",
        "Internet of Things",
        "Elective-I",
      ],
      "Semester 8": [
        "Elective-II",
        "Elective-III",
        "Major Project",
        "Internship",
        "Seminar",
      ],
    },
    BBA: {
      "Semester 1": [
        "Fundamentals of Management",
        "Business Economics",
        "Business Mathematics",
        "Financial Accounting",
        "Computer Applications",
      ],
      "Semester 2": [
        "Organizational Behavior",
        "Business Communication",
        "Statistics for Business",
        "Marketing Management",
        "Cost Accounting",
      ],
      "Semester 3": [
        "Human Resource Management",
        "Business Law",
        "Financial Management",
        "Operations Management",
        "Research Methodology",
      ],
      "Semester 4": [
        "International Business",
        "Business Environment",
        "Information Systems Management",
        "Entrepreneurship Development",
        "Management Accounting",
      ],
      "Semester 5": [
        "Strategic Management",
        "Operations Research",
        "Consumer Behavior",
        "Sales and Distribution Management",
        "Industrial Relations",
      ],
      "Semester 6": [
        "Project Management",
        "Service Marketing",
        "Corporate Governance",
        "Business Ethics",
        "Elective",
      ],
    },
    BCA: {
      "Semester 1": [
        "Mathematics-I",
        "Introduction to Programming",
        "Digital Electronics",
        "Computer Fundamentals",
        "Communicative English",
      ],
      "Semester 2": [
        "Mathematics-II",
        "Data Structures",
        "Database Management Systems",
        "Operating Systems",
        "Discrete Mathematics",
      ],
      "Semester 3": [
        "Object-Oriented Programming",
        "Computer Networks",
        "Software Engineering",
        "Web Technology",
        "Microprocessors",
      ],
      "Semester 4": [
        "Design and Analysis of Algorithms",
        "Data Mining",
        "Computer Graphics",
        "Artificial Intelligence",
        "Cloud Computing",
      ],
      "Semester 5": [
        "Mobile Computing",
        "Big Data Analytics",
        "Internet of Things",
        "Cyber Security",
        "Elective-I",
      ],
      "Semester 6": [
        "Project",
        "Internship",
        "Elective-II",
        "Elective-III",
        "Seminar",
      ],
    },
    BJMC: {
      "Semester 1": [
        "Introduction to Journalism",
        "Media Laws and Ethics",
        "Communication Skills",
        "Print Journalism",
        "Computer Applications",
      ],
      "Semester 2": [
        "Reporting and Editing",
        "Radio Journalism",
        "Advertising and Public Relations",
        "Media Management",
        "Development Communication",
      ],
      "Semester 3": [
        "Television Journalism",
        "Digital Media",
        "Photojournalism",
        "Media Research",
        "Film Studies",
      ],
      "Semester 4": [
        "Media Production",
        "Event Management",
        "Political Communication",
        "Sports Journalism",
        "Business Journalism",
      ],
      "Semester 5": [
        "Environmental Communication",
        "Science Journalism",
        "Investigative Journalism",
        "Crime Journalism",
        "Elective-I",
      ],
      "Semester 6": [
        "Internship",
        "Project Work",
        "Elective-II",
        "Elective-III",
        "Seminar",
      ],
    },
    BALLB: {
      "Semester 1": [
        "Legal Methods",
        "Law of Torts",
        "English-I",
        "Political Science-I",
        "Sociology-I",
      ],
      "Semester 2": [
        "Law of Contracts",
        "Constitutional Law-I",
        "English-II",
        "Political Science-II",
        "Sociology-II",
      ],
      "Semester 3": [
        "Family Law-I",
        "Constitutional Law-II",
        "Environmental Law",
        "Criminal Law-I",
        "Economics-I",
      ],
      "Semester 4": [
        "Family Law-II",
        "Property Law",
        "Administrative Law",
        "Criminal Law-II",
        "Economics-II",
      ],
      "Semester 5": [
        "Labour Law",
        "Corporate Law",
        "Public International Law",
        "Human Rights Law",
        "Intellectual Property Rights",
      ],
      "Semester 6": [
        "Civil Procedure Code",
        "Criminal Procedure Code",
        "Law of Evidence",
        "Arbitration and Conciliation",
        "Company Law",
      ],
      "Semester 7": [
        "Banking Law",
        "Insurance Law",
        "Competition Law",
        "Taxation Law",
        "Elective-I",
      ],
      "Semester 8": [
        "Land Laws",
        "Investment Law",
        "Law and Medicine",
        "Media Law",
        "Elective-II",
      ],
      "Semester 9": [
        "Practical Training-I",
        "Practical Training-II",
        "Elective-III",
        "Elective-IV",
        "Internship",
      ],
      "Semester 10": [
        "Dissertation",
        "Practical Training-III",
        "Elective-V",
        "Elective-VI",
        "Seminar",
      ],
    },
    BAA: {
      "Semester 1": [
        "Introduction to Visual Arts",
        "Drawing-I",
        "Painting-I",
        "Sculpture-I",
        "Art History-I",
      ],
      "Semester 2": [
        "Intermediate Visual Arts",
        "Drawing-II",
        "Painting-II",
        "Sculpture-II",
        "Art History-II",
      ],
      "Semester 3": [
        "Advanced Visual Arts",
        "Drawing-III",
        "Painting-III",
        "Sculpture-III",
        "Art Criticism",
      ],
      "Semester 4": [
        "Professional Practices",
        "Drawing-IV",
        "Painting-IV",
        "Sculpture-IV",
        "Art Conservation",
      ],
      "Semester 5": [
        "Contemporary Art",
        "Mixed Media",
        "Installation Art",
        "Performance Art",
        "Art Management",
      ],
      "Semester 6": [
        "Internship",
        "Exhibition Design",
        "Portfolio Development",
        "Art Education",
        "Final Project",
      ],
    },
  },
  AKTU: {
    "B.Tech CSE": {
      "Semester 1": [
        "Mathematics-I",
        "Engineering Chemistry",
        "Basic Electrical Engineering",
        "Programming for Problem Solving",
        "Workshop/Manufacturing Practices",
      ],
      "Semester 2": [
        "Mathematics-II",
        "Engineering Physics",
        "Engineering Graphics & Design",
        "Data Structures",
        "Environmental Science",
      ],
      "Semester 3": [
        "Discrete Mathematics",
        "Digital Logic Design",
        "Data Structures",
        "Database Management Systems",
        "Computer Organization",
      ],
      "Semester 4": [
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Design and Analysis of Algorithms",
        "Microprocessors",
      ],
      "Semester 5": [
        "Theory of Computation",
        "Compiler Design",
        "Artificial Intelligence",
        "Web Technology",
        "Machine Learning",
      ],
      "Semester 6": [
        "Distributed Systems",
        "Cloud Computing",
        "Information Security",
        "Data Mining",
        "Mobile Computing",
      ],
      "Semester 7": [
        "Project Management",
        "Big Data Analytics",
        "Cyber Security",
        "Internet of Things",
        "Elective-I",
      ],
      "Semester 8": [
        "Elective-II",
        "Elective-III",
        "Major Project",
        "Internship",
        "Seminar",
      ],
    },
    MBA: {
      "Semester 1": [
        "Management Concepts & Organizational Behavior",
        "Managerial Economics",
        "Financial Accounting",
        "Business Statistics",
        "Business Communication",
      ],
      "Semester 2": [
        "Marketing Management",
        "Financial Management",
        "Human Resource Management",
        "Operations Research",
        "Research Methodology",
      ],
      "Semester 3": [
        "Strategic Management",
        "International Business",
        "Consumer Behavior",
        "Sales and Distribution Management",
        "Project Management",
      ],
      "Semester 4": [
        "Entrepreneurship Development",
        "Service Marketing",
        "Corporate Governance",
        "Business Ethics",
        "Elective",
      ],
    },
    BCA: {
      "Semester 1": [
        "Mathematics-I",
        "Introduction to Programming",
        "Digital Electronics",
        "Computer Fundamentals",
        "Communicative English",
      ],
      "Semester 2": [
        "Mathematics-II",
        "Data Structures",
        "Database Management Systems",
        "Operating Systems",
        "Discrete Mathematics",
      ],
      "Semester 3": [
        "Object-Oriented Programming",
        "Computer Networks",
        "Software Engineering",
        "Web Technology",
        "Microprocessors",
      ],
      "Semester 4": [
        "Design and Analysis of Algorithms",
        "Data Mining",
        "Computer Graphics",
        "Artificial Intelligence",
        "Cloud Computing",
      ],
      "Semester 5": [
        "Mobile Computing",
        "Big Data Analytics",
        "Internet of Things",
        "Cyber Security",
        "Elective-I",
      ],
      "Semester 6": [
        "Project",
        "Internship",
        "Elective-II",
        "Elective-III",
        "Seminar",
      ],
    },
    BJMC: {
      "Semester 1": [
        "Introduction to Journalism",
        "Media Laws and Ethics",
        "Communication Skills",
        "Print Journalism",
        "Computer Applications",
      ],
      "Semester 2": [
        "Reporting and Editing",
        "Radio Journalism",
        "Advertising and Public Relations",
        "Media Management",
        "Development Communication",
      ],
      "Semester 3": [
        "Television Journalism",
        "Digital Media",
        "Photojournalism",
        "Media Research",
        "Film Studies",
      ],
      "Semester 4": [
        "Media Production",
        "Event Management",
        "Political Communication",
        "Sports Journalism",
        "Business Journalism",
      ],
      "Semester 5": [
        "Environmental Communication",
        "Science Journalism",
        "Investigative Journalism",
        "Crime Journalism",
        "Elective-I",
      ],
      "Semester 6": [
        "Internship",
        "Project Work",
        "Elective-II",
        "Elective-III",
        "Seminar",
      ],
    },
    BALLB: {
      "Semester 1": [
        "Legal Methods",
        "Law of Torts",
        "English-I",
        "Political Science-I",
        "Sociology-I",
      ],
      "Semester 2": [
        "Law of Contracts",
        "Constitutional Law-I",
        "English-II",
        "Political Science-II",
        "Sociology-II",
      ],
      "Semester 3": [
        "Family Law-I",
        "Constitutional Law-II",
        "Environmental Law",
        "Criminal Law-I",
        "Economics-I",
      ],
      "Semester 4": [
        "Family Law-II",
        "Property Law",
        "Administrative Law",
        "Criminal Law-II",
        "Economics-II",
      ],
      "Semester 5": [
        "Labour Law",
        "Corporate Law",
        "Public International Law",
        "Human Rights Law",
        "Intellectual Property Rights",
      ],
      "Semester 6": [
        "Civil Procedure Code",
        "Criminal Procedure Code",
        "Law of Evidence",
        "Arbitration and Conciliation",
        "Company Law",
      ],
      "Semester 7": [
        "Banking Law",
        "Insurance Law",
        "Competition Law",
        "Taxation Law",
        "Elective-I",
      ],
      "Semester 8": [
        "Land Laws",
        "Investment Law",
        "Law and Medicine",
        "Media Law",
        "Elective-II",
      ],
      "Semester 9": [
        "Practical Training-I",
        "Practical Training-II",
        "Elective-III",
        "Elective-IV",
        "Internship",
      ],
      "Semester 10": [
        "Dissertation",
        "Practical Training-III",
        "Elective-V",
        "Elective-VI",
        "Seminar",
      ],
    },
  },
};
export default universities;
