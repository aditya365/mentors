export class MenteeListItem {
    constructor(
        public name: string,
        public imagePath: string,
        public lastSeen: string,
        public description: string,
        public courses: string[]
    ) { }
}