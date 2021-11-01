import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { StudenteacherController } from './student.contoller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    imports:[StudentModule],
    controllers:[TeacherController,StudenteacherController],
    providers:[TeacherService]
})
export class TeacherModule {}
