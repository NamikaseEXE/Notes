import {Note} from '@/generated/prisma/client'

export type CreateNote = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>

export type UpdateNote = Partial<CreateNote>;