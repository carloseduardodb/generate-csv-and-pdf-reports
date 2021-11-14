import { Injectable } from '@nestjs/common';
import { ImapFlow } from 'imapflow';
import { simpleParser, AddressObject } from 'mailparser';
import { SendEmailRepository } from './repositories/send-email.repository';
import * as fs from 'fs';
import { email, password } from './config/config';

@Injectable()
export class ImapListenerEmailsService implements SendEmailRepository {
  async getAllEmails(): Promise<void> {
    const client = new ImapFlow({
      // se parar de receber olhar o logger dasabilitado
      logger: false,
      host: 'outlook.office365.com',
      port: 993,
      secure: true,
      auth: {
        user: email,
        pass: password,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    let writeStream = fs.createWriteStream('./temp/allEmailsJson.json');
    const main = async () => {
      // inicia a conexão com o servidor de email
      await client.connect();
      await client.getMailboxLock('INBOX');

      // dispara evento quando a quantidade de mensagens da caixa de entrada modifica
      for await (let msg of client.fetch('1:35', {
        uid: true,
        envelope: true,
        source: true,
      })) {
        const body = await simpleParser(msg.source);
        const hydratedMessages = {
          text: body.text,
          date: body.date,
          from: body.from.value[0].address,
          to: body.to
        };
        writeStream.write(JSON.stringify(hydratedMessages) + '\r\n', 'utf-8');
        console.log('--- Carregando');
      }
      console.log('--- Finalizado');
      writeStream.close();
    };

    writeStream.on('finish', () => {
      console.log('Arquivos gravados com sucesso!');
    });

    main().catch((err) => console.error(err));
  }
}
