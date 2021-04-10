export interface Task {
	assignee: number;
	assigner: number;
	comment_count: number;
	completed: boolean;
	content: string;
	due: DueDate;
	id: number;
	label_ids: any[];
	order: number;
	priority: number;
	project_id: number;
	section_id: number;
	parent_id: number;
	url: string;

	done: boolean;
}

export interface DueDate {
	date: string;
	recurring: boolean;
	datetime: Date;
	string: string;
	timezone: string;
}
