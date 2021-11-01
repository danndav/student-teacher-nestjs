import { Controller, Get, Param, Put ,ParseUUIDPipe} from '@nestjs/common';
import {FindTeacherResponseDTO} from "./dto/teacher.dto"
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {

    constructor(private readonly teacherService:TeacherService){

    }

    @Get()
    getTeacher() : FindTeacherResponseDTO[] {
        return this.teacherService.getTeachers()
    }

    @Get("/:teacherId")
    getTeacherById(
        @Param('teacherId', new ParseUUIDPipe()) teacherId:string
    ): FindTeacherResponseDTO {
        return this.teacherService.getTeacherById(teacherId)
    }


}
