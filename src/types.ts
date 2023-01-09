export type project = {
	  readonly id: number;
	  title: string;
	  description: string;
	  url?: string;
	  tech: string;
};

export type experience = {
	  id: number;
	  company: string;
	  title: string;
	  duration: string;
	  description: string;
	  tech: string[];
};
