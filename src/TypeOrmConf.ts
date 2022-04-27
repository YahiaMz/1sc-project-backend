import { Chapter } from './chapter/entities/chapter.entity';
import { Timetable } from './timetable/entities/timetable.entity';
import { Sale } from './sale/entities/sale.entity';
import { Lesson } from './lesson/entities/lesson.entity';
import { Batch } from './batch/entities/batch.entity';
import { Teacher } from './teacher/teacher.entity';
import { Group } from './group/entities/group.entity';
import { Student } from './module/student.entity';
import { Admin } from './admin/admin.entity';
import { Level } from './level/entities/level.entity';
import { Speciality } from './speciality/entities/speciality.entity';
import { New } from './new/entities/new.entity';
import { SpecialityHasManyMoudules } from './speciality/entities/specialityHasManyModule.entity';
import { Module as ModuleEntity } from './module/module.entity';

let onlineConf =  {
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
    synchronize: false,
  };


  export const localhostConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3036,
    database:'test',
    autoLoadEntities: true,
    entities: [
      Teacher , Admin , ModuleEntity , 
      Student  , Batch , Level , Speciality , 
      Group , SpecialityHasManyMoudules ,
      New , Chapter , Timetable , 
      Sale , Lesson
    ],
    synchronize: true,
  };
