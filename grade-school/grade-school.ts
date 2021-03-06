class GradeSchool {
  private readonly _studentRoster: Map<string, string[]>;
  constructor() {
    this._studentRoster = new Map();
  }

  studentRoster = (): Map<string, string[]> => {
    return this._studentRoster;
  };

  addStudent = (name: string, grade: number): void => {
    for (const [key, studentNames] of this._studentRoster) {
      const studentRosterCheck = studentNames.findIndex(
        (studentName) => studentName === name
      );
      if (studentRosterCheck !== -1) {
        this._studentRoster.get(key)?.splice(studentRosterCheck, 1);
      }
    }

    this._studentRoster.get(grade.toString())
      ? this._studentRoster.get(grade.toString())?.unshift(name)
      : this._studentRoster.set(grade.toString(), [name]);
    const sortedArray = this._studentRoster.get(grade.toString())?.sort();
    this._studentRoster.set(grade.toString(), sortedArray!);
  };

  studentsInGrade = (grade: number): string[] => {
    //why not working ?
    // if (typeof this._studentRoster.get(grade) === "undefined") {
    //   return [];
    // }
    // return this._studentRoster.get(grade);

    const students = this._studentRoster.get(grade.toString());
    if (typeof students === "undefined") {
      return [];
    }
    return students;
  };
}

export default GradeSchool;
