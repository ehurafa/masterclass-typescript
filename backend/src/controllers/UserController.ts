import { Request, Response } from 'express';
import EmailService from '../services/EmailService'

const users = [
    { name: 'Rafael', email: 'rafael@rafael.eumesmo' }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { name: 'Ayrton Senna', email: 'numberone@f1.com' },
            message: { subject: 'Bem-vindo ao sistema', body: 'Seja Bem-vindo' }
        });
        return res.send();
    }
};