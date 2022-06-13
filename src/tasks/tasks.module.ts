import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';
import { TypeOrmExModule } from './database/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([TasksRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
