import jobTechIcons from "core/data/jobTechIcons";

export const openLink = (url: string) => window.open(url, '_blank', 'noreferrer');

export const getTechIconsByJobName = (workName: string) => {
    const jobIcons = jobTechIcons.get(workName);
    return jobIcons ? jobIcons : [];
}

export const getMonthName = (month: number) => {
    switch (month) {
        case 1:
            return 'Jan';
        case 2:
            return 'Feb';
        case 3:
            return 'Mar';
        case 4:
            return 'Apr';
        case 5:
            return 'May';
        case 6:
            return 'Jun';
        case 7:
            return 'Jul';
        case 8:
            return 'Aug';
        case 9:
            return 'Sep';
        case 10:
            return 'Oct';
        case 11:
            return 'Nov';
        default:
            return 'Dec';
    }
}