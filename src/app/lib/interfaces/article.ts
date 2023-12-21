interface Section {
    display_limit: number;
    name: string;
  }

  interface Author {
    description: string;
    first_name: string;
    second_name: string;
    first_lastname: string;
    second_lastname: string;
    social_media_handles: [];
  }

export interface article {
    title: string;
    section: Section;
    content: string;
    important: boolean;
    statement: string;
    authors: Author[];
    educationalSystem: string;
    draft: boolean;
    summary: string;
    quotes: string[];
    links: string[];
    publicationType: string;
    id: number;
    schedule: string;
    created_at: string;
  }