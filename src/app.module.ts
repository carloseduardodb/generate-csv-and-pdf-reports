import { Module } from '@nestjs/common';
import { GenerateReportsModule } from './generate-reports/generate-reports.module';
import { ImapListenerEmailsModule } from './imap-listener-emails/imap-listener-emails.module';

@Module({
  imports: [GenerateReportsModule, ImapListenerEmailsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
