import { Controller, Get } from '@nestjs/common';
import { ImapListenerEmailsService } from './imap-listener-emails.service';
import { GenerateReportsService } from '../generate-reports/generate-reports.service';

@Controller('gerar-txt-dos-emails')
export class ImapListenerEmailsController {
  constructor(private readonly imapListenerEmailsService: ImapListenerEmailsService,
    private readonly generateReportsService: GenerateReportsService) {}

  @Get()
  async getEmails(){
    await this.imapListenerEmailsService.getAllEmails();
  }
}
