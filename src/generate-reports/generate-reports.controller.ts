import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenerateReportsService } from './generate-reports.service';
import { CreateGenerateReportDto } from './dto/create-generate-report.dto';

@Controller('generate-reports')
export class GenerateReportsController {
  constructor(private readonly generateReportsService: GenerateReportsService) {}

  @Post()
  create() {
    return this.generateReportsService.create('./temp/allEmailsJson.json');
  }
  
}
