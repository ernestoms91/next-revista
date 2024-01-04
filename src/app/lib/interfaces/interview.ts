export interface interview  {
    title: string;
    section: {
        display_limit: number;
        name: string;
    };
    content_html: string;
    content: string;
    important: boolean;
    statement: string;
    educational_system: EducationalSystem;
    summary: string;
    quotes: {
        by: string;
        content: string;
    }[];
    header_image_url: string;
    id: number;
    publication_type: string;
    created_at: string;
    updated_at: string;
    published_at: string;
    keywords: string[];
    interviewer: string;
    interviewee: string;
};


interface EducationalSystem {
    name: string;
  }