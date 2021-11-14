import { Module } from '@nestjs/common';
import { ImapListenerEmailsService } from './imap-listener-emails.service';
import { ImapListenerEmailsController } from './imap-listener-emails.controller';
import { GenerateReportsModule } from '../generate-reports/generate-reports.module';

@Module({
  controllers: [ImapListenerEmailsController],
  providers: [ImapListenerEmailsService],
  imports: [GenerateReportsModule]
})
export class ImapListenerEmailsModule {}
