export const projectSlug = (project) => {
    return project.id.split("/").pop() ?? project.id;
}

export const projectUrl = (project) => {
    return `/projects/${projectSlug(project)}`
}
