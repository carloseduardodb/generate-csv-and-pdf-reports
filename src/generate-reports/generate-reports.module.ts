import { Module } from '@nestjs/common';
import { GenerateReportsService } from './generate-reports.service';
import { GenerateReportsController } from './generate-reports.controller';

@Module({
  controllers: [GenerateReportsController],
  providers: [GenerateReportsService],
  exports: [GenerateReportsService]
})
export class GenerateReportsModule {}
