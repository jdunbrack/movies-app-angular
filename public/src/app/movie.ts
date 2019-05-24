import { Review } from './review';

export class Movie {
    constructor(
        public id: number = null,
        public title: string = "",
        public reviews: [Review] = [new Review()],
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}
