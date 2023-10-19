import { User } from '@/entities/User';

export interface CommentEntity {
  id: string;
  user: User;
  text: string;
}
