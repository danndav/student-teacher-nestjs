import { Controller, Get, Param, Put, ParseUUIDPipe } from '@nestjs/common';
import { StudentService } from '../student/student.service';
import { FindStudentResponseDTO, StudentResponseDTO } from "../student/dto/student.dto"

@Controller('teachers/:teacherId/students')
export class StudenteacherController {


    constructor(private readonly studentService: StudentService) { }
    @Get()
    getStudents(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string
    ): FindStudentResponseDTO[] {
        return this.studentService.getStudentsByTeacherId(teacherId)
    }

    @Put("/:studentId")
    UpdateStudentsTeacher(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
        @Param('studentId', new ParseUUIDPipe()) studentId: string
    ): StudentResponseDTO {
        return this.studentService.updateStudentTeacher(teacherId, studentId)
    }

}
