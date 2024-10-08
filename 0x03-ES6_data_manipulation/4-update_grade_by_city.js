export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents
    .map((student) => {
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: foundGrade ? foundGrade.grade : 'N/A',
      };
    });
}
