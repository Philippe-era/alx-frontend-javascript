export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const learners = listStudents.filter((student) => student.location === city);
  for (const student of learners) {
    student.grade = 'N/A';
  }
  const newLearners = learners.map((student) => {
    const num = student;
    for (const grade of newLearners) {
      if (num.id === grade.studentId) {
        num.grade = grade.grade;
      }
    }
    return num;
  });
  return newLearners;
}
