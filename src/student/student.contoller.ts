import { Body, Controller, Get, Param, Post, Put, ParseUUIDPipe } from "@nestjs/common";
import { CreateStudentDTO, UpdateStudentDTO, FindStudentResponseDTO,StudentResponseDTO } from "./dto/student.dto"
import { StudentService } from "./student.service";

@Controller('students')
export class StudentController {

    constructor(private readonly studentService:StudentService){}
    @Get()
    getStudent(): FindStudentResponseDTO[] {
        return this.studentService.getStudents()
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId: string
    ) :FindStudentResponseDTO{
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    CreateStudent(
        @Body() body: CreateStudentDTO
    ):FindStudentResponseDTO {
        return this.studentService.createStudent(body)
    }

    @Put('/:studentId')
    UpdateStudent(
        @Param('studentId', new ParseUUIDPipe()) studentId: string,
        @Body() body: UpdateStudentDTO
    ): StudentResponseDTO{
        return this.studentService.updateStudent(body,studentId)
    }

}