export interface Task {
	id: number;
	project_id: number;
	section_id: number;
	parent_id: number;
	content: string;
	comment_count: number;
	assignee: number;
	assigner: number;
	order: number;
	priority: number;
	url: string;
}
