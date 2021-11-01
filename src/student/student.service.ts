import { Injectable } from '@nestjs/common';
import { students } from "../db"
import { v4 as uuid } from 'uuid'
import { CreateStudentDTO, FindStudentResponseDTO, StudentResponseDTO, UpdateStudentDTO } from './dto/student.dto';

@Injectable()
export class StudentService {
    private students = students

    getStudents(): FindStudentResponseDTO[] {
        return this.students
    }

    getStudentById(studentId: string): FindStudentResponseDTO {
        return this.students.find(student => {
            return student.id === studentId
        })
    }

    createStudent(payload: CreateStudentDTO): StudentResponseDTO {
        let newstudent = {
            id: uuid(),
            ...payload
        }

        this.students.push(newstudent);
        return newstudent
    }

    updateStudent(payload: UpdateStudentDTO, studentId: string) {
        let updatedStudent: StudentResponseDTO

        const updatedStudentList = this.students.map(student => {
            if (student.id === studentId) {
                console.log(student.id,studentId)
                updatedStudent = {
                    id: studentId,
                    ...payload
                }
                return updatedStudent

            } else return student;
        })

        this.students = updatedStudentList;
        return updatedStudent
    }

    getStudentsByTeacherId(teacherId: String): FindStudentResponseDTO[] {
        return this.students.filter(student => {
            return student.teacher === teacherId
        })
    }

    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDTO {
        let updatedStudent: StudentResponseDTO

        const updatedStudentList = this.students.map(student => {
            if (student.id === studentId) {
                updatedStudent = {
                    ...student,
                    teacher:teacherId
                }
                return updatedStudent
            } else return student;
        })

        this.students = updatedStudentList;
        return updatedStudent
    }
}

