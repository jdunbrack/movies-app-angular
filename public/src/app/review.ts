export class Review {
    constructor(
        public id: number = null,
        public name: string = "",
        public score: number = null,
        public comment: string = "",
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ) {}
}
