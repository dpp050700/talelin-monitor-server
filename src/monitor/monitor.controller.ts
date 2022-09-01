import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { CreateMonitorDto } from './dto/create-monitor.dto';
import { UpdateMonitorDto } from './dto/update-monitor.dto';
import { ElasticService } from '../elastic/elastic.service';

@Controller('monitor')
export class MonitorController {
  constructor(
    private readonly monitorService: MonitorService,
    private readonly elasticService: ElasticService,
  ) {}

  @Post()
  create(@Body() createMonitorDto: CreateMonitorDto) {
    const timestamp = new Date().getTime();
    createMonitorDto.timestamp = timestamp;
    this.elasticService.add(createMonitorDto);
    return this.monitorService.create(createMonitorDto);
  }

  @Get('/all')
  async getAll() {
    const data = await this.elasticService.query();
    return data;
  }
}
