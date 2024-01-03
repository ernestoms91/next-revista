interface Section {
    display_limit: number;
    name: string;
  }

  interface Author {
    id: string;
    description: string;
    first_name: string;
    second_name: string;
    first_lastname: string;
    second_lastname: string;
    social_media_handles: [];
  }

  interface EducationalSystem {
    name: string;
  }

export interface article {
    title: string;
    section: Section;
    content: string;
    important: boolean;
    statement: string;
    authors: Author[];
    educational_system: EducationalSystem;
    draft: boolean;
    summary: string;
    quotes: string[];
    links: string[];
    publicationType: string;
    id: number;
    schedule: string;
    header_image_url: string;
    created_at: string;
    published_at: string;
    content_html:string;
  }