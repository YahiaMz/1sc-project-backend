import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { ModuleModule } from './module/module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './teacher/teacher.entity';
import { Admin } from './admin/admin.entity';
import { Module as ModuleEntity } from './module/module.entity';
import { Student } from './module/student.entity';
import { BatchModule } from './batch/batch.module';
import { Batch } from './batch/entities/batch.entity';
import { LevelModule } from './level/level.module';
import { Level } from './level/entities/level.entity';
import { SpecialityModule } from './speciality/speciality.module';
import { Speciality } from './speciality/entities/speciality.entity';
import { GroupModule } from './group/group.module';
import { SectionModule } from './section/section.module';
import { Group } from './group/entities/group.entity';
import { SpecialityHasManyMoudules } from './speciality/entities/specialityHasManyModule.entity';
import { NewModule } from './new/new.module';
import { New } from './new/entities/new.entity';
import { ChapterModule } from './chapter/chapter.module';
import { Chapter } from './chapter/entities/chapter.entity';
import { Timetable } from './timetable/entities/timetable.entity';
import { Sale } from './sale/entities/sale.entity';
import { Lesson } from './lesson/entities/lesson.entity';



@Module({
  imports: [ TeacherModule, AdminModule, StudentModule, ModuleModule ,
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-77190-0.cloudclusters.net',
      port: 19483,
      username :'admin',
      password : 'Pvjrnwzy',
      database:'1cs_project_db',
      autoLoadEntities: true,
      entities: [
        Teacher , Admin , ModuleEntity , 
        Student  , Batch , Level , Speciality , 
        Group , SpecialityHasManyMoudules ,
        New , Chapter , Timetable , 
        Sale , Lesson
      ],
      synchronize: true,
    }),
    
    BatchModule,
    LevelModule,
    SpecialityModule,
    GroupModule,
    SectionModule,
    NewModule,
    ChapterModule,  
  ], 
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule { 
}
