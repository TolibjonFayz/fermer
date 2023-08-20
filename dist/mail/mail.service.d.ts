import { MailerService } from '@nestjs-modules/mailer';
import { Admin } from '../admin/schemas/admin.schema';
export declare class MailService {
    private mailerservice;
    constructor(mailerservice: MailerService);
    sendAdminConfrmation(admin: Admin): Promise<void>;
}
