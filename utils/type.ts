export type Project = {
  title: string;
  body: string;
  bodyEng: string;
  type: string[];
  year: string;
  tools: string[];
  img: string;
  best?: boolean;
  id: string;
  path: string;
};

export type Experience = {
  title: string;
  place: string;
  years: string;
  description: string;
  thesis?: string;
  result?: string;
  id: string;
}

type skillType = "design" | "dev";

export type Skills = {
  name: string;
  type: skillType;
  perc: number;
}

