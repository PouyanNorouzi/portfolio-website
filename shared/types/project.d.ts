declare interface Project {
	id: number;
	name: string;
	description: string;
	startDate: Date;
	endDate: Date;
	techStack: Skill[];
	tags: string[];
	image: string;
	github?: string;
	liveDemo?: string;
}
