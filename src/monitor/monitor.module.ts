import { Module } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { MonitorController } from './monitor.controller';
import { ElasticModule } from '../elastic/elastic.module';

@Module({
  imports: [ElasticModule],
  controllers: [MonitorController],
  providers: [MonitorService],
})
export class MonitorModule {}
