import jobTechIcons from "@/data/jobTechIcons";

export const openLink = (url: string) => window.open(url, '_blank', 'noreferrer');

export const getTechIconsByJobName = (workName: string) => {
    const jobIcons = jobTechIcons.get(workName);
    return jobIcons ? jobIcons : [];
}