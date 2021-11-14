import { ImapGetEmailDto } from '../imap-get-email.dto';
export interface SendEmailRepository{
    getAllEmails(): Promise<void>
}