import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Admin } from '../admin/schemas/admin.schema';

@Injectable()
export class MailService {
  constructor(private mailerservice: MailerService) {}

  async sendAdminConfrmation(admin: Admin): Promise<void> {
    const url = `${process.env.API_HOST}/api/admin/activate/${admin.activation_link}`;
    await this.mailerservice.sendMail({
      to: admin.email,
      subject: 'Welcome to Fermer App! Confirm your Email!',
      template: './confirmation',
      context: {
        name: admin.full_name,
        url,
      },
    });
  }
}
